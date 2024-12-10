const db = require("../database/models/index.js");
const { validateHashPassword } = require("../utils/HashPass.js");
const { sign } = require("jsonwebtoken");
const { secret } = require("../database/config/jsonSecret.js");
const userDb = db.usuarios;

class AuthService {
  async login(dto) {
    const user = await userDb.findOne({
      attributes: ["id", "email", "senha", "salt"],
      where: {
        email: dto["email"],
      },
    });
    if (!user) {
      throw new Error("Usuário ou Senha incorretos");
    }

    const isPasswordCorrect = validateHashPassword(
      dto["senha"],
      user["dataValues"]["senha"],
      user["dataValues"]["salt"]
    );

    if (!isPasswordCorrect) {
      throw new Error("Usuário ou Senha incorretos");
    }
    const payload = {
      id: user["dataValues"]["id"],
      email: user["dataValues"]["email"],
    };
    console.log(payload);

    return sign(payload, secret, { expiresIn: 3600 });
  }
}

module.exports = AuthService;
