import {Pagamento} from "../models/index.js";

export default {
  // 🔹 Criar pagamento
  async create(req, res) {
    try {
      const { valor, metodo, status, transacao_gateway } = req.body;

      const novoPagamento = await Pagamento.create({
        valor,
        metodo,
        status,
        transacao_gateway
      });

      return res.status(201).json(novoPagamento);
    } catch (error) {
      console.error("Erro ao criar pagamento:", error);
      return res.status(500).json({ error: "Erro interno ao criar pagamento." });
    }
  },

  // 🔹 Listar todos
  async getAll(req, res) {
    try {
      const pagamentos = await Pagamento.findAll({ order: [["id", "DESC"]] });
      return res.json(pagamentos);
    } catch (error) {
      console.error("Erro ao buscar pagamentos:", error);
      return res.status(500).json({ error: "Erro ao buscar pagamentos." });
    }
  },

  // 🔹 Buscar por ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const pagamento = await Pagamento.findByPk(id);

      if (!pagamento) {
        return res.status(404).json({ error: "Pagamento não encontrado." });
      }

      return res.json(pagamento);
    } catch (error) {
      console.error("Erro ao buscar pagamento:", error);
      return res.status(500).json({ error: "Erro ao buscar pagamento." });
    }
  },

  // 🔹 Atualizar
  async update(req, res) {
    try {
      const { id } = req.params;

      const pagamento = await Pagamento.findByPk(id);
      if (!pagamento) {
        return res.status(404).json({ error: "Pagamento não encontrado." });
      }

      await pagamento.update(req.body);

      return res.json(pagamento);
    } catch (error) {
      console.error("Erro ao atualizar pagamento:", error);
      return res.status(500).json({ error: "Erro ao atualizar pagamento." });
    }
  },

  // 🔹 Deletar
  async delete(req, res) {
    try {
      const { id } = req.params;

      const pagamento = await Pagamento.findByPk(id);
      if (!pagamento) {
        return res.status(404).json({ error: "Pagamento não encontrado." });
      }

      await pagamento.destroy();

      return res.json({ message: "Pagamento removido com sucesso." });
    } catch (error) {
      console.error("Erro ao deletar pagamento:", error);
      return res.status(500).json({ error: "Erro ao deletar pagamento." });
    }
  }
};
