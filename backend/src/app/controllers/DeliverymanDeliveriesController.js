import { Op } from 'sequelize';
import Delivery from '../models/Delivery';

/*
 * Show finished deliveries from one delivery man
 */

class DeliverymanDeliveriesController {
  async index(req, res) {
    const { id } = req.params;
    const { page = 1 } = req.query;
    const tamanhoPagina = 10;
    const deliveries = await Delivery.findAll({
      where: { deliveryman_id: id, end_date: { [Op.ne]: null } },
      limit: tamanhoPagina,
      offset: (page - 1) * tamanhoPagina,
    });
    return res.json(deliveries);
  }
}

export default new DeliverymanDeliveriesController();
