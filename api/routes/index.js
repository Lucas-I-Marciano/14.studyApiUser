const bodyParser = require("body-parser");

const produtoRouter = require("./produtoRoute");
const usuariosRouter = require("./usuariosRouter.js");
const authRouter = require("./authRoute.js");
const rolesRouter = require("./rolesRoute.js");
const permissaoRouter = require("./permissaoRoute.js");

const verifyAuth = require("../middlewares/authMiddleware.js");

module.exports = (app) => {
  //prettier-ignore
  app
    .use(bodyParser.json())
    .use(verifyAuth)
    .use("/usuarios", usuariosRouter)
    .use("/produtos", produtoRouter)
    .use("/auth", authRouter)
    .use("/roles", rolesRouter)
    .use("/permissoes", permissaoRouter);
};
