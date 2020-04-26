import { Op } from 'sequelize';
import File from '../models/File';
import Deliveryman from '../models/Deliveryman';

class DeliverymanController {
  async index(req, res) {
    const { q: name, id } = req.query;

    let filter = name ? { where: { name: { [Op.iLike]: name } } } : {};
    filter = id ? { ...filter, ...{ where: { id } } } : { ...filter };

    const deliverymen = await Deliveryman.findAll({
      ...filter,
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });
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

  async updateAvatar(req, res) {
    const { id } = req.params;
    const { originalname: name, filename: path } = req.file;
    const file = await File.create({ name, path });

    await Deliveryman.update(
      { avatar_id: file.id, end_date: new Date() },
      { where: { id } }
    );

    return res.send();
  }
}

export default new DeliverymanController();
