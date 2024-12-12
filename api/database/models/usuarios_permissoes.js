"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuarios_permissoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usuarios_permissoes.init(
    {
      usuario_id: {
        type: DataTypes.UUID,
        references: {
          model: "usuarios",
          key: "id",
        },
      },
      permissao_id: {
        type: DataTypes.UUID,
        references: {
          model: "permissoes",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "usuarios_permissoes",
    }
  );
  return usuarios_permissoes;
};
