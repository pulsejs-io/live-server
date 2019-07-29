import Sequelize      from 'sequelize';
import Path           from 'path';
import FileSystem     from 'fs';
import Configurations from '../config/initial';

export default function () {
  const sequelize = new Sequelize(
    Configurations.DATABASE.DATABASE,
    Configurations.DATABASE.USER,
    Configurations.DATABASE.PASSWORD,
    Configurations.DATABASE.OPTIONS
  );

  const Suscriptor = sequelize.import('../modelos/Suscriptor');
  const Rol        = sequelize.import('../modelos/RolSuscriptor');

  return {
    sequelize,
    Sequelize
  }
};
