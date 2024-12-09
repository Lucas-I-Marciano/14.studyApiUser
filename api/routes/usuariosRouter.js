const { Router } = require("express");
const UsuarioController = require("../controllers/usuariosController.js");

const usuariosRouter = Router();
const usuarioController = new UsuarioController();

usuariosRouter
  .get("/")
  .get("/id/:id")
  .post("/", (req, res) => usuarioController.createUser(req, res))
  .put("/id/:id")
  .delete("/id/:id");

module.exports = usuariosRouter;
