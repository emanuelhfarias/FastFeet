module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipients', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: { type: Sequelize.STRING, allowNull: false },
      rua: { type: Sequelize.STRING, allowNull: false },
      numero: { type: Sequelize.INTEGER, allowNull: true },
      complemento: { type: Sequelize.STRING, allowNull: true },
      estado: { type: Sequelize.STRING, allowNull: false },
      cep: { type: Sequelize.INTEGER, allowNull: true },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false },
    });
  },

  down: queryInterface => {
    queryInterface.dropTable('recipients');
  },
};
