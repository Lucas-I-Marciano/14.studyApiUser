"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuarios_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios_roles.init(
    {
      usuario_id: {
        type: DataTypes.UUID,
        references: {
          model: "usuarios",
          key: "id",
        },
      },
      role_id: {
        type: DataTypes.UUID,
        references: {
          model: "roles",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "usuarios_roles",
    }
  );
  return usuarios_roles;
};
