const bodyParser = require("body-parser");

const produtoRouter = require("./produtoRoute");
const usuariosRouter = require("./usuariosRouter.js");
const authRouter = require("./authRoute.js");
const rolesRouter = require("./rolesRoute.js");
const permissaoRouter = require("./permissaoRoute.js");

module.exports = (app) => {
  //prettier-ignore
  app
    .use(bodyParser.json())
    .use("/usuarios", usuariosRouter)
    .use("/produtos", produtoRouter)
    .use("/auth", authRouter)
    .use("/roles", rolesRouter)
    .use("/permissoes", permissaoRouter);
};
