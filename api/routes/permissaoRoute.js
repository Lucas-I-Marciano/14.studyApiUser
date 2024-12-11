const { Router } = require("express");
const PermissaoController = require("../controllers/permissaoController.js");

const permissaoController = new PermissaoController();

const permissaoRouter = Router();

permissaoRouter.post("/", (req, res) =>
  permissaoController.criaPermissao(req, res)
);

module.exports = permissaoRouter;
