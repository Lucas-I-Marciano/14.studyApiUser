const { Router } = require("express");
const UsuarioController = require("../controllers/usuariosController.js");
const verifyAuth = require("../middlewares/authMiddleware.js");

const usuariosRouter = Router();
const usuarioController = new UsuarioController();

usuariosRouter
  .post("/", (req, res) => usuarioController.createUser(req, res))
  .use(verifyAuth)
  .get("/", (req, res) => usuarioController.getAllUser(req, res))
  .get("/id/:id", (req, res) => usuarioController.getUserById(req, res))
  .put("/id/:id", (req, res) => usuarioController.updateUser(req, res))
  .delete("/id/:id", (req, res) => usuarioController.deleteUser(req, res));

module.exports = usuariosRouter;
