import {Cliente,Pedido} from "../models/index.js";

class ClienteController {
  async listar(req, res) {
    const dados = await Cliente.findAll({ include: Pedido });
    res.json(dados);
  }

  async criar(req, res) {
    const novo = await Cliente.create(req.body);
    res.json(novo);
  }

  async buscar(req, res) {
    const dado = await Cliente.findByPk(req.params.id, { include: Pedido });
    res.json(dado);
  }

  async atualizar(req, res) {
    await Cliente.update(req.body, { where: { id: req.params.id } });
    res.json({ status: "ok" });
  }

  async deletar(req, res) {
    await Cliente.destroy({ where: { id: req.params.id } });
    res.json({ status: "deletado" });
  }
}

export default new ClienteController();
