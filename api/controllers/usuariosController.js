const UsuarioService = require("../services/usuariosServices.js");

const usuarioService = new UsuarioService();

class UsuarioController {
  async createUser(req, res) {
    const { nome, email, senha } = req.body;
    const user = await usuarioService.createUser({ nome, email, senha });
    res.status(200).json(user);
  }

  async getAllUser(req, res) {
    const users = await usuarioService.getAllUser();
    res.status(200).json(users);
  }

  async getUserById(req, res) {
    const { id } = req.params;
    const user = await usuarioService.getUserById(id);
    res.status(200).json(user);
  }
}

module.exports = UsuarioController;
