import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

// Substitua pela sua API Key da Brevo
const API_KEY = process.env.SMS_API_KEY;

// Função para enviar SMS
async function enviarSMS(numero, mensagem) {
  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/transactionalSMS/send',
      {
        sender: 'ProntoDelivery',       // Remetente autorizado
        recipient: numero,         // Número no formato internacional, ex: 5511999998888
        content: mensagem,            // Mensagem de texto
        type: 'transactional',        // Tipo de SMS
        unicodeEnabled: true         // true se tiver caracteres especiais
      },
      {
        headers: {
          'accept': 'application/json',
          'api-key': API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('SMS enviado com sucesso! ID:', response.data.messageId);
  } catch (error) {
    if (error.response) {
      console.error('Erro na API:', error.response.data);
    } else {
      console.error('Erro:', error.message);
    }
  }
}
export { enviarSMS };