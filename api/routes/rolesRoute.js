const { Router } = require("express");
const RolesController = require("../controllers/rolesController.js");

const rolesController = new RolesController();

const rolesRouter = Router();

rolesRouter
  .post("/", (req, res) => rolesController.createRole(req, res))
  .get("/", (req, res) => rolesController.getAllRoles(req, res))
  .get("/:id", (req, res) => rolesController.getRoleById(req, res))
  .put("/:id", (req, res) => rolesController.updateRoleById(req, res))
  .delete("/:id", (req, res) => rolesController.deleteRoleById(req, res));

module.exports = rolesRouter;
