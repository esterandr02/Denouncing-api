import { inject, injectable } from 'tsyringe';

import Complaint from '@entities/Complaint';
import NewError from '@error/NewError';

import ComplaintRepositoryDTO from '@dto/repositoriesDTOs/ComplaintRepositoryDTO';

import Request from '@dto/Request';

@injectable()
export default class CreateComplaintService {
    constructor(
        @inject('ComplaintRepository')
        private complaintRepository: ComplaintRepositoryDTO
    ) {}

    public async execute({
        whistleblower,
        complaint,
        latitude,
        longitude,
    }: Request): Promise<Complaint> {
        const newComplaint = await this.complaintRepository.create({
            whistleblower,
            complaint,
            latitude,
            longitude,
        });

        const createdComplaint = await this.complaintRepository.findById(
            newComplaint.id
        );

        /* istanbul ignore next */
        if (!createdComplaint) {
            throw new NewError(
                'An unexpected problem occurred. Complaint was not created.',
                500
            );
        }

        return createdComplaint;
    }

    public async listComplaints(): Promise<Complaint[]> {
        const complaints = await this.complaintRepository.list();

        /* istanbul ignore next */
        if (!complaints) {
            throw new NewError('An unexpected error ocurred.', 500);
        }

        return complaints;
    }
}
