import Sequelize from 'sequelize';
import File from '../app/models/File';
import User from '../app/models/User';
import Delivery from '../app/models/Delivery';
import Recipient from '../app/models/Recipient';
import DeliveryProblem from '../app/models/DeliveryProblem';
import Deliveryman from '../app/models/Deliveryman';
import databaseConfig from '../config/database';

const models = [User, Recipient, Deliveryman, Delivery, File, DeliveryProblem];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );
  }
}

export default new Database();
