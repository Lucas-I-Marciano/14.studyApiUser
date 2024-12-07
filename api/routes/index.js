const bodyParser = require("body-parser");

const produtoRouter = require("./produtoRoute");
const usuariosRouter = require("./usuariosRouter.js");

module.exports = (app) => {
  //prettier-ignore
  app
    .use(bodyParser.json())
    .use("/produtos", produtoRouter)
    .use("/usuarios", usuariosRouter)
};
