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

    public async create({
        name,
        cpf,
    }: WhistleblowerDTO): Promise<Whistleblower> {
        const whistleblower = this.ormRepository.create({ name, cpf });

        await this.ormRepository.save(whistleblower);

        return whistleblower;
    }

    public async findByCpf(cpf: string): Promise<Whistleblower | undefined> {
        return this.ormRepository.findOne({
            where: { cpf },
        });
    }
}
