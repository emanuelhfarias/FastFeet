import Recipient from '../models/Recipient';

class RecipientController {
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
