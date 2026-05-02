import { Router } from "express";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const router = Router();

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function nights(arrival: string, departure: string): number {
  const a = new Date(arrival).getTime();
  const d = new Date(departure).getTime();
  return Math.round((d - a) / 86_400_000);
}

router.post("/booking", async (req, res) => {
  const { arrival, departure, adults, children, email } = req.body as Record<string, string>;

  if (!arrival || !departure || !email) {
    res.status(400).json({ error: "arrival, departure and email are required" });
    return;
  }
  if (new Date(departure) <= new Date(arrival)) {
    res.status(400).json({ error: "Departure must be after arrival" });
    return;
  }

  const stay = nights(arrival, departure);
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    logger.warn("GMAIL_USER / GMAIL_APP_PASSWORD not set — skipping email");
    res.json({ ok: true, emailSent: false });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  const guestHtml = `
    <div style="font-family:Georgia,serif;max-width:580px;margin:0 auto;color:#1f1a16">
      <div style="background:#e8683a;padding:32px 40px;border-radius:8px 8px 0 0">
        <h1 style="color:#fff;font-size:26px;margin:0;font-weight:400;font-style:italic">
          Family Peace House
        </h1>
        <p style="color:rgba(255,255,255,.85);margin:6px 0 0;font-size:13px;letter-spacing:1px;
          text-transform:uppercase">Thamel, Kathmandu</p>
      </div>
      <div style="background:#fbf7f2;padding:40px;border-radius:0 0 8px 8px;
        border:1px solid #e5dfd6;border-top:none">
        <p style="font-size:18px;font-style:italic;color:#1f1a16;margin:0 0 24px">
          Thank you for your enquiry!
        </p>
        <p style="color:#7a6f64;line-height:1.7;margin:0 0 28px">
          We have received your request and will confirm availability within
          <strong style="color:#1f1a16">24 hours</strong>.
          A member of our team will reply to this email address.
        </p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;margin-bottom:28px">
          <tr style="border-bottom:1px solid #e5dfd6">
            <td style="padding:12px 0;color:#7a6f64;width:40%">Check-in</td>
            <td style="padding:12px 0;color:#1f1a16;font-weight:600">${formatDate(arrival)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5dfd6">
            <td style="padding:12px 0;color:#7a6f64">Check-out</td>
            <td style="padding:12px 0;color:#1f1a16;font-weight:600">${formatDate(departure)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5dfd6">
            <td style="padding:12px 0;color:#7a6f64">Duration</td>
            <td style="padding:12px 0;color:#1f1a16;font-weight:600">${stay} night${stay !== 1 ? "s" : ""}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5dfd6">
            <td style="padding:12px 0;color:#7a6f64">Guests</td>
            <td style="padding:12px 0;color:#1f1a16;font-weight:600">
              ${adults || 1} adult${Number(adults) !== 1 ? "s" : ""}
              ${Number(children) > 0 ? `, ${children} child${Number(children) !== 1 ? "ren" : ""}` : ""}
            </td>
          </tr>
        </table>
        <p style="color:#7a6f64;font-size:13px;line-height:1.7;margin:0 0 28px">
          Questions? Reply to this email or call us at
          <a href="tel:+97714981138" style="color:#e8683a">+977 1-4981138</a>.
          Reception is open 24 / 7.
        </p>
        <p style="margin:0;font-style:italic;color:#1f1a16;font-size:16px">
          — Bimal &amp; the Family Peace House team
        </p>
      </div>
    </div>`;

  const ownerHtml = `
    <div style="font-family:Georgia,serif;max-width:580px;margin:0 auto;color:#1f1a16">
      <div style="background:#1f1a16;padding:24px 32px;border-radius:8px 8px 0 0">
        <h2 style="color:#e8683a;font-size:20px;margin:0;font-weight:400;font-style:italic">
          New Booking Request
        </h2>
      </div>
      <div style="background:#fbf7f2;padding:32px;border-radius:0 0 8px 8px;
        border:1px solid #e5dfd6;border-top:none">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr style="border-bottom:1px solid #e5dfd6">
            <td style="padding:10px 0;color:#7a6f64;width:40%">Guest email</td>
            <td style="padding:10px 0;color:#1f1a16;font-weight:600">
              <a href="mailto:${email}" style="color:#e8683a">${email}</a>
            </td>
          </tr>
          <tr style="border-bottom:1px solid #e5dfd6">
            <td style="padding:10px 0;color:#7a6f64">Check-in</td>
            <td style="padding:10px 0;color:#1f1a16;font-weight:600">${formatDate(arrival)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5dfd6">
            <td style="padding:10px 0;color:#7a6f64">Check-out</td>
            <td style="padding:10px 0;color:#1f1a16;font-weight:600">${formatDate(departure)}</td>
          </tr>
          <tr style="border-bottom:1px solid #e5dfd6">
            <td style="padding:10px 0;color:#7a6f64">Nights</td>
            <td style="padding:10px 0;color:#1f1a16;font-weight:600">${stay}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;color:#7a6f64">Guests</td>
            <td style="padding:10px 0;color:#1f1a16;font-weight:600">
              ${adults || 1} adult${Number(adults) !== 1 ? "s" : ""}
              ${Number(children) > 0 ? `, ${children} child${Number(children) !== 1 ? "ren" : ""}` : ""}
            </td>
          </tr>
        </table>
        <p style="margin:20px 0 0;font-size:13px;color:#7a6f64">
          Reply directly to the guest's email to confirm or decline.
        </p>
      </div>
    </div>`;

  try {
    await Promise.all([
      transporter.sendMail({
        from: `"Family Peace House" <${gmailUser}>`,
        to: email,
        subject: `Your booking request — ${formatDate(arrival)} to ${formatDate(departure)}`,
        html: guestHtml,
      }),
      transporter.sendMail({
        from: `"Family Peace House Website" <${gmailUser}>`,
        to: "familypeacehouse@gmail.com",
        replyTo: email,
        subject: `New booking request from ${email} — ${arrival} to ${departure}`,
        html: ownerHtml,
      }),
    ]);

    logger.info({ email, arrival, departure }, "Booking emails sent");
    res.json({ ok: true, emailSent: true });
  } catch (err) {
    logger.error({ err }, "Failed to send booking email");
    res.status(500).json({ error: "Failed to send confirmation email. Please call us directly." });
  }
});

export default router;
