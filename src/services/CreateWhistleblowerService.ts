import { inject, injectable } from 'tsyringe';

import Whistleblower from '@entities/Whistleblower';
import WhistleblowerRepositoryDTO from '@dto/repositoriesDTOs/WhistleblowerRepositoryDTO';

import WhistleblowerDTO from '@dto/entitiesDTOs/WhistleblowerDTO';

@injectable()
export default class CreateWhistleblowerService {
    constructor(
        @inject('WhistleblowerRepository')
        private whistleblowerRepository: WhistleblowerRepositoryDTO
    ) {}

    public async execute({
        name,
        cpf,
    }: WhistleblowerDTO): Promise<Whistleblower> {
        const whistleblowerExists = await this.whistleblowerRepository.findByCpf(
            cpf
        );

        if (whistleblowerExists) {
            return whistleblowerExists;
        }

        const newWhistleblower = await this.whistleblowerRepository.create({
            name,
            cpf,
        });

        return newWhistleblower;
    }
}
