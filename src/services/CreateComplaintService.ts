import { inject, injectable } from 'tsyringe';
import { container } from 'tsyringe';

import ComplaintRepository from '@repositories/ComplaintRepository';
import WhistleblowerRepository from '@repositories/WhistleblowerRepository';

import CreateWhistleblowerService from '@services/CreateWhistleblowerService';

import Request from '@dto/Request';
import Response from '@dto/Response';

@injectable()
export default class CreateComplaintService {
    constructor(
        @inject('ComplaintRepository')
        private complaintRepository: ComplaintRepository,

        @inject('WhistleblowerRepository')
        private whistleblowerRepository: WhistleblowerRepository
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
}
