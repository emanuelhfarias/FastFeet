import multer from 'multer';
import { Router } from 'express';

import multerConfig from './config/multer';
import SessionController from './app/controllers/SessionController';
import DeliveryController from './app/controllers/DeliveryController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliverySignatureController from './app/controllers/DeliverySignatureController';
import DeliverymanDeliveriesController from './app/controllers/DeliverymanDeliveriesController';
import DeliverymanOpenDeliveriesController from './app/controllers/DeliverymanOpenDeliveriesController';
import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/session', SessionController.store);

routes.use(AuthMiddleware);
routes.post('/recipient', RecipientController.store);
routes.put('/recipient/:id', RecipientController.update);

routes.get('/deliveryman', DeliverymanController.index);
routes.post('/deliveryman', DeliverymanController.store);
routes.put('/deliveryman/:id', DeliverymanController.update);
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

routes.post(
  '/delivery/:id/signature',
  upload.single('file'),
  DeliverySignatureController.store
);

export default routes;
