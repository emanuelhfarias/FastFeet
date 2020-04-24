import { Op } from 'sequelize';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import Delivery from '../models/Delivery';
import Mail from '../../lib/Mail';

class DeliveryController {
  async index(req, res) {
    const { page = 1, q: name, id } = req.query;

    let filter = name ? { where: { product: { [Op.iLike]: name } } } : {};
    filter = id ? { ...filter, ...{ where: { id } } } : { ...filter };

    const tamanhoPagina = 5;
    const deliveries = await Delivery.findAll({
      ...filter,
      include: [
        { model: Deliveryman, attributes: ['name'] },
        { model: Recipient, attributes: ['nome', 'cidade', 'estado'] },
      ],
      limit: tamanhoPagina,
      offset: (page - 1) * tamanhoPagina,
    });
    return res.json(deliveries);
  }

  async store(req, res) {
    const { recipient_id, deliveryman_id } = req.body;

    if (!(recipient_id && deliveryman_id)) {
      return res
        .status(400)
        .json({ error: 'Favor informar o entregador e destinatário' });
    }

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);
    const recipient = await Recipient.findByPk(recipient_id);

    // envia email pro entregador
    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova encomenda para entrega',
      template: 'new_delivery',
      context: {
        deliveryman: deliveryman.name,
        recipient: recipient.nome,
        produto: req.body.product,
        rua: recipient.rua,
        numero: recipient.numero,
        complemento: recipient.complemento,
        estado: recipient.estado,
        cidade: recipient.cidade,
        cep: recipient.cep,
      },
    });

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
