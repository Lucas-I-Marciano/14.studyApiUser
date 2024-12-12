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
}

module.exports = PermissoesServices;
