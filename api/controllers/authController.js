const AuthService = require("../services/authService.js");
const { validateHashPassword } = require("../utils/HashPass.js");
const { sign } = require("jsonwebtoken");

const authService = new AuthService();

class AuthController {
  async login(req, res) {
    try {
      const { email, senha } = req.body;
      const token = await authService.login({ email, senha });

      res.status(200).json({
        tokenAccess: token,
      });
    } catch (erro) {
      res.status(500).json({ message: erro.message });
    }
  }
}

module.exports = AuthController;
