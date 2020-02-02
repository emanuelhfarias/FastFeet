import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        rua: Sequelize.STRING,
        numero: Sequelize.INTEGER,
        complemento: Sequelize.STRING,
        estado: Sequelize.STRING,
        cep: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Recipient;
