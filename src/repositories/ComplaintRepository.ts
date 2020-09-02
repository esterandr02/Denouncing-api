import { getRepository, Repository } from 'typeorm';

import Complaint from '@entities/Complaint';

import ComplaintRepositoryDTO from '@dto/repositoriesDTOs/ComplaintRepositoryDTO';
import ComplaintDTO from '@dto/entitiesDTOs/ComplaintDTO';

export default class ComplaintRepository implements ComplaintRepositoryDTO {
    private ormRepository: Repository<Complaint>;

    constructor() {
        this.ormRepository = getRepository(Complaint);
    }

    public async create({
        whistleblower_id,
        title,
        description,
        latitude,
        longitude,
    }: ComplaintDTO): Promise<Complaint> {
        const newComplaint = this.ormRepository.create({
            whistleblower_id,
            title,
            description,
            latitude,
            longitude,
        });

        await this.ormRepository.save(newComplaint);

        return newComplaint;
    }

    public async save(complaint: Complaint): Promise<Complaint> {
        return this.ormRepository.save(complaint);
    }
}
