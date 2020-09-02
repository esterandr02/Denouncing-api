import Complaint from '@entities/Complaint';
import ComplaintDTO from '@dto/entitiesDTOs/ComplaintDTO';

export default interface ComplaintRepositoryDTO {
    create(complaint_data: ComplaintDTO): Promise<Complaint>;
    list(): Promise<Complaint[] | undefined>;
}
