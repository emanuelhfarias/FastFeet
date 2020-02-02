import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

const routes = new Router();

routes.post('/session', SessionController.store);
routes.post('/recipient', RecipientController.store);
routes.put('/recipient/:id', RecipientController.update);

export default routes;
