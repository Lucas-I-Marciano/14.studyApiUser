const PermissoesServices = require("../services/permissoesServices.js");

const permissaoService = new PermissoesServices();

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

  async getAllPermissions(req, res) {
    try {
      const permission = await permissaoService.getAllPermission();
      res.status(200).json(permission);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getPermissionById(req, res) {
    const { id } = req.params;
    try {
      const role = await permissaoService.getPermissionById(id);
      res.status(200).json(role);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = PermissaoController;
