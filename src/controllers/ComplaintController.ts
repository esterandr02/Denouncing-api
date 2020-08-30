import { Request, Response } from 'express';

export default class ComplaintController {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { latitude, longitude, whistleblower, complaint } = request.body;

        const data = {
            id: 1,
            latitude,
            longitude,
            whistleblower,
            complaint,
            address: {
                street: 'ary-pitombo',
                neighborhood: 'trapiche',
                city: 'maceio',
                state: 'AL',
                country: 'Brasil',
                cep: '57010376',
            },
        };

        return response.json(data);
    }

    public async list(request: Request, response: Response) {
        return response.json('okay');
    }
}
