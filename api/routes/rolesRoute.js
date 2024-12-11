const { Router } = require("express");
const RolesController = require("../controllers/rolesController.js");

const rolesController = new RolesController();

const rolesRouter = Router();

rolesRouter.post("/", (req, res) => rolesController.createRole(req, res));

module.exports = rolesRouter;
