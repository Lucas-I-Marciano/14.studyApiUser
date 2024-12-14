const { Op } = require("sequelize");
const db = require("../database/models/index.js");

const usuarioModel = db["usuarios"];
const rolesModel = db["roles"];
const permissoesModel = db["permissoes"];

class SegurancaService {
  async cadastrarAcl(dto) {
    const roles = await rolesModel.findAll({
      where: {
        id: { [Op.in]: dto["roles"] },
      },
    });
    const permissoes = await permissoesModel.findAll({
      where: {
        id: { [Op.in]: dto["permissoes"] },
      },
    });

    const usuario = await usuarioModel.findOne({
      where: {
        id: dto["usuarioId"],
      },
    });

    await usuario.setUsuarios_e_roles(roles);
    await usuario.setUsuarios_e_permissoes(permissoes);

    // To see all params allowed on findOne/findAll method --> //https://sequelize.org/api/v6/class/src/model.js~model#static-method-findAll
    const usuarioAtualizado = usuarioModel.findOne({
      where: {
        id: dto["usuarioId"],
      },
      include: [
        {
          model: rolesModel,
          as: "usuarios_e_roles",
          attributes: ["id", "nome"],
          through: {
            attributes: [],
          },
        },
        {
          model: permissoesModel,
          as: "usuarios_e_permissoes",
          attributes: ["id", "nome"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    return usuarioAtualizado;
  }

  async permissoesDasRoles(dto) {
    const permissoes = await permissoesModel.findAll({
      where: {
        id: {
          [Op.in]: dto["permissoes"],
        },
      },
    });

    const role = await rolesModel.findOne({
      where: {
        id: dto["roleId"],
      },
    });

    await role.setRoles_e_permissoes(permissoes);

    const roleAtualizada = await rolesModel.findOne({
      where: {
        id: dto["roleId"],
      },
      attributes: ["id", "nome", "descricao"],
      include: [
        {
          model: permissoesModel,
          as: "roles_e_permissoes",
          attributes: ["id", "nome"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    return roleAtualizada;
  }
}

module.exports = SegurancaService;
