const Sequelize = require("sequelize");
const configDB = require("../config/database");
const Task = require("../app/models/Task");

const models = [Task];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDB);
    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models)
    );
  }
}

module.exports = new Database();
