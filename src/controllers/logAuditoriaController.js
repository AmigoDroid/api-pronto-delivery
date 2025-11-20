import { LogAuditoria } from "../models/index.js";

export default {
  // Criar log
  async create(req, res) {
    try {
      const log = await LogAuditoria.create(req.body);
      res.status(201).json(log);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar log" });
    }
  },

  // Listar logs
  async getAll(req, res) {
    try {
      const logs = await LogAuditoria.findAll({
        order: [["id", "DESC"]],
      });
      res.json(logs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao listar logs" });
    }
  },

  // Buscar por ID
  async getById(req, res) {
    try {
      const log = await LogAuditoria.findByPk(req.params.id);
      if (!log) return res.status(404).json({ error: "Log não encontrado" });
      res.json(log);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao buscar log" });
    }
  },

  // Apagar log
  async delete(req, res) {
    try {
      const log = await LogAuditoria.findByPk(req.params.id);
      if (!log) return res.status(404).json({ error: "Log não encontrado" });

      await log.destroy();
      res.json({ message: "Log apagado com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao apagar log" });
    }
  }
};
