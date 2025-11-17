import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

// Pegue a API KEY do .env
const API_KEY = process.env.BREVO_KEY;

// Envio de SMS pela Brevo
async function enviarSMS(numero, mensagem) {
  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/transactionalSMS/send",
      {
        sender: "ProntoDelivery",
        recipient: numero,
        content: mensagem,
        type: "transactional",
        unicodeEnabled: true
      },
      {
        headers: {
          "api-key": API_KEY,
          "Content-Type": "application/json",
          "accept": "application/json"
        }
      }
    );

    console.log("SMS enviado!", response.data);
  } catch (error) {
    if (error.response) {
      console.error("Erro da API:", error.response.data);
    } else {
      console.error("Erro:", error.message);
    }
  }
}

// Teste
(async () => {
  await enviarSMS(
    "5599984645196",
    "Pronto Delivery: Seu pedido foi recebido e está sendo processado."
  );
})();
