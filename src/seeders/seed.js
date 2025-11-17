import {
  sequelize,
  Filial,
  User,
  Colaborador,
  Categoria,
  Produto
} from "../models/index.js";

export async function criarSeeds() {
  console.log("🌱 Iniciando seeds...");

  try {
    // Sincroniza tabelas
    await sequelize.sync({ force: true });
    console.log("🔄 Banco sincronizado");

    // 1) Criar Filial padrão
    const filial = await Filial.create({
      nome: "Pronto Delivery",
      slug: "Pronto Delivery LV",
      endereco: "Rua Dom Pedro, Centro",
      telefone: "(99)9 8492-1964"
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

    // 3) Criar Colaboradores
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

    await Colaborador.create({
      nome: "Maria de Fatima",
      cpf: "99999999999",
      endereco: "Dom Pedro, SN",
      email: "maria@prontodelivery.com.br",
      senha: "#Maria1234",
      cargo: "Atendente",
      setor: "Balcão",
      filialId: filial.id
    });

    console.log("✔ Colaboradores criados");

    // 4) Categorias
    const bebidas = await Categoria.create({ nome: "Guaraná da Amazônia" });
    const lanches = await Categoria.create({ nome: "Hamburguer" });

    // 5) Produtos
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

    await sequelize.close();
  } catch (err) {
    console.error("❌ Erro ao criar seeds:", err);
  }
}

(async () => {
  await criarSeeds();
})();
