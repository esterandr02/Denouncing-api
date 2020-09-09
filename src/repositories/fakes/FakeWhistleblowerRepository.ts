import { uuid } from 'uuidv4';

import Whistleblower from '@entities/Whistleblower';

import WhistleblowerRepositoryDTO from '@dto/repositoriesDTOs/WhistleblowerRepositoryDTO';
import WhistleblowerDTO from '@dto/entitiesDTOs/WhistleblowerDTO';

export default class WhistleblowerRepository
    implements WhistleblowerRepositoryDTO {
    private whistleblowers: Whistleblower[] = [];

    public async create({
        name,
        cpf,
    }: WhistleblowerDTO): Promise<Whistleblower> {
        const whistleblower = new Whistleblower();

        Object.assign(whistleblower, { id: uuid(), name, cpf });

        this.whistleblowers.push(whistleblower);

        return whistleblower;
    }

    public async findByCpf(cpf: string): Promise<Whistleblower | undefined> {
        const whistleblower = this.whistleblowers.find(
            whistleblower => whistleblower.cpf === cpf
        );
        return whistleblower;
    }
}
