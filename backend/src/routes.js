import multer from 'multer';
import { Router } from 'express';

import multerConfig from './config/multer';
import SessionController from './app/controllers/SessionController';
import DeliveryController from './app/controllers/DeliveryController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryPickupController from './app/controllers/DeliveryPickupController';
import DeliveryFinishController from './app/controllers/DeliveryFinishController';
import DeliveryProblemsController from './app/controllers/DeliveryProblemsController';
import DeliverymanDeliveriesController from './app/controllers/DeliverymanDeliveriesController';
import DeliverymanOpenDeliveriesController from './app/controllers/DeliverymanOpenDeliveriesController';
import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/session', SessionController.store);
routes.get('/deliveryman', DeliverymanController.index);

routes.use(AuthMiddleware);
routes.get('/recipient', RecipientController.index);
routes.post('/recipient', RecipientController.store);
routes.put('/recipient/:id', RecipientController.update);
routes.delete('/recipient/:id', RecipientController.delete);

routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:id', DeliverymanController.update);
routes.put(
  '/deliveryman/:id/avatar',
  upload.single('file'),
  DeliverymanController.updateAvatar
);
routes.delete('/deliveryman/:id', DeliverymanController.delete);

routes.get('/deliveryman/:id', DeliverymanOpenDeliveriesController.index);

routes.get(
  '/deliveryman/:id/deliveries',
  DeliverymanDeliveriesController.index
);

routes.get('/delivery', DeliveryController.index);
routes.post('/delivery', DeliveryController.store);
routes.put('/delivery/:id', DeliveryController.update);
routes.delete('/delivery/:id', DeliveryController.delete);

routes.put('/delivery/:id/pickup', DeliveryPickupController.update);

routes.put(
  '/delivery/:id/finish',
  upload.single('file'),
  DeliveryFinishController.update
);

routes.get('/delivery/problems', DeliveryProblemsController.index);
routes.get('/delivery/:id/problems', DeliveryProblemsController.index);
routes.post('/delivery/:id/problems', DeliveryProblemsController.store);
routes.delete(
  '/problem/:id/cancel-delivery',
  DeliveryProblemsController.delete
);

export default routes;
