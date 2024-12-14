const { Router } = require("express");
const SegurancaController = require("../controllers/segurancaController.js");

const segurancaRouter = Router();
const segurancaController = new SegurancaController();

segurancaRouter.post("/acl", async (req, res) =>
  segurancaController.cadastrarAcl(req, res)
);

module.exports = segurancaRouter;
