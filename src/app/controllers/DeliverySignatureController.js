import File from '../models/File';
import Delivery from '../models/Delivery';

class DeliverySignatureController {
  async store(req, res) {
    const { id } = req.params;
    const { originalname: name, filename: path } = req.file;
    const file = await File.create({ name, path });

    await Delivery.update({ signature_id: file.id }, { where: { id } });

    return res.send();
  }
}

export default new DeliverySignatureController();
