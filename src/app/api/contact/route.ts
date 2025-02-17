import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  const { name, email, message } = await request.json()

  // Configurar el transporter de nodemailer
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER,
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  try {
    // Enviar el email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.CEO_EMAIL, // El email del CEO
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
      `,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ message: "Mensaje enviado con éxito" }, { status: 200 })
  } catch (error) {
    console.error("Error al enviar el email:", error)
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
  }
}

