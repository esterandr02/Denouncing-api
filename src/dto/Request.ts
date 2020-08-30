interface Whistleblower {
    name: string;
    cpf: string;
}

interface Complaint {
    title: string;
    description: string;
}

export default interface Request {
    latitude: string;
    longitude: string;
    whistleblower: Whistleblower;
    complaint: Complaint;
    description: string;
}
