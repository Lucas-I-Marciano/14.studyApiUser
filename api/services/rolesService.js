const db = require("../database/models/index.js");
const uuid = require("uuid");

const roleTable = db.roles;

class RolesService {
  async createRole(dto) {
    const role = await roleTable.findOne({
      where: {
        nome: dto["nome"],
      },
    });

    if (role) {
      throw new Error("Função já cadastrada");
    }

    try {
      const roleCadastrada = await roleTable.create({
        id: uuid.v4(),
        nome: dto["nome"],
        descricao: dto["descricao"],
      });

      return roleCadastrada;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = RolesService;
