import { getRepository, Repository } from 'typeorm';

import Complaint from '@entities/Complaint';

import ComplaintRepositoryDTO from '@dto/repositoriesDTOs/ComplaintRepositoryDTO';
import Request from '@dto/Request';

export default class ComplaintRepository implements ComplaintRepositoryDTO {
    private ormRepository: Repository<Complaint>;

    constructor() {
        this.ormRepository = getRepository(Complaint);
    }

    public async create({
        whistleblower,
        complaint,
        latitude,
        longitude,
    }: Request): Promise<Complaint> {
        const newComplaint = this.ormRepository.create({
            whistleblower_id: whistleblower.id,
            title: complaint.title,
            description: complaint.description,
            latitude,
            longitude,
        });

        await this.ormRepository.save(newComplaint);

        return newComplaint;
    }

    public async list(): Promise<Complaint[] | undefined> {
        const complaints = await this.ormRepository.find();

        return complaints;
    }

    public async findById(id: string): Promise<Complaint | undefined> {
        const complaint = await this.ormRepository.findOne({ where: { id } });

        return complaint;
    }
}
