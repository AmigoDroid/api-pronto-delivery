import {Categoria} from "../models/index.js";
class CategoriaController {
  async listar(req, res) {
    const dados = await Categoria.findAll();
    res.json(dados);
  }

  async criar(req, res) {
    const novo = await Categoria.create(req.body);
    res.json(novo);
  }

  async atualizar(req, res) {
    await Categoria.update(req.body, { where: { id: req.params.id } });
    res.json({ status: "ok" });
  }

  async deletar(req, res) {
    await Categoria.destroy({ where: { id: req.params.id } });
    res.json({ status: "removido" });
  }
}

export default new CategoriaController();
