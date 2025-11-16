export default {
  
  // ============================================================
  // 1️⃣ E-MAIL – Código de Verificação
  // ============================================================
  codigoVerificacao(codigo) {
    return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Código de Verificação – Pronto Delivery</title>
    </head>

    <body style="margin:0; padding:0; background:#f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4; padding:20px 0;">
        <tr>
          <td align="center">
          
            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px; background:#ffffff; border-radius:8px; overflow:hidden;">
              
              <tr>
                <td align="center" style="padding:30px 0;">
                  <img src="https://i.imgur.com/zKFcdsk_d.jpeg?maxwidth=520&shape=thumb&fidelity=high"
                       width="150"
                       alt="Pronto Delivery"
                       style="border-radius:50%; overflow:hidden;">
                </td>
              </tr>

              <tr>
                <td style="padding:0 30px; font-family:Arial; color:#333;">
                  <h2 style="text-align:center; color:#E9442C;">Seu código de verificação</h2>
                  <p style="text-align:center; font-size:16px; color:#444;">
                    Use o código abaixo para confirmar seu acesso ao <strong>Pronto Delivery</strong>.
                  </p>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding:25px 0;">
                  <div style="font-size:36px; font-family:Arial; font-weight:bold; color:#E9442C; letter-spacing:5px;">
                    ${codigo}
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding:0 30px 20px; text-align:center; font-family:Arial; font-size:14px; color:#777;">
                  Este código expira em <strong>10 minutos</strong>.
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>
    </body>
    </html>
    `;
  },


  // ============================================================
  // 2️⃣ E-MAIL – Promoções
  // ============================================================
  promocao(titulo, descricao, linkBotao) {
    return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promoção – Pronto Delivery</title>
    </head>

    <body style="margin:0; padding:0; background:#f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
        <tr>
          <td align="center">

            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px; background:#fff; border-radius:10px; overflow:hidden;">
              <tr>
                <td align="center" style="padding:25px;">
                  <img src="https://i.imgur.com/zKFcdsk_d.jpeg?maxwidth=520&shape=thumb&fidelity=high"
                       width="140"
                       style="border-radius:50%; overflow:hidden;">
                </td>
              </tr>

              <tr>
                <td style="font-family:Arial; padding:0 30px;">
                  <h2 style="color:#E9442C; text-align:center;">${titulo}</h2>
                  <p style="font-size:16px; text-align:center; color:#444;">
                    ${descricao}
                  </p>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding:20px;">
                  <a href="${linkBotao}" 
                     style="background:#E9442C; color:#fff; padding:14px 26px; border-radius:6px; text-decoration:none; font-family:Arial;">
                     Aproveitar Agora
                  </a>
                </td>
              </tr>

              <tr>
                <td height="30"></td>
              </tr>

            </table>

          </td>
        </tr>
      </table>
    </body>
    </html>
    `;
  },



  // ============================================================
  // 3️⃣ E-MAIL – Notificação de Pedido (com itens)
  // ============================================================
  pedido(numero, status, previsao, itens = [], totalGeral = null) {

    const tabelaItens = itens.map(item => `
      <tr>
        <td style="padding:8px 0; border-bottom:1px solid #eee; font-family:Arial; font-size:14px;">
          ${item.nome}
        </td>
        <td align="center" style="padding:8px 0; border-bottom:1px solid #eee; font-family:Arial; font-size:14px;">
          ${item.qtd}
        </td>
        <td align="right" style="padding:8px 0; border-bottom:1px solid #eee; font-family:Arial; font-size:14px;">
          R$ ${item.preco.toFixed(2)}
        </td>
        <td align="right" style="padding:8px 0; border-bottom:1px solid #eee; font-family:Arial; font-size:14px;">
          R$ ${(item.preco * item.qtd).toFixed(2)}
        </td>
      </tr>
    `).join("");

    return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Status do Pedido – Pronto Delivery</title>
    </head>

    <body style="margin:0; padding:0; background:#f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
        <tr>
          <td align="center">

            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px; background:#ffffff; border-radius:10px; overflow:hidden;">
              
              <tr>
                <td align="center" style="padding:25px 0;">
                  <img src="https://i.imgur.com/zKFcdsk_d.jpeg?maxwidth=520&shape=thumb&fidelity=high"
                       width="140"
                       style="border-radius:50%; overflow:hidden;">
                </td>
              </tr>

              <tr>
                <td style="padding:0 30px; font-family:Arial; color:#444;">
                  <h2 style="text-align:center; color:#E9442C;">Atualização do seu pedido</h2>

                  <p style="font-size:16px; text-align:center;">
                    Seu pedido <strong>#${numero}</strong> está agora:
                    <br><strong style="color:#E9442C; font-size:20px;">${status}</strong>
                  </p>

                  <p style="text-align:center; font-size:15px; margin-top:10px;">
                    Previsão de entrega: <strong>${previsao}</strong>
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:20px 30px;">
                  <h3 style="font-family:Arial; color:#E9442C; text-align:left; margin-bottom:10px;">
                    Itens do pedido
                  </h3>

                  <table width="100%" cellpadding="0" cellspacing="0">
                    <thead>
                      <tr style="font-family:Arial; font-size:14px; color:#555;">
                        <th align="left" style="padding-bottom:8px;">Item</th>
                        <th align="center" style="padding-bottom:8px;">Qtd</th>
                        <th align="right" style="padding-bottom:8px;">Preço</th>
                        <th align="right" style="padding-bottom:8px;">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${tabelaItens}
                    </tbody>
                  </table>

                  ${totalGeral !== null ? `
                  <p style="text-align:right; font-family:Arial; font-size:16px; margin-top:15px;">
                    <strong>Total Geral: R$ ${totalGeral.toFixed(2)}</strong>
                  </p>
                  ` : ""}
                </td>
              </tr>

              <tr><td height="30"></td></tr>

            </table>

          </td>
        </tr>
      </table>
    </body>
    </html>
    `;
  },



  // ============================================================
  // 4️⃣ E-MAIL – Recuperação de Senha por Código
  // ============================================================
  recuperacaoSenha(codigo) {
    return `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recuperação de Senha – Pronto Delivery</title>
    </head>

    <body style="margin:0; padding:0; background:#f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
        <tr>
          <td align="center">

            <table width="100%" cellpadding="0" cellspacing="0" style="max-width:520px; background:#fff; border-radius:10px; overflow:hidden;">
              
              <tr>
                <td align="center" style="padding:25px 0;">
                  <img src="https://i.imgur.com/zKFcdsk_d.jpeg?maxwidth=520&shape=thumb&fidelity=high"
                       width="140"
                       style="border-radius:50%; overflow:hidden;">
                </td>
              </tr>

              <tr>
                <td style="padding:0 30px; font-family:Arial; text-align:center; color:#444;">
                  <h2 style="color:#E9442C;">Redefinição de senha</h2>
                  <p>Use o código abaixo para redefinir sua senha:</p>

                  <div style="font-size:36px; font-weight:bold; color:#E9442C; letter-spacing:6px; margin:20px 0;">
                    ${codigo}
                  </div>

                  <p style="font-size:14px; color:#777;">
                    O código expira em <strong>10 minutos</strong>.
                  </p>
                </td>
              </tr>

              <tr><td height="30"></td></tr>

            </table>

          </td>
        </tr>
      </table>
    </body>
    </html>
    `;
  }

};
