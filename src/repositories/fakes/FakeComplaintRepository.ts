import Complaint from '@entities/Complaint';

import ComplaintRepositoryDTO from '@dto/repositoriesDTOs/ComplaintRepositoryDTO';
import ComplaintDTO from '@dto/entitiesDTOs/ComplaintDTO';

export default class FakeComplaintRepository implements ComplaintRepositoryDTO {
    private complaints: Complaint[] = [];

    public async create({
        whistleblower_id,
        title,
        description,
        latitude,
        longitude,
    }: ComplaintDTO): Promise<Complaint> {
        const complaint = new Complaint();

        const newComplaint = Object.assign(complaint, {
            whistleblower_id,
            title,
            description,
            latitude,
            longitude,
        });

        this.complaints.push(newComplaint);

        return newComplaint;
    }

    public async list(): Promise<Complaint[] | undefined> {
        return this.complaints;
    }
}
