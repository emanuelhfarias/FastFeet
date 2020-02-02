import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('oi!');
});

export default routes;