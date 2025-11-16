import Colaborador from "../models/model_colaborador.js";

class ColaboradorController {
  async listar(req, res) {
    const dados = await Colaborador.findAll();
    res.json(dados);
  }

  async criar(req, res) {
    const novo = await Colaborador.create(req.body);
    res.json(novo);
  }

  async buscar(req, res) {
    const dado = await Colaborador.findByPk(req.params.id);
    res.json(dado);
  }

  async atualizar(req, res) {
    await Colaborador.update(req.body, { where: { id: req.params.id } });
    res.json({ status: "ok" });
  }

  async deletar(req, res) {
    await Colaborador.destroy({ where: { id: req.params.id } });
    res.json({ status: "removido" });
  }
}

export default new ColaboradorController();
