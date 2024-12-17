const { Router } = require("express");
const SegurancaController = require("../controllers/segurancaController.js");

const segurancaRouter = Router();
const segurancaController = new SegurancaController();

segurancaRouter
  .get("/acl", (req, res) =>
    segurancaController.listaPermissoesERoles(req, res)
  )
  .post("/acl", async (req, res) => segurancaController.cadastrarAcl(req, res))
  .post("/roles/cadastro-permissoes", async (req, res) =>
    segurancaController.permissoesDasRoles(req, res)
  );

module.exports = segurancaRouter;
