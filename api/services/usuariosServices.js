const db = require("../database/models/index.js");
const createHashPassword = require("../utils/createHashPass.js");
const uuid = require("uuid");

const userDb = db.usuarios;

class UsuarioService {
  async createUser(dto) {
    const { hashPass, randomB } = createHashPassword(dto["senha"]);
    return await userDb.create({
      id: uuid.v4(),
      nome: dto["nome"],
      email: dto["email"],
      senha: hashPass,
      salt: randomB,
    });
  }

  async getAllUser() {
    const users = await userDb.findAll();
    return JSON.stringify(users, null, 2);
  }
}
