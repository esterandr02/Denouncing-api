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

    public async execute(
        whistleblower_data: WhistleblowerDTO
    ): Promise<Whistleblower> {
        const newWhistleblower = await this.whistleblowerRepository.create(
            whistleblower_data
        );

        return newWhistleblower;
    }
}
