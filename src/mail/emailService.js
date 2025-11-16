import nodemailer from "nodemailer";
import dotenv from "dotenv";
import templetes_email from "./templetes_email.js";

dotenv.config();
const linkLogo = "https://i.imgur.com/zKFcdsk_d.jpeg?maxwidth=520&shape=thumb&fidelity=high";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  }
});

export async function enviarEmail({ Email, assunto,html}) {
  try {
    const info = await transporter.sendMail({
      from: "Pronto Delivery <contato@prontodelivery.com.br>",
      to: Email,
      subject: assunto,
      html:html
    });

    console.log("Email enviado:", info.messageId);
    return info;
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    throw error;
  }
}
 const htmlpedido = templetes_email.pedido(
  120,
  "Saiu para entrega",
  "15–30 minutos",
  [
    { nome: "Pizza Calabresa", qtd: 1, preco: 32.90 },
    { nome: "Coca 1L", qtd: 1, preco: 8.50 }
  ],
  41.40
);
const htmlpromocao = templetes_email.promocao("Super Promoção de Verão!", "Aproveite 20% de desconto em todos os pedidos feitos até o final do mês. Use o código VERÃO20 ao finalizar sua compra e desfrute de nossas deliciosas opções com um preço especial. Não perca essa oportunidade de saborear suas comidas favoritas com um super desconto. Faça seu pedido agora e celebre o verão com sabor!", linkLogo);
const htmlredefinirsenha = templetes_email.recuperacaoSenha("839201");
const html = templetes_email.codigoVerificacao("839201");
(async () => {
  try {
    await enviarEmail({
      Email: "canalmeuovo36@gmail.com",
      assunto: "Pedido Enviado",
      html: html
      
    });
  } catch (error) {
    console.error("Erro no envio de email de teste:", error);
  }
})();
