const db = require("../database/models/index.js");
const usuarioModel = db["usuarios"];
const permissoesModel = db["permissoes"];

function permissoesMiddleware(listaDePermissoes) {
  return async function middleware(req, res, next) {
    const { usuarioId } = req;

    const usuario = await usuarioModel.findOne({
      where: {
        id: usuarioId,
      },
      include: [
        {
          model: permissoesModel,
          as: "usuarios_e_permissoes",
          attributes: ["nome"],
        },
      ],
    });
    const permissoesDoUsuario = usuario["usuarios_e_permissoes"].map(
      (valor) => valor["dataValues"]
    );
    const permissoesDasRoles = permissoesDoUsuario.map(
      (valor) => valor["nome"]
    );

    const ePermitido = permissoesDasRoles.some((item) =>
      listaDePermissoes.includes(item)
    );

    if (ePermitido) {
      return next();
    }

    res.status(400).json({ message: "Usuário sem acesso" });
  };
}

module.exports = permissoesMiddleware;
