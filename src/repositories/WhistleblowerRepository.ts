import { getRepository, Repository } from 'typeorm';

import Whistleblower from '@entities/Whistleblower';

import WhistleblowerRepositoryDTO from '@dto/repositoriesDTOs/WhistleblowerRepositoryDTO';
import WhistleblowerDTO from '@dto/entitiesDTOs/WhistleblowerDTO';

export default class WhistleblowerRepository
    implements WhistleblowerRepositoryDTO {
    private ormRepository: Repository<Whistleblower>;

    constructor() {
        this.ormRepository = getRepository(Whistleblower);
    }

    public async create(
        whistleblower_data: WhistleblowerDTO
    ): Promise<Whistleblower> {
        const whistleblower = this.ormRepository.create(whistleblower_data);

        await this.ormRepository.save(whistleblower);

        return whistleblower;
    }

    public async save(whistleblower: Whistleblower): Promise<Whistleblower> {
        return this.ormRepository.save(whistleblower);
    }

    public async findByCpf(cpf: string): Promise<Whistleblower | undefined> {
        return this.ormRepository.findOne({
            where: { cpf },
        });
    }
}
