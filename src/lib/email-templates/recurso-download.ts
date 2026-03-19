interface RecursoEmailParams {
  nombreRecurso: string;
  downloadUrl: string;
}

export function getRecursoDownloadEmailHtml({
  nombreRecurso,
  downloadUrl,
}: RecursoEmailParams): string {
  return `<!DOCTYPE html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Tu plantilla de ${nombreRecurso}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      line-height: 1.6;
      color: #1f2937;
      background-color: #f3f4f6;
      -webkit-font-smoothing: antialiased;
      margin: 0;
      padding: 0;
    }
    @media only screen and (max-width: 620px) {
      .outer-table { width: 100% !important; }
      .inner-pad { padding: 24px 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f3f4f6;">
    <tr>
      <td align="center" style="padding: 40px 20px;">

        <table role="presentation" class="outer-table" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td align="center" class="inner-pad" style="background: #3b82f6; padding: 32px; text-align: center;">
              <div style="font-size: 32px; font-weight: 700; color: #ffffff; letter-spacing: -1px; margin-bottom: 16px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;">Fichados</div>
              <h1 style="font-size: 22px; font-weight: 600; color: #ffffff; margin: 0; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;">Aqu&iacute; tienes tu plantilla</h1>
              <p style="font-size: 14px; color: rgba(255,255,255,0.85); margin-top: 8px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;">${nombreRecurso}</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td class="inner-pad" style="padding: 32px;">

              <p style="font-size: 16px; color: #374151; margin-bottom: 16px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;">Hola,</p>

              <p style="font-size: 15px; color: #4b5563; margin-bottom: 20px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;">
                Gracias por descargar nuestra plantilla de <strong style="color: #1f2937;">${nombreRecurso}</strong>. Haz clic en el bot&oacute;n de abajo para descargarla:
              </p>

              <!-- Download Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 28px 0;">
                <tr>
                  <td align="center" style="text-align: center;">
                    <a href="${downloadUrl}" target="_blank" style="display: inline-block; padding: 14px 32px; background: #3b82f6; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-size: 15px; font-weight: 600; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;">Descargar plantilla Excel</a>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 24px 0;">
                <tr>
                  <td style="height: 1px; background: #e5e7eb; font-size: 0; line-height: 0;">&nbsp;</td>
                </tr>
              </table>

              <p style="font-size: 15px; color: #4b5563; margin-bottom: 12px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;">
                <strong style="color: #1f2937;">&iquest;Sab&iacute;as que puedes automatizar todo esto?</strong>
              </p>

              <p style="font-size: 15px; color: #4b5563; margin-bottom: 20px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;">
                Con <strong style="color: #1f2937;">Fichados</strong> tus empleados fichan desde el m&oacute;vil, las horas se calculan autom&aacute;ticamente y los registros son inalterables. Sin plantillas Excel, sin errores manuales. Desde solo 19&nbsp;&euro;/mes.
              </p>

              <!-- CTA Button -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 8px 0;">
                <tr>
                  <td align="center" style="text-align: center;">
                    <a href="https://app.fichados.es/registro-empresa" target="_blank" style="display: inline-block; padding: 12px 28px; background: #ffffff; color: #3b82f6 !important; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 600; border: 2px solid #3b82f6; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;">Probar Fichados gratis</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="inner-pad" style="background: #f9fafb; padding: 24px 32px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="font-size: 13px; color: #6b7280; margin-bottom: 8px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;">Este correo ha sido enviado porque solicitaste una plantilla en fichados.es</p>
              <p style="margin-top: 16px;">
                <a href="https://fichados.es" style="font-size: 13px; color: #3b82f6; text-decoration: none; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;">fichados.es</a>
                <span style="color: #d1d5db; margin: 0 8px;">|</span>
                <a href="https://app.fichados.es" style="font-size: 13px; color: #3b82f6; text-decoration: none; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;">Acceder a Fichados</a>
              </p>
              <p style="font-size: 12px; color: #9ca3af; margin-top: 16px; font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;">&copy; 2026 Fichados - Control de Fichajes</p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>`;
}
