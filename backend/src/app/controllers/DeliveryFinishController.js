import File from '../models/File';
import Delivery from '../models/Delivery';

class DeliveryFinishController {
  async update(req, res) {
    const { id } = req.params;
    const { originalname: name, filename: path } = req.file;
    const file = await File.create({ name, path });

    await Delivery.update(
      { signature_id: file.id, end_date: new Date() },
      { where: { id } }
    );

    return res.send();
  }
}

export default new DeliveryFinishController();
