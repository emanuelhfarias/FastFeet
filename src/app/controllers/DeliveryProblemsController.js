import DeliveryProblem from '../models/DeliveryProblem';

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
}

export default new DeliveryProblemsController();
