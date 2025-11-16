import Produto from "../models/model_produto.js";
import Categoria from "../models/model_categoria.js";

class ProdutoController {
  async listar(req, res) {
    const dados = await Produto.findAll({ include: Categoria });
    res.json(dados);
  }

  async criar(req, res) {
    const novo = await Produto.create(req.body);
    res.json(novo);
  }

  async atualizar(req, res) {
    await Produto.update(req.body, { where: { id: req.params.id } });
    res.json({ status: "ok" });
  }

  async deletar(req, res) {
    await Produto.destroy({ where: { id: req.params.id } });
    res.json({ status: "removido" });
  }
}

export default new ProdutoController();
