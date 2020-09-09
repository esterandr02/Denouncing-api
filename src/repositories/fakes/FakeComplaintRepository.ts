import { uuid } from 'uuidv4';

import Complaint from '@entities/Complaint';

import ComplaintRepositoryDTO from '@dto/repositoriesDTOs/ComplaintRepositoryDTO';
import Request from '@dto/Request';

export default class FakeComplaintRepository implements ComplaintRepositoryDTO {
    private complaints: Complaint[] = [];

    public async create({
        whistleblower,
        complaint,
        latitude,
        longitude,
    }: Request): Promise<Complaint> {
        const newComplaint = new Complaint();

        Object.assign(newComplaint, {
            id: uuid(),
            whistleblower_id: whistleblower.id,
            title: complaint.title,
            description: complaint.description,
            latitude,
            longitude,
        });

        this.complaints.push(newComplaint);

        return newComplaint;
    }

    public async list(): Promise<Complaint[] | undefined> {
        return this.complaints;
    }

    public async findById(id: string): Promise<Complaint | undefined> {
        const complaint = this.complaints.find(
            complaint => complaint.id === id
        );

        return complaint;
    }
}
