import { Op } from 'sequelize';
import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async index(req, res) {
    const { q: name } = req.query;

    const filter = name ? { where: { name: { [Op.iLike]: name } } } : {};

    const deliverymen = await Deliveryman.findAll({ ...filter });
    return res.json(deliverymen);
  }

  async store(req, res) {
    const { name, email } = req.body;
    const deliveryman = await Deliveryman.create({ name, email });
    return res.status(201).json(deliveryman);
  }

  async update(req, res) {
    const { name, email } = req.body;
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(404).json({ error: 'Delivery man not found' });
    }

    await deliveryman.update({ name, email });

    return res.json({ name, email });
  }

  async delete(req, res) {
    const { id } = req.params;
    const deliveryman = await Deliveryman.findByPk(id);

    if (!deliveryman) {
      return res.status(404).json({ error: 'Delivery man not found' });
    }

    await deliveryman.destroy();

    return res.send();
  }
}

export default new DeliverymanController();
