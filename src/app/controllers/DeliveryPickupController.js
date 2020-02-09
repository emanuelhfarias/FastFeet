import { isWithinInterval } from 'date-fns';
import { Op } from 'sequelize';

import Delivery from '../models/Delivery';

class DeliveryPickupController {
  async update(req, res) {
    const { id } = req.params;
    const { deliveryman_id } = req.body;

    if (!deliveryman_id) {
      return res
        .status(400)
        .json({ error: 'Favor informar qual é o entregador' });
    }

    // valida hora da retirada do produto pelo entregador
    const now = new Date();
    const morning = new Date().setHours(8, 0, 0);
    const afternoon = new Date().setHours(18, 0, 0);
    const periodValid = isWithinInterval(now, {
      start: morning,
      end: afternoon,
    });
    if (!periodValid) {
      return res.status(400).json({
        error: 'Retirada do produto só pode ser feita das 08:00h às 18:00h',
      });
    }

    // valida se o entregador excedeu o numero de retiradas diarias
    const today_start = new Date().setHours(0, 0, 0, 0);
    const retiradas = await Delivery.count({
      where: {
        deliveryman_id,
        start_date: { [Op.gt]: today_start, [Op.lt]: now },
      },
    });
    if (retiradas >= 5) {
      return res
        .status(400)
        .json({ error: 'Excedeu o número diário de retiradas diárias.' });
    }

    await Delivery.update({ start_date: now }, { where: { id } });

    return res.json();
  }
}

export default new DeliveryPickupController();
