import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateComplaintService from '@services/CreateComplaintService';

export default class ComplaintController {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        const { latitude, longitude, whistleblower, complaint } = request.body;

        const createComplaint = container.resolve(CreateComplaintService);

        const created_complaint = await createComplaint.execute({
            title: complaint.title,
            description: complaint.description,
            name: whistleblower.name,
            cpf: whistleblower.cpf,
            latitude,
            longitude,
        });

        return response.json(created_complaint);
    }

    public async list(request: Request, response: Response) {
        return response.json('okay');
    }
}
