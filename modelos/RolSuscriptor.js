import { Model, DataTypes } from 'sequelize';
import { createHash }       from "crypto";

export default function (Sequelize) {
  class RolSuscriptor extends Model {
    static associate(Models) {
      this.belongsTo(Models.Suscriptor, {
        foreignKey: 'suscriptor_id',
        foreignKeyConstraint: true
      });
    }
  }

  RolSuscriptor.init({
    IdRol: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    SuscriptorId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    ExternalId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      set(val) {
        this.setDataValue('ExternalId', createHash('sha256').update(val).digest('hex'));
      }
    }
  }, {
    sequelize: Sequelize,
    modelName: 'Rol',
    tableName: 'suscriptor_rol'
  });

  return RolSuscriptor;
}

