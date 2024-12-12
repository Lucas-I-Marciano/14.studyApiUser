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

  async getAllRoles() {
    try {
      const roles = await roleTable.findAll({});
      return roles;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getRoleById(id) {
    try {
      const role = await roleTable.findOne({
        where: {
          id: id,
        },
      });
      console.log(role);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = RolesService;
