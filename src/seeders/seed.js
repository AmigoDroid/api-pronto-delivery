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
      nome: "Pronto Delivery LV",
      endereco: "Rua Dom Pedro, Centro",
      telefone: "(99)9 8492-1964",
      ativo: true
    });

    console.log("✔ Filial criada:", filial.nome);

    // 2) Criar usuário ADMIN
    const admin = await User.create({
      nome: "Administrador",
      email: "lucianodasilvacosta.deve@gmail.com",
      senha: "#Gustavo582426600",
      role: "admin",
      filialId: filial.id
    });

    console.log("✔ Usuário admin criado:", admin.email);

    // 3) Criar Colaborador associado
    await Colaborador.create({
      nome: "Larissa Gomes Lima",
      cpf: "60590850326",
      endereco: "Rua Senador Sarney, 404",
      email: "larissa@prontodelivery.com.br",
      senha: "#Larissa1810",
      cargo: "Atendente",
      setor: "Balcão",
      filialId: filial.id
    });

    console.log("✔ Colaborador criado");

  
    console.log("✔ Clientes criados");

    // 5) Categorias
    const bebidas = await Categoria.create({ nome: "Guaraná da Amazônia" });
    const lanches = await Categoria.create({ nome: "Hamburguer" });
  

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
