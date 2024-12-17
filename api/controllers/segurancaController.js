const SegurancaService = require("../services/segurancaService.js");

const segurancaService = new SegurancaService();

class SegurancaController {
  async cadastrarAcl(req, res) {
    const dto = {
      roles: req.body["roles"],
      permissoes: req.body["permissoes"],
      usuarioId: req["usuarioId"],
    };

    try {
      const cadastro = await segurancaService.cadastrarAcl(dto);

      res.status(200).json(cadastro);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async permissoesDasRoles(req, res) {
    const dto = {
      permissoes: req.body["permissoes"],
      roleId: req.body["roleId"],
    };
    try {
      const cadastro = await segurancaService.permissoesDasRoles(dto);
      res.status(200).json(cadastro);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async listaPermissoesERoles(req, res) {
    try {
      const user = await segurancaService.listaPermissoesERoles();
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = SegurancaController;
