import { Router } from 'express';

import ComplaintController from './controllers/ComplaintController';

const routes = Router();

const complaintController = new ComplaintController();

routes.get('/v1/denuncias', complaintController.list);

routes.post('/v1/denuncias', complaintController.create);

export default routes;
