import nodemailer from "nodemailer";
import dotenv from "dotenv";

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

export async function enviarEmail({ Email, assunto, mensagem }) {
  try {
    const info = await transporter.sendMail({
      from: "Pronto Delivery <contato@prontodelivery.com.br>",
      to: Email,
      subject: assunto,
      html: `
        <div style="text-align:center;padding:20px 0;">
          <img src="cid:logoPronto" style="width:160px; border-radius:12px;" />
        </div>

        <div style="font-family:Arial, sans-serif; font-size:16px;">
          ${mensagem}
        </div>
      `,
      attachments: [
        {
          filename: "logo.png",
          path: linkLogo,
          cid: "logoPronto"
        }
      ]
    });

    console.log("Email enviado:", info.messageId);
    return info;
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    throw error;
  }
}


(async () => {
  try {
    await enviarEmail({
      Email: "canalmeuovo36@gmail.com",
      assunto: "Pedido Enviado",
      mensagem: "<h1>Pedido a Caminho!</h1><p>o entregador saiu para entregar seu pedido!</p>"
    });
  } catch (error) {
    console.error("Erro no envio de email de teste:", error);
  }
})();
