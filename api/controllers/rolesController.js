const RolesService = require("../services/rolesService.js");

const rolesService = new RolesService();

class RolesController {
  async createRole(req, res) {
    const { nome, descricao } = req.body;

    try {
      const role = await rolesService.createRole({ nome, descricao });
      res.status(200).json(role);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAllRoles(req, res) {
    try {
      const roles = await rolesService.getAllRoles();
      res.status(200).json(roles);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getRoleById(req, res) {
    const { id } = req.params;
    try {
      const role = await rolesService.getRoleById(id);
      res.status(200).json(role);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = RolesController;
