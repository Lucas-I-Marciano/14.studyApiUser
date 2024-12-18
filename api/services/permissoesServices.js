const db = require("../database/models/index.js");
const uuid = require("uuid");

const permissaoTabela = db.permissoes;

class PermissoesServices {
  async createPermissao(dto) {
    const permissao = await permissaoTabela.findOne({
      where: {
        nome: dto["nome"],
      },
    });

    if (permissao) {
      throw new Error("Permissão já cadastrada!");
    }

    try {
      const criandoPermissao = await permissaoTabela.create({
        id: uuid.v4(),
        nome: dto["nome"],
        descricao: dto["descricao"],
      });

      return criandoPermissao;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getAllPermission() {
    try {
      const permissions = await permissaoTabela.findAll({});
      return permissions;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getPermissionById(id) {
    try {
      const permission = await permissaoTabela.findOne({
        where: {
          id,
        },
      });
      return permission;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deletePermissionById(id) {
    try {
      await permissaoTabela.destroy({
        where: {
          id,
        },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updatePermissionById(id, dto) {
    try {
      const updatedPermission = await permissaoTabela.update(dto, {
        where: {
          id,
        },
      });

      const toReturn = await permissaoTabela.findOne({
        where: {
          id,
        },
      });
      return toReturn;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = PermissoesServices;
