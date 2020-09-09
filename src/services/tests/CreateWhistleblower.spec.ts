import FakeWhistleblowerRepository from '@repositories/fakes/FakeWhistleblowerRepository';

import CreateWhistleblowerService from '@services/CreateWhistleblowerService';

let fakeWhistleblowerRepository: FakeWhistleblowerRepository;
let createWhistleblower: CreateWhistleblowerService;

describe('CreateWhistleblower', () => {
    beforeEach(() => {
        fakeWhistleblowerRepository = new FakeWhistleblowerRepository();
        createWhistleblower = new CreateWhistleblowerService(
            fakeWhistleblowerRepository
        );
    });

    it('It should be able to create a new whistleblower', async () => {
        const whistleblower = await createWhistleblower.execute({
            name: 'José de Oliveira',
            cpf: '95761638037',
        });

        expect(whistleblower).toHaveProperty('id');
    });

    it('It should not be able to create a new whistleblower with same cpf from another', async () => {
        const firstWhistleblower = await createWhistleblower.execute({
            name: 'José de Oliveira',
            cpf: '95761638037',
        });

        const secondWhistleblower = await createWhistleblower.execute({
            name: 'José de Oliveira',
            cpf: '95761638037',
        });

        expect(secondWhistleblower.id).toEqual(firstWhistleblower.id);
    });
});
