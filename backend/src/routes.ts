import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import EventsController from './controllers/eventsController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/events', EventsController.index);
routes.get('/events/:id', EventsController.show);
routes.post('/events', upload.single('banner'), EventsController.create);

export default routes;
