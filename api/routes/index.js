const bodyParser = require("body-parser");

const produtoRouter = require("./produtoRoute");
const usuariosRouter = require("./usuariosRouter.js");
const authRouter = require("./authRoute.js");

module.exports = (app) => {
  //prettier-ignore
  app
    .use(bodyParser.json())
    .use("/produtos", produtoRouter)
    .use("/usuarios", usuariosRouter)
    .use("/auth", authRouter);
};
