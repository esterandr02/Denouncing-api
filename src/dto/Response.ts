import Address from './Address';

interface Whistleblower {
    name: string;
    cpf: string;
}

interface Complaint {
    title: string;
    description: string;
}

export default interface Response {
    id: string;
    latitude: string;
    longitude: string;
    whistleblower: Whistleblower;
    complaint: Complaint;
    address: Address;
}
