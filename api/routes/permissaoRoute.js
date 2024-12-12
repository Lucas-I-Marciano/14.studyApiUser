const { Router } = require("express");
const PermissaoController = require("../controllers/permissaoController.js");
const PermissaoService = require("../services/permissoesServices.js");

const permissaoController = new PermissaoController();

const permissaoRouter = Router();

permissaoRouter
  .post("/", (req, res) => permissaoController.criaPermissao(req, res))
  .get("/", (req, res) => permissaoController.getAllPermissions(req, res))
  .get("/:id", (req, res) => permissaoController.getPermissionById(req, res))
  .put("/:id", (req, res) => permissaoController.updatePermissionById(req, res))
  .delete("/:id", (req, res) =>
    permissaoController.deletePermissionById(req, res)
  );

module.exports = permissaoRouter;
