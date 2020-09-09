import FakeComplaintRepository from '@repositories/fakes/FakeComplaintRepository';
import FakeWhistleblowerRepository from '@repositories/fakes/FakeWhistleblowerRepository';

import CreateComplaintService from '@services/CreateComplaintService';

let fakeComplaintRepository: FakeComplaintRepository;
let fakeWhistleblowerRepository: FakeWhistleblowerRepository;

let createComplaint: CreateComplaintService;

describe('CreateComplaints', () => {
    beforeEach(() => {
        fakeComplaintRepository = new FakeComplaintRepository();
        fakeWhistleblowerRepository = new FakeWhistleblowerRepository();
        createComplaint = new CreateComplaintService(fakeComplaintRepository);
    });

    it('It should be able to create a new complaint with a new whistleblower', async () => {
        const whistleblower = await fakeWhistleblowerRepository.create({
            name: 'José de Oliveira',
            cpf: '95761638037',
        });

        const complaint = await createComplaint.execute({
            whistleblower,
            complaint: {
                title: 'Esgoto a céu aberto',
                description: 'Existe um esgoto a céu aberto nesta localidade',
            },
            latitude: '-9.56921',
            longitude: '-36.76422',
        });

        expect(complaint).toHaveProperty('id');
    });

    it('It should be able to list the complaints', async () => {
        const listComplaints = jest.spyOn(fakeComplaintRepository, 'list');

        const whistleblower = await fakeWhistleblowerRepository.create({
            name: 'José de Oliveira',
            cpf: '95761638037',
        });

        await createComplaint.execute({
            whistleblower,
            complaint: {
                title: 'Esgoto a céu aberto',
                description: 'Existe um esgoto a céu aberto nesta localidade',
            },
            latitude: '-9.56921',
            longitude: '-36.76422',
        });

        await createComplaint.execute({
            whistleblower,
            complaint: {
                title: 'Foco de Mosquitos',
                description:
                    'Terreno baldio com foco de mosquitos nesta localidade',
            },
            latitude: '-9.56921',
            longitude: '-36.76422',
        });

        await createComplaint.listComplaints();

        expect(listComplaints).toHaveBeenCalled();
    });
});
