const { Router } = require("express");
const AuthController = require("../controllers/authController.js");

const authController = new AuthController();

const authRouter = Router();

authRouter.post("/login", (req, res) => authController.login(req, res));

module.exports = authRouter;
