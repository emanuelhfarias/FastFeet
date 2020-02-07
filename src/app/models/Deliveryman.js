import Sequelize, { Model } from 'sequelize';

class Deliveryman extends Model {
  static init(sequelize) {
    sequelize.tableName = 'deliverymen';

    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      { sequelize, tableName: 'deliverymen' }
    );
    return this;
  }
}

export default Deliveryman;
