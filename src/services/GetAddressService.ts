import locationApi from 'api';

import Address from '@dto/Address';

import NewError from '@error/NewError';

interface Coordinates {
    latitude: string;
    longitude: string;
}

export default class getAddressService {
    public async execute({
        latitude,
        longitude,
    }: Coordinates): Promise<Address> {
        try {
            const response = await locationApi.get('geocoding/v1/reverse', {
                params: {
                    key: process.env.API_KEY,
                    location: `${latitude},${longitude}`,
                    thumbMap: false,
                },
            });

            const {
                street,
                adminArea6,
                adminArea5,
                adminArea3,
                adminArea1,
                postalCode,
            } = response.data.results[0].locations[0];

            const address = {
                street,
                neighborhood: adminArea6,
                city: adminArea5,
                state: adminArea3,
                country: adminArea1,
                cep: postalCode,
            };

            if (
                address.city === '' ||
                address.state === '' ||
                address.country === ''
            ) {
                throw new NewError('Invalid Address properties.', 406);
            }

            return address;
        } catch (error) {
            throw new NewError('Address not found', 404);
        }
    }
}
