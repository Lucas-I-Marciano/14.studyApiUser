const UsuarioService = require("../services/usuariosServices.js");

const usuarioService = new UsuarioService();

class UsuarioController {
  async createUser(req, res) {
    const { nome, email, senha } = req.body;
    const user = await usuarioService.createUser({ nome, email, senha });
    res.status(200).json(user);
  }
}

module.exports = UsuarioController;
