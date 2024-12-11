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
}

module.exports = RolesController;
