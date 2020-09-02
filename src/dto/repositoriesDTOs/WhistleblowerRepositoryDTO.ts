import Whistleblower from '@entities/Whistleblower';
import WhistleblowerDTO from '@dto/entitiesDTOs/WhistleblowerDTO';

export default interface WhistleblowerRepositoryDTO {
    create(whistleblower_data: WhistleblowerDTO): Promise<Whistleblower>;
    findByCpf(cpf: string): Promise<Whistleblower | undefined>;
}
