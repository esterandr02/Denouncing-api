import { Request, Response } from 'express';

export default class ComplaintController {
    public async create(
        request: Request,
        response: Response
    ): Promise<Response> {
        const {
            latitude,
            longitude,
            complainer,
            complaint,
            description,
        } = request.body;

        const data = {
            latitude,
            longitude,
            complainer,
            complaint,
            description,
        };

        return response.json(data);
    }

    public async list(request: Request, response: Response) {
        return response.json('okay');
    }
}
