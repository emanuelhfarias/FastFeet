import { parseISO, isWithinInterval } from 'date-fns';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import Delivery from '../models/Delivery';
import Mail from '../../lib/Mail';

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

    // valida hora da retirada do produto pelo entregador
    if (req.body.start_date) {
      const startDate = parseISO(req.body.start_date);

      const morning = new Date();
      morning.setHours(8, 0, 0);

      const afternoon = new Date();
      afternoon.setHours(18, 0, 0);
      const periodValid = isWithinInterval(startDate, {
        start: morning,
        end: afternoon,
      });
      if (!periodValid) {
        return res.status(400).json({
          error: 'Retirada do produto só pode ser feita das 08:00h às 18:00h',
        });
      }
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
