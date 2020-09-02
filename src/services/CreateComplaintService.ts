import { inject, injectable } from 'tsyringe';
import { container } from 'tsyringe';

import Complaint from '@entities/Complaint';
import NewError from '@error/NewError';

import ComplaintRepositoryDTO from '@dto/repositoriesDTOs/ComplaintRepositoryDTO';
import WhistleblowerRepositoryDTO from '@dto/repositoriesDTOs/WhistleblowerRepositoryDTO';

import CreateWhistleblowerService from '@services/CreateWhistleblowerService';

import Request from '@dto/Request';
import Response from '@dto/Response';

@injectable()
export default class CreateComplaintService {
    constructor(
        @inject('ComplaintRepository')
        private complaintRepository: ComplaintRepositoryDTO,

        @inject('WhistleblowerRepository')
        private whistleblowerRepository: WhistleblowerRepositoryDTO
    ) {}

    public async execute({
        title,
        description,
        name,
        cpf,
        latitude,
        longitude,
    }: Request): Promise<Response> {
        let whistleblowerExists = await this.whistleblowerRepository.findByCpf(
            cpf
        );

        if (!whistleblowerExists) {
            const createWhistleblower = container.resolve(
                CreateWhistleblowerService
            );

            whistleblowerExists = await createWhistleblower.execute({
                name,
                cpf,
            });
        }

        const newComplaint = await this.complaintRepository.create({
            whistleblower_id: whistleblowerExists.id,
            title,
            description,
            latitude,
            longitude,
        });

        return {
            id: newComplaint.id,
            latitude: newComplaint.latitude,
            longitude: newComplaint.longitude,
            whistleblower: {
                name: whistleblowerExists.name,
                cpf: whistleblowerExists.cpf,
            },
            complaint: {
                title: newComplaint.title,
                description: newComplaint.description,
            },
            address: {
                street: 'bla',
                neighborhood: 'bla',
                city: 'bla',
                state: 'bla',
                country: 'bla',
                cep: 'bla',
            },
        };
    }

    public async listComplaints(): Promise<Complaint[]> {
        const complaints = await this.complaintRepository.list();

        if (!complaints) {
            throw new NewError('An unexpected error ocurred.', 500);
        }

        if (!complaints[0]) {
            throw new NewError('There are no complaints yet.', 200);
        }

        return complaints;
    }
}
