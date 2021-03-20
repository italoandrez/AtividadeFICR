const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
        status: Sequelize.ENUM("pendente", "andamento", "concluida"),
      },
      { sequelize }
    );

    return this;
  }
}

module.exports = Task;
