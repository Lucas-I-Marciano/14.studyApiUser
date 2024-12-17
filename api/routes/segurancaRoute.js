const { Router } = require("express");
const SegurancaController = require("../controllers/segurancaController.js");
const rolesMiddleware = require("../middlewares/rolesMiddleware.js");
const permissoesMiddleware = require("../middlewares/permissoesMiddleware.js");

const segurancaRouter = Router();
const segurancaController = new SegurancaController();

segurancaRouter
  .get("/acl", permissoesMiddleware(["ler"]), (req, res) =>
    segurancaController.listaPermissoesERoles(req, res)
  )
  .post(
    "/acl",
    permissoesMiddleware(["criar"]),
    rolesMiddleware(["admin"]),
    async (req, res) => segurancaController.cadastrarAcl(req, res)
  )
  .post(
    "/roles/cadastro-permissoes",
    permissoesMiddleware(["criar"]),
    rolesMiddleware(["admin"]),
    async (req, res) => segurancaController.permissoesDasRoles(req, res)
  );

module.exports = segurancaRouter;
