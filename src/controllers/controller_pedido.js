// src/controller/controller_pedido.js

import { Pedido, PedidoItem, Produto, Cliente, Filial, User, Pagamento } from "../models/index.js";

class PedidoController {
  // Listar todos os pedidos
  static async listar(req, res) {
    try {
      const pedidos = await Pedido.findAll({
        include: [
          { model: PedidoItem, include: [Produto] },
          { model: Cliente },
          { model: Filial },
          { model: User, as: "criadoPor" },
          { model: User, as: "atualizadoPor" },
          { model: Pagamento }
        ]
      });
      return res.status(200).json(pedidos);
    } catch (error) {
      console.error("Erro ao listar pedidos:", error);
      return res.status(500).json({ error: "Erro ao listar pedidos" });
    }
  }

  // Buscar pedido por ID
  static async buscar(req, res) {
    const { id } = req.params;
    try {
      const pedido = await Pedido.findByPk(id, {
        include: [
          { model: PedidoItem, include: [Produto] },
          { model: Cliente },
          { model: Filial },
          { model: User, as: "criadoPor" },
          { model: User, as: "atualizadoPor" },
          { model: Pagamento }
        ],
      });
      if (!pedido) {
        return res.status(404).json({ error: "Pedido não encontrado" });
      }
      return res.status(200).json(pedido);
    } catch (error) {
      console.error("Erro ao buscar pedido:", error);
      return res.status(500).json({ error: "Erro ao buscar pedido" });
    }
  }

  // Criar novo pedido
  static async criar(req, res) {
    const { clienteId, filialId, itens, criadoPorId, formaPagamento } = req.body;

    try {
      // Cria o pedido
      const pedido = await Pedido.create({
        clienteId,
        filialId,
        criadoPorId
      });

      // Cria os itens
      const itensCriados = await Promise.all(
        itens.map(async (item) => {
          // opcional: validar se o produto existe
          const produto = await Produto.findByPk(item.produtoId);
          if (!produto) {
            throw new Error(`Produto com id ${item.produtoId} não encontrado`);
          }

          return PedidoItem.create({
            pedidoId: pedido.id,
            produtoId: item.produtoId,
            quantidade: item.qtd,
            precoUnitario: produto.preco, // isso depende de como você modelou
          });
        })
      );

      // Se houver pagamento, cria
      let pagamento;
      if (formaPagamento) {
        pagamento = await Pagamento.create({
          pedidoId: pedido.id,
          valor: itensCriados.reduce((sum, i) => sum + (i.quantidade * i.precoUnitario), 0),
          tipo: formaPagamento, // ou outro campo no seu model
        });
      }

      // Buscar pedido completo com relações
      const pedidoCompleto = await Pedido.findByPk(pedido.id, {
        include: [
          { model: PedidoItem, include: [Produto] },
          { model: Cliente },
          { model: Filial },
          { model: User, as: "criadoPor" },
          { model: Pagamento }
        ]
      });

      return res.status(201).json(pedidoCompleto);
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
      return res.status(400).json({ error: error.message || "Erro ao criar pedido" });
    }
  }

  // Atualizar pedido (ex: status ou filiais, cliente, etc)
  static async atualizar(req, res) {
    const { id } = req.params;
    const { status, atualizadoPorId } = req.body;

    try {
      const pedido = await Pedido.findByPk(id);
      if (!pedido) {
        return res.status(404).json({ error: "Pedido não encontrado" });
      }

      pedido.status = status ?? pedido.status;
      pedido.atualizadoPorId = atualizadoPorId ?? pedido.atualizadoPorId;
      await pedido.save();

      const pedidoAtualizado = await Pedido.findByPk(id, {
        include: [
          { model: PedidoItem, include: [Produto] },
          { model: Cliente },
          { model: Filial },
          { model: User, as: "atualizadoPor" },
          { model: Pagamento }
        ]
      });

      return res.status(200).json(pedidoAtualizado);
    } catch (error) {
      console.error("Erro ao atualizar pedido:", error);
      return res.status(400).json({ error: error.message || "Erro ao atualizar pedido" });
    }
  }

  // Deletar pedido
  static async deletar(req, res) {
    const { id } = req.params;
    try {
      const pedido = await Pedido.findByPk(id);
      if (!pedido) {
        return res.status(404).json({ error: "Pedido não encontrado" });
      }

      // Opcional: deletar itens relacionados
      await PedidoItem.destroy({ where: { pedidoId: id } });

      await pedido.destroy();
      return res.status(204).send();
    } catch (error) {
      console.error("Erro ao deletar pedido:", error);
      return res.status(500).json({ error: "Erro ao deletar pedido" });
    }
  }
}

export default PedidoController;
