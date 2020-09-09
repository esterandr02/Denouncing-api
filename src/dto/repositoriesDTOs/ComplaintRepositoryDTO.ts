import Complaint from '@entities/Complaint';

import Request from '@dto/Request';
import Address from '@dto/Address';

export default interface ComplaintRepositoryDTO {
    create(complaint_data: Request): Promise<Complaint>;
    list(): Promise<Complaint[] | undefined>;
    findById(id: string): Promise<Complaint | undefined>;
}
