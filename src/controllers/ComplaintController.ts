import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateComplaintService from '@services/CreateComplaintService';
import CreateWhistleblowerService from '@services/CreateWhistleblowerService';
import GetAddressService from '@services/GetAddressService';

export default class ComplaintController {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        try {
            const {
                latitude,
                longitude,
                whistleblower,
                complaint,
            } = request.body;

            const checkWhistleblower = container.resolve(
                CreateWhistleblowerService
            );

            const getWhistleblower = await checkWhistleblower.execute(
                whistleblower
            );

            const createComplaint = container.resolve(CreateComplaintService);

            const createdComplaint = await createComplaint.execute({
                whistleblower: getWhistleblower,
                complaint,
                latitude,
                longitude,
            });

            const getAddress = new GetAddressService();

            const address = await getAddress.execute({ latitude, longitude });

            Object.assign(createdComplaint, { address });

            return response.json(createdComplaint);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }

    public async list(request: Request, response: Response): Promise<Response> {
        try {
            const listComplaints = container.resolve(CreateComplaintService);

            const complaints = await listComplaints.listComplaints();

            return response.json(complaints);
        } catch (err) {
            return response.json({ error: err.message });
        }
    }
}
