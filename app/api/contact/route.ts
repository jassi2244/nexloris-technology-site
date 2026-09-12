import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

export const runtime = "nodejs";

function clean(value: FormDataEntryValue | null, max = 2000) {
  return String(value ?? "").trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    // Honeypot: bots often fill hidden fields.
    if (clean(form.get("bot-field"), 200)) {
      return NextResponse.redirect(new URL("/thank-you/", request.url), 303);
    }

    const name = clean(form.get("name"), 120);
    const email = clean(form.get("email"), 180);
    const company = clean(form.get("company"), 180);
    const service = clean(form.get("service"), 180);
    const message = clean(form.get("message"), 4000);

    if (!name || !email || !message || !isEmail(email)) {
      return NextResponse.redirect(new URL("/?form=invalid#contact", request.url), 303);
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD");
      return NextResponse.redirect(new URL("/?form=config#contact", request.url), 303);
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    const subject = `New Nexloris enquiry from ${name}`;
    const plainText = [
      "New project enquiry from Nexloris Technology website",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Service: ${service || "Not selected"}`,
      "",
      "Project details:",
      message,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
        <h2 style="margin:0 0 18px">New Nexloris Technology enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || "Not selected")}</p>
        <p><strong>Project details:</strong></p>
        <div style="padding:14px 16px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;white-space:pre-wrap">${escapeHtml(message)}</div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Nexloris Website" <${gmailUser}>`,
      to: "nexloristechnology@gmail.com",
      replyTo: email,
      subject,
      text: plainText,
      html,
    });

    return NextResponse.redirect(new URL("/thank-you/", request.url), 303);
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.redirect(new URL("/?form=error#contact", request.url), 303);
  }
}
