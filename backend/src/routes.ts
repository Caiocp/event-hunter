import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import EventsController from './controllers/eventsController';
import UserController from './controllers/usersController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/events', EventsController.index);
routes.get('/events/:id', EventsController.show);
routes.post('/events', upload.single('banner'), EventsController.create);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.create);

export default routes;
