import nodemailer from "nodemailer"

export interface BookingEmailData {
  guestName: string
  guestEmail: string
  phoneNumber: string
  checkIn: string
  checkOut: string
  nights: number
  totalPrice: number
  amountPaid: number
  paymentType: "full" | "deposit"
  reservationIds: string[]
  extras?: {
    pet?: boolean
    crib?: boolean
    parking?: boolean
    lateCheckIn?: boolean
    dietaryNeeds?: string
  }
  notes?: string
}

function getTransporter() {
  return nodemailer.createTransport({
    host: "smtps.aruba.it",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr + "T12:00:00")
    return d.toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
  } catch {
    return dateStr
  }
}

function formatMoney(amount: number): string {
  return new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(amount)
}

function buildExtrasHtml(extras?: BookingEmailData["extras"]): string {
  if (!extras) return ""
  const items: string[] = []
  if (extras.pet) items.push("🐾 Animale domestico")
  if (extras.crib) items.push("🍼 Culla in camera")
  if (extras.parking) items.push("🚗 Parcheggio")
  if (extras.lateCheckIn) items.push("🌙 Check-in tardivo (dopo le 22)")
  if (extras.dietaryNeeds) items.push(`🍽 Esigenze alimentari: ${extras.dietaryNeeds}`)
  if (!items.length) return ""
  return `
    <p style="margin:0 0 6px;font-size:13px;font-weight:600;color:#555;">Extra richiesti:</p>
    <ul style="margin:0 0 16px;padding-left:16px;font-size:14px;color:#444;">
      ${items.map((i) => `<li style="margin-bottom:4px;">${i}</li>`).join("")}
    </ul>`
}

function guestConfirmationHtml(data: BookingEmailData): string {
  const depositNote = data.paymentType === "deposit"
    ? `<p style="margin:0 0 16px;padding:12px 16px;background:#fff8e1;border-left:4px solid #f59e0b;border-radius:4px;font-size:14px;color:#92400e;">
        <strong>Caparra ricevuta:</strong> ${formatMoney(data.amountPaid)} (30%). Il saldo di
        ${formatMoney(data.totalPrice - data.amountPaid)} sarà riscosso in struttura al check-in.
      </p>`
    : `<p style="margin:0 0 16px;padding:12px 16px;background:#f0fdf4;border-left:4px solid #22c55e;border-radius:4px;font-size:14px;color:#166534;">
        <strong>Pagamento completo ricevuto:</strong> ${formatMoney(data.amountPaid)}
      </p>`

  return `<!DOCTYPE html>
<html lang="it">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:'Segoe UI',Arial,sans-serif;">
  <div style="max-width:600px;margin:32px auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
    <!-- Header -->
    <div style="background:#1a2744;padding:32px 40px;text-align:center;">
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">Paradiso delle Madonie</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.7);font-size:14px;">Castelbuono, Palermo — Sicily</p>
    </div>

    <!-- Body -->
    <div style="padding:40px;">
      <h2 style="margin:0 0 8px;font-size:20px;color:#111;">✅ Prenotazione confermata!</h2>
      <p style="margin:0 0 24px;font-size:15px;color:#555;">
        Ciao <strong>${data.guestName}</strong>, abbiamo ricevuto la tua prenotazione e il pagamento è stato elaborato con successo.
      </p>

      <!-- Booking details -->
      <div style="background:#f8f9fa;border-radius:8px;padding:20px;margin-bottom:24px;">
        <p style="margin:0 0 12px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#888;">Riepilogo soggiorno</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:6px 0;color:#555;width:120px;">Check-in</td><td style="padding:6px 0;font-weight:600;color:#111;">${formatDate(data.checkIn)}</td></tr>
          <tr><td style="padding:6px 0;color:#555;">Check-out</td><td style="padding:6px 0;font-weight:600;color:#111;">${formatDate(data.checkOut)}</td></tr>
          <tr><td style="padding:6px 0;color:#555;">Notti</td><td style="padding:6px 0;font-weight:600;color:#111;">${data.nights}</td></tr>
          <tr><td style="padding:6px 0;color:#555;">Totale soggiorno</td><td style="padding:6px 0;font-weight:600;color:#111;">${formatMoney(data.totalPrice)}</td></tr>
        </table>
      </div>

      ${depositNote}

      ${buildExtrasHtml(data.extras)}

      <!-- Ref -->
      <div style="background:#f8f9fa;border-radius:8px;padding:16px;margin-bottom:24px;">
        <p style="margin:0 0 6px;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#888;">Codice prenotazione</p>
        <p style="margin:0;font-family:monospace;font-size:13px;color:#333;">${data.reservationIds.join(" · ")}</p>
      </div>

      <!-- WhatsApp note -->
      <div style="border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin-bottom:24px;">
        <p style="margin:0;font-size:14px;color:#444;">
          💬 Ti contatteremo su <strong>WhatsApp</strong> al numero <strong>${data.phoneNumber}</strong> per confermare i dettagli del tuo soggiorno.
        </p>
      </div>

      <!-- Cancellation policy -->
      <div style="background:#fafafa;border-radius:8px;padding:16px;margin-bottom:24px;">
        <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#555;">Politica di cancellazione</p>
        <ul style="margin:0;padding-left:16px;font-size:13px;color:#666;line-height:1.7;">
          <li>Cancellazione &gt; 15 giorni prima del check-in: rimborso completo</li>
          <li>Cancellazione 4–14 giorni prima: rimborso del 50%</li>
          <li>Cancellazione ≤ 3 giorni prima: nessun rimborso</li>
        </ul>
      </div>

      <!-- Contact -->
      <p style="font-size:14px;color:#555;margin:0;">
        Per qualsiasi informazione siamo raggiungibili al <strong>0921 820683</strong> oppure a
        <a href="mailto:info@paradisodellemadonie.it" style="color:#1a2744;">info@paradisodellemadonie.it</a>.
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#f8f9fa;padding:20px 40px;text-align:center;border-top:1px solid #e5e7eb;">
      <p style="margin:0;font-size:12px;color:#999;">Hotel Paradiso delle Madonie · Via Umberto I · 90013 Castelbuono (PA)</p>
    </div>
  </div>
</body>
</html>`
}

function hotelNotificationHtml(data: BookingEmailData): string {
  const extrasList = [
    data.extras?.pet && "🐾 Animale domestico",
    data.extras?.crib && "🍼 Culla in camera",
    data.extras?.parking && "🚗 Parcheggio",
    data.extras?.lateCheckIn && "🌙 Check-in tardivo",
    data.extras?.dietaryNeeds && `🍽 ${data.extras.dietaryNeeds}`,
  ].filter(Boolean) as string[]

  return `<!DOCTYPE html>
<html lang="it">
<head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;font-size:14px;color:#222;padding:20px;">
  <h2 style="color:#1a2744;">🏨 Nuova prenotazione dal sito</h2>
  <table style="border-collapse:collapse;width:100%;max-width:500px;">
    <tr><td style="padding:8px 12px;background:#f0f0f0;font-weight:600;width:160px;">Ospite</td><td style="padding:8px 12px;">${data.guestName}</td></tr>
    <tr><td style="padding:8px 12px;background:#f0f0f0;font-weight:600;">Email</td><td style="padding:8px 12px;">${data.guestEmail}</td></tr>
    <tr><td style="padding:8px 12px;background:#f0f0f0;font-weight:600;">Telefono</td><td style="padding:8px 12px;">${data.phoneNumber}</td></tr>
    <tr><td style="padding:8px 12px;background:#f0f0f0;font-weight:600;">Check-in</td><td style="padding:8px 12px;">${formatDate(data.checkIn)}</td></tr>
    <tr><td style="padding:8px 12px;background:#f0f0f0;font-weight:600;">Check-out</td><td style="padding:8px 12px;">${formatDate(data.checkOut)}</td></tr>
    <tr><td style="padding:8px 12px;background:#f0f0f0;font-weight:600;">Notti</td><td style="padding:8px 12px;">${data.nights}</td></tr>
    <tr><td style="padding:8px 12px;background:#f0f0f0;font-weight:600;">Totale</td><td style="padding:8px 12px;font-weight:600;">${formatMoney(data.totalPrice)}</td></tr>
    <tr><td style="padding:8px 12px;background:#f0f0f0;font-weight:600;">Pagato</td><td style="padding:8px 12px;color:#16a34a;font-weight:600;">${formatMoney(data.amountPaid)} ${data.paymentType === "deposit" ? "(caparra 30%)" : "(pagamento completo)"}</td></tr>
    ${data.notes ? `<tr><td style="padding:8px 12px;background:#f0f0f0;font-weight:600;">Note</td><td style="padding:8px 12px;">${data.notes}</td></tr>` : ""}
    ${extrasList.length ? `<tr><td style="padding:8px 12px;background:#f0f0f0;font-weight:600;">Extra</td><td style="padding:8px 12px;">${extrasList.join(", ")}</td></tr>` : ""}
  </table>
  <p style="margin-top:16px;font-size:12px;color:#888;">Ref: ${data.reservationIds.join(", ")}</p>
</body>
</html>`
}

export async function sendBookingConfirmationEmail(data: BookingEmailData): Promise<void> {
  const transporter = getTransporter()
  await transporter.sendMail({
    from: `"Paradiso delle Madonie" <${process.env.SMTP_USER}>`,
    to: data.guestEmail,
    subject: "Prenotazione confermata — Paradiso delle Madonie",
    html: guestConfirmationHtml(data),
  })
}

export async function sendHotelNotificationEmail(data: BookingEmailData): Promise<void> {
  const to = process.env.BOOKING_NOTIFY_EMAIL || process.env.SMTP_USER || ""
  if (!to) return
  const transporter = getTransporter()
  await transporter.sendMail({
    from: `"Sito Web" <${process.env.SMTP_USER}>`,
    to,
    subject: `🏨 Nuova prenotazione dal sito — ${data.guestName}`,
    html: hotelNotificationHtml(data),
  })
}
