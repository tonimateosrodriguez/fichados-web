const baseStyles = `font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;`;

function emailWrapper(title: string, content: string, footerNote: string): string {
  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { ${baseStyles} line-height: 1.6; color: #1f2937; background-color: #f3f4f6; }
    @media only screen and (max-width: 620px) {
      .outer-table { width: 100% !important; }
      .inner-pad { padding: 24px 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; ${baseStyles}">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f3f4f6;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" class="outer-table" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);">
          <tr>
            <td align="center" class="inner-pad" style="background: #3b82f6; padding: 32px; text-align: center;">
              <div style="font-size: 32px; font-weight: 700; color: #ffffff; letter-spacing: -1px; margin-bottom: 16px; ${baseStyles}">Fichados</div>
              <h1 style="font-size: 22px; font-weight: 600; color: #ffffff; margin: 0; ${baseStyles}">${title}</h1>
            </td>
          </tr>
          <tr>
            <td class="inner-pad" style="padding: 32px;">
              ${content}
            </td>
          </tr>
          <tr>
            <td class="inner-pad" style="background: #f9fafb; padding: 24px 32px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="font-size: 13px; color: #6b7280; margin-bottom: 8px; ${baseStyles}">${footerNote}</p>
              <p style="margin-top: 16px;">
                <a href="https://fichados.es" style="font-size: 13px; color: #3b82f6; text-decoration: none; ${baseStyles}">fichados.es</a>
              </p>
              <p style="font-size: 12px; color: #9ca3af; margin-top: 16px; ${baseStyles}">&copy; 2026 Fichados - Control de Fichajes</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function getAdminDeleteRequestEmailHtml(email: string, motivo: string): string {
  const content = `
    <p style="font-size: 16px; color: #374151; margin-bottom: 16px; ${baseStyles}">Nueva solicitud de eliminaci&oacute;n de cuenta:</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background: #f9fafb; border-radius: 8px; margin-bottom: 20px;">
      <tr>
        <td style="padding: 16px;">
          <p style="font-size: 14px; color: #6b7280; margin-bottom: 4px; ${baseStyles}"><strong>Email:</strong></p>
          <p style="font-size: 15px; color: #1f2937; margin-bottom: 12px; ${baseStyles}">${email}</p>
          <p style="font-size: 14px; color: #6b7280; margin-bottom: 4px; ${baseStyles}"><strong>Motivo:</strong></p>
          <p style="font-size: 15px; color: #1f2937; ${baseStyles}">${motivo || "No especificado"}</p>
        </td>
      </tr>
    </table>
    <p style="font-size: 14px; color: #6b7280; ${baseStyles}">Debes procesar esta solicitud en un plazo m&aacute;ximo de 30 d&iacute;as seg&uacute;n el RGPD.</p>
  `;
  return emailWrapper(
    "Solicitud de eliminaci&oacute;n de cuenta",
    content,
    "Notificaci&oacute;n interna de Fichados"
  );
}

export function getUserDeleteConfirmationEmailHtml(): string {
  const content = `
    <p style="font-size: 16px; color: #374151; margin-bottom: 16px; ${baseStyles}">Hola,</p>
    <p style="font-size: 15px; color: #4b5563; margin-bottom: 20px; ${baseStyles}">
      Hemos recibido tu solicitud de eliminaci&oacute;n de cuenta en Fichados. Nuestro equipo la procesar&aacute; en un plazo m&aacute;ximo de <strong style="color: #1f2937;">30 d&iacute;as</strong>.
    </p>
    <p style="font-size: 15px; color: #4b5563; margin-bottom: 20px; ${baseStyles}">
      Una vez procesada, se eliminar&aacute;n todos tus datos personales. Ten en cuenta que, por obligaci&oacute;n legal (art. 34.9 del Estatuto de los Trabajadores), los registros de jornada laboral deben conservarse durante 4 a&ntilde;os.
    </p>
    <p style="font-size: 15px; color: #4b5563; ${baseStyles}">
      Si no has solicitado esta eliminaci&oacute;n o deseas cancelarla, contacta con nosotros en <a href="mailto:info@fichados.es" style="color: #3b82f6; text-decoration: none;">info@fichados.es</a>.
    </p>
  `;
  return emailWrapper(
    "Solicitud de eliminaci&oacute;n recibida",
    content,
    "Has recibido este correo porque solicitaste eliminar tu cuenta en fichados.es"
  );
}
