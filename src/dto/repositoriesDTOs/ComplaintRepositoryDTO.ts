import Complaint from '@entities/Complaint';
import ComplaintDTO from '@dto/entitiesDTOs/ComplaintDTO';

export default interface ComplaintRepositoryDTO {
    create(complaint_data: ComplaintDTO): Promise<Complaint>;
    save(complaint: Complaint): Promise<Complaint>;
}
