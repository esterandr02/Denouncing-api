interface Whistleblower {
    name: string;
    cpf: string;
}

interface Complaint {
    title: string;
    description: string;
}

interface Address {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    cep: string;
}

export default interface Response {
    id: number;
    latitude: string;
    longitude: string;
    whistleblower: Whistleblower;
    complaint: Complaint;
    address: Address;
}
