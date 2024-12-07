const bodyParser = require("body-parser");

const produtoRouter = require("./produtoRoute");

module.exports = (app) => {
  //prettier-ignore
  app
    .use(bodyParser.json())
    .use("/produto", produtoRouter);
};
