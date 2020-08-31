import { getRepository, Repository } from 'typeorm';

import Complaint from '@models/Complaint';

export default class ComplaintRepository {
    private ormRepository: Repository<Complaint>;

    constructor() {
        this.ormRepository = getRepository(Complaint);
    }

    public async create(): Promise<void> {}
}
