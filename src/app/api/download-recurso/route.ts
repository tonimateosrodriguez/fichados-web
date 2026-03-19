import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { getRecursoDownloadEmailHtml } from "@/lib/email-templates/recurso-download";
import { getRecursoBySlug } from "@/data/recursos";
import { readFile } from "fs/promises";
import { join } from "path";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(request: NextRequest) {
  try {
    const { email, recursoSlug } = await request.json();

    if (!email || !recursoSlug) {
      return NextResponse.json(
        { error: "Email y recurso son obligatorios" },
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

    const recurso = getRecursoBySlug(recursoSlug);
    if (!recurso) {
      return NextResponse.json(
        { error: "Recurso no encontrado" },
        { status: 404 }
      );
    }

    // Save lead to Supabase
    const supabase = getSupabase();
    await supabase.from("leads").insert({
      email,
      recurso_slug: recursoSlug,
    });

    // Read the file to attach
    const filePath = join(process.cwd(), "public", "recursos", recurso.fileName);
    const fileBuffer = await readFile(filePath);

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fichados.es";

    // Send email with attachment
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: "Fichados <recursos@fichados.es>",
      to: email,
      subject: `Tu plantilla: ${recurso.nombre} - Fichados`,
      html: getRecursoDownloadEmailHtml({
        nombreRecurso: recurso.nombre,
        downloadUrl: `${baseUrl}/recursos/${recurso.fileName}`,
      }),
      attachments: [
        {
          filename: recurso.fileName,
          content: fileBuffer,
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
