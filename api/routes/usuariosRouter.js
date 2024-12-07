const { Router } = require("express");

const usuariosRouter = Router();

usuariosRouter
  .get("/")
  .get("/id/:id")
  .post("/")
  .put("/id/:id")
  .delete("/id/:id");

module.exports = usuariosRouter;
