import Filial from "../models/model_filial.js";

class FilialController {
  async listar(req, res) {
    const dados = await Filial.findAll();
    res.json(dados);
  }

  async criar(req, res) {
    const nova = await Filial.create(req.body);
    res.json(nova);
  }

  async buscar(req, res) {
    const dado = await Filial.findByPk(req.params.id);
    res.json(dado);
  }

  async atualizar(req, res) {
    await Filial.update(req.body, { where: { id: req.params.id } });
    res.json({ status: "ok" });
  }

  async deletar(req, res) {
    await Filial.destroy({ where: { id: req.params.id } });
    res.json({ status: "removido" });
  }
}

export default new FilialController();
