import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  getAdminDeleteRequestEmailHtml,
  getUserDeleteConfirmationEmailHtml,
} from "@/lib/email-templates/eliminar-cuenta";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const { email, motivo } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "El email es obligatorio" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email no válido" },
        { status: 400 }
      );
    }

    const resend = getResend();

    // Notify admin
    const { error: adminError } = await resend.emails.send({
      from: "Fichados <info@fichados.es>",
      to: "info@fichados.es",
      subject: `Solicitud de eliminación de cuenta: ${email}`,
      html: getAdminDeleteRequestEmailHtml(email, motivo || ""),
    });

    if (adminError) {
      console.error("Resend admin error:", adminError);
      return NextResponse.json(
        { error: "Error al procesar la solicitud" },
        { status: 500 }
      );
    }

    // Confirm to user
    await resend.emails.send({
      from: "Fichados <info@fichados.es>",
      to: email,
      subject: "Solicitud de eliminación de cuenta recibida - Fichados",
      html: getUserDeleteConfirmationEmailHtml(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
