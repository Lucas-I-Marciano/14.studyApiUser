const { verify } = require("jsonwebtoken");
const { secret } = require("../database/config/jsonSecret.js");

function verifyAuth(req, res, next) {
  try {
    const bearer = req["headers"]["authorization"];
    const [, accessToken] = bearer.split(" ");
    const decoded = verify(accessToken, secret);

    req.usuarioId = decoded["id"];
    req.usuarioEmail = decoded["email"];

    next();
  } catch (erro) {
    res.status(400).json({ message: erro.message });
  }
}

module.exports = verifyAuth;
