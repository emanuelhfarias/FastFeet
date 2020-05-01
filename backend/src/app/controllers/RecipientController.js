import { Op } from 'sequelize';
import Recipient from '../models/Recipient';

class RecipientController {
  async index(req, res) {
    const { page = 1, q: name, id } = req.query;

    let filter = name ? { where: { nome: { [Op.iLike]: name } } } : {};
    filter = id ? { ...filter, ...{ where: { id } } } : { ...filter };

    const tamanhoPagina = 5;
    if (page < 1) return res.json([]);
    const recipients = await Recipient.findAll({
      ...filter,
      limit: tamanhoPagina,
      offset: (page - 1) * tamanhoPagina,
    });

    const total = await Recipient.count();

    return res.json({
      pagination: {
        total: Math.ceil(total / tamanhoPagina),
        next: total > page * tamanhoPagina,
        prev: page > 1,
      },
      records: recipients,
    });
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

  async delete(req, res) {
    const { id } = req.params;
    const resource = await Recipient.findByPk(id);

    if (!resource) {
      return res.status(404).json({ error: 'Recipient not found' });
    }

    await resource.destroy();

    return res.send();
  }
}

export default new RecipientController();
