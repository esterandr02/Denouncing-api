import { container } from 'tsyringe';

import ComplaintRepository from '@repositories/ComplaintRepository';
import ComplaintRepositoryDTO from '@dto/repositoriesDTOs/ComplaintRepositoryDTO';

import WhistleblowerRepository from '@repositories/WhistleblowerRepository';
import WhistleblowerRepositoryDTO from '@dto/repositoriesDTOs/WhistleblowerRepositoryDTO';

container.registerSingleton<ComplaintRepositoryDTO>(
    'ComplaintRepository',
    ComplaintRepository
);

container.registerSingleton<WhistleblowerRepositoryDTO>(
    'WhistleblowerRepository',
    WhistleblowerRepository
);
