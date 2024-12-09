const { Router } = require("express");
const UsuarioController = require("../controllers/usuariosController.js");

const usuariosRouter = Router();
const usuarioController = new UsuarioController();

usuariosRouter
  .get("/", (req, res) => usuarioController.getAllUser(req, res))
  .get("/id/:id", (req, res) => usuarioController.getUserById(req, res))
  .post("/", (req, res) => usuarioController.createUser(req, res))
  .put("/id/:id", (req, res) => usuarioController.updateUser(req, res))
  .delete("/id/:id");

module.exports = usuariosRouter;
