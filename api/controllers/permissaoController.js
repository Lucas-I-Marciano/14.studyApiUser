const PermissoesServices = require("../services/permissoesServices.js");

const permissaoService = new PermissaoService();

class PermissaoController {
  async criaPermissao(req, res) {
    const { nome, descricao } = req.body;
    try {
      const permissao = await permissaoService.createPermissao({
        nome,
        descricao,
      });
      res.status(200).json(permissao);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = PermissaoController;
