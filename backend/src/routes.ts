import { Router } from 'express';

import EventsController from './controllers/eventsController';

const routes = Router();

routes.get('/events', EventsController.index);
routes.post('/events', EventsController.create);

export default routes;
