const { Router } = require("express");
const SegurancaController = require("../controllers/segurancaController.js");

const segurancaRouter = Router();
const segurancaController = new SegurancaController();

segurancaRouter
  .post("/acl", async (req, res) => segurancaController.cadastrarAcl(req, res))
  .get("/roles/cadastro-permissoes", async (req, res) =>
    segurancaController.permissoesDasRoles(req, res)
  );

module.exports = segurancaRouter;
