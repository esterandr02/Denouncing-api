import Whistleblower from '@entities/Whistleblower';

export default interface Request {
    whistleblower: Whistleblower;
    complaint: {
        title: string;
        description: string;
    };
    latitude: string;
    longitude: string;
}
