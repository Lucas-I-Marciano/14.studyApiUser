const { Router } = require("express");
const ProdutoController = require("../controllers/produtoController");

const router = Router();

router
  .post("/", ProdutoController.cadastrarProduto)
  .get("/", ProdutoController.buscarTodosProdutos)
  .get("/id/:id", ProdutoController.buscarProdutoPorId)
  .delete("/id/:id", ProdutoController.deletarProdutoPorId)
  .put("/id/:id", ProdutoController.editarProduto);

module.exports = router;
