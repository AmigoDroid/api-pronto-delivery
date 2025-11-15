import Filial from "../model/model_filial.js";
import User from "../model/model_user.js";
import Colaborador from "../model/model_colaborador.js";
import Cliente from "../model/model_cliente.js";
import Categoria from "../model/model_categoria.js";
import Produto from "../model/model_produto.js";

export async function criarSeeds() {
  console.log("🌱 Iniciando seeds...");

  try {
    // 1) Criar Filial padrão
    const filial = await Filial.create({
      nome: "Filial Central",
      endereco: "Rua Principal, 123 - Centro",
      telefone: "99999-8888",
      ativo: true
    });

    console.log("✔ Filial criada:", filial.nome);

    // 2) Criar usuário ADMIN
    const admin = await User.create({
      nome: "Administrador",
      email: "admin@pronto.com",
      senha: "admin123",
      role: "admin",
      filialId: filial.id
    });

    console.log("✔ Usuário admin criado:", admin.email);

    // 3) Criar Colaborador associado
    await Colaborador.create({
      nome: "Carlos Silva",
      cpf: "11111111111",
      endereco: "Bairro Centro",
      email: "carlos@pronto.com",
      senha: "123",
      cargo: "Atendente",
      setor: "Balcão",
      filialId: filial.id
    });

    console.log("✔ Colaborador criado");

    // 4) Criar 2 clientes
    await Cliente.create({
      nome: "João Souza",
      cpf: "22222222222",
      endereco: "Rua das Mangueiras",
      email: "joao@example.com",
      senha: "123",
      filialId: filial.id
    });

    await Cliente.create({
      nome: "Maria Silva",
      cpf: "33333333333",
      endereco: "Av. Amazonas",
      email: "maria@example.com",
      senha: "123",
      filialId: filial.id
    });

    console.log("✔ Clientes criados");

    // 5) Categorias
    const bebidas = await Categoria.create({ nome: "Bebidas" });
    const lanches = await Categoria.create({ nome: "Lanches" });

    // 6) Produtos (cardápio)
    await Produto.create({
      nome: "Guaraná da Amazônia",
      preco: 8,
      categoriaId: bebidas.id,
      filialId: filial.id
    });

    await Produto.create({
      nome: "Batida de Açaí",
      preco: 8,
      categoriaId: bebidas.id,
      filialId: filial.id
    });

    await Produto.create({
      nome: "Hambúrguer Tradicional",
      preco: 12,
      categoriaId: lanches.id,
      filialId: filial.id
    });

    console.log("✔ Produtos criados");

    console.log("🌱 Seeds finalizadas com sucesso!");
  } catch (err) {
    console.error("❌ Erro ao criar seeds:", err.message);
  }
}

export default criarSeeds;
