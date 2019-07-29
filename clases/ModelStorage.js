import Sequelize      from "sequelize";
import Configurations from "../config/initial";


class ModelStorage {

  static setSequelize(sequelize) {
    this.sequelize = sequelize;
  }

  static getSequelize() {
    return this.sequelize;
  }
}

ModelStorage.setSequelize(new Sequelize(
  Configurations.DATABASE.DATABASE,
  Configurations.DATABASE.USER,
  Configurations.DATABASE.PASSWORD,
  Configurations.DATABASE.OPTIONS
));

export default ModelStorage;
