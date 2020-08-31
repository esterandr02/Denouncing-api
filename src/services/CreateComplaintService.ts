import { inject, injectable } from 'tsyringe';

import Request from '@dto/Request';
import Response from '@dto/Response';

import ComplaintRepository from '@repositories/ComplaintRepository';

@injectable()
export default class CreateComplaintService {
    constructor(
        @inject('ComplaintRepository')
        private complaintRepository: ComplaintRepository
    ) {}

    public async execute({}: Request): Promise<void> {}
}
