import { createHash }       from "crypto";
import { Model, DataTypes } from "sequelize";

export default function (sequelize) {

  class Suscriptor extends Model {
    static associate(Models) {
      this.hasMany(Models.Rol, {
        foreignKey: 'suscriptor_id',
        foreignKeyConstraint: true
      });
    }
  }

  sequelize.init('Suscriptor', {
    IdSuscriptor: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    InstanceId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    ExternalId: {
      type: DataTypes.STRING(64),
      allowNull: false,
      set(val) {
        this.setDataValue('ExternalId', createHash('sha256').update(val).digest('hex'))
      }
    },
    Name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    AvatarUrl: {
      type: DataTypes.STRING(512)
    }
  }, {
    sequelize,
    modelName: 'Suscriptor',
    tableName: 'suscriptor'
  });

  return Suscriptor;
};


