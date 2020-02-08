import Delivery from '../models/Delivery';

class DeliveryController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const tamanhoPagina = 5;
    const deliveries = await Delivery.findAll({
      limit: tamanhoPagina,
      offset: (page - 1) * tamanhoPagina,
    });
    return res.json(deliveries);
  }

  async store(req, res) {
    const delivery = await Delivery.create(req.body);
    return res.json(delivery);
  }

  async update(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(404).json({ error: 'delivery not found' });
    }

    const deliveryUpdated = await delivery.update(req.body);

    return res.json(deliveryUpdated);
  }

  async delete(req, res) {
    const { id } = req.params;
    const delivery = await Delivery.findByPk(id);

    if (!delivery) {
      return res.status(404).json({ error: 'delivery not found' });
    }

    delivery.destroy();

    return res.send();
  }
}

export default new DeliveryController();
