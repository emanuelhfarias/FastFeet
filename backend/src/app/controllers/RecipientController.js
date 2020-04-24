import { Op } from 'sequelize';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { q: name, id } = req.query;

    let filter = name ? { where: { nome: { [Op.iLike]: name } } } : {};
    filter = id ? { ...filter, ...{ where: { id } } } : { ...filter };

    const recipients = await Recipient.findAll({ ...filter });
    return res.json(recipients);
  }

  async store(req, res) {
    const recipient = await Recipient.create(req.body);
    return res.status(201).json(recipient);
  }

  async update(req, res) {
    const { id } = req.params;

    const recipient = await Recipient.findByPk(id);
    if (!recipient) {
      return res.status(404).json('Destinatário não encontrado.');
    }

    await recipient.update(req.body);
    return res.status(201).json(req.body);
  }
}

export default new RecipientController();
