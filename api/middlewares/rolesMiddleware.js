const db = require("../database/models/index.js");
const usuarioModel = db["usuarios"];
const rolesModel = db["roles"];

function rolesMiddleware(listaDeRoles) {
  return async function middleware(req, res, next) {
    const { usuarioId } = req;

    const usuario = await usuarioModel.findOne({
      where: {
        id: usuarioId,
      },
      include: [
        {
          model: rolesModel,
          as: "usuarios_e_roles",
          attributes: ["nome"],
        },
      ],
    });
    const rolesDoUsuario = usuario["usuarios_e_roles"].map(
      (valor) => valor["dataValues"]
    );
    const nomeDasRoles = rolesDoUsuario.map((valor) => valor["nome"]);

    const ePermitido = nomeDasRoles.some((item) => listaDeRoles.includes(item));

    if (ePermitido) {
      return next();
    }

    res.status(400).json({ message: "Usuário sem acesso" });
  };
}

module.exports = rolesMiddleware;
