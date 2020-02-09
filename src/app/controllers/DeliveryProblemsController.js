import DeliveryProblem from '../models/DeliveryProblem';
import Deliveryman from '../models/Deliveryman';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Mail from '../../lib/Mail';

class DeliveryProblemsController {
  async index(req, res) {
    const { id } = req.params;
    let problems = [];
    if (id) {
      problems = await DeliveryProblem.findAll({
        where: { delivery_id: id },
      });
    } else {
      problems = await DeliveryProblem.findAll();
    }
    return res.json(problems);
  }

  async store(req, res) {
    const { id } = req.params;
    const { description } = req.body;
    const problem = await DeliveryProblem.create({
      delivery_id: id,
      description,
    });
    return res.json(problem);
  }

  async delete(req, res) {
    const { id } = req.params;
    const problem = await DeliveryProblem.findByPk(id);

    if (!problem) {
      return res.json({ error: 'Cannot cancel. Wrong delivery problem.' });
    }

    Delivery.update(
      { canceled_at: new Date() },
      { where: { id: problem.delivery_id } }
    );

    const delivery = await Delivery.findOne({
      where: { id: problem.delivery_id },
      attributes: ['product'],
      include: [
        { model: Deliveryman, attributes: ['name', 'email'] },
        { model: Recipient, attributes: ['nome'] },
      ],
    });

    // envia email pro entregador informando o cancelamento
    await Mail.sendMail({
      to: `${delivery.Deliveryman.name} <${delivery.Deliveryman.email}>`,
      subject: 'Entrega cancelada',
      template: 'cancelation_delivery',
      context: {
        deliveryman: delivery.Deliveryman.name,
        recipient: delivery.Recipient.nome,
        product: delivery.product,
        motivo: problem.description,
      },
    });

    return res.send();
  }
}

export default new DeliveryProblemsController();
