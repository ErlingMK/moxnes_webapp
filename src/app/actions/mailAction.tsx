"use server";
import * as SendGrid from "@sendgrid/mail";
import parseResponse from "./mailHelper";

const email = "post@moxnesjus.no";

type FormInput = {
  name: string;
  email: string;
  message: string;
  phone?: string;
  preferPhone: boolean;
};

function validateForm(form: FormData): FormInput {
  const name = form.get("name")?.toString();
  const preferPhone = form.has("preferPhone");
  const message = form.get("message")?.toString();
  const email = form.get("email")?.toString();
  const phone = form.get("phone")?.toString();

  if (name === null || message === null || email === null)
    throw new Error("Invalid form data");

  const input: FormInput = {
    name: name!,
    email: email!,
    message: message!,
    phone: phone,
    preferPhone: preferPhone,
  };

  return input;
}

export async function submitContactForm(formData: FormData) {
  SendGrid.setApiKey(process.env.SENDGRID_API_KEY!);

  const input = validateForm(formData);

  const reply: SendGrid.MailDataRequired = {
    to: input.email,
    from: email,
    subject: "Bekreftelse på motatt hendvendelse til Moxnes Jus",
    text: "Bekrefter hendvendelse til Moxnes Jus. Vi tar kontakt innen 1-2 dager.",
    html: createTemplate(input.name, input.message),
  };

  const msg: SendGrid.MailDataRequired = {
    to: email,
    from: email,
    subject: "Ny hendvendelse fra " + input.name,
    text: `Navn: ${input.name}\nE-post: ${input.email}\nTelefon: ${input.phone}\n\n${input.message}`,
    html: createEmailTemplate(input),
  };

  let responses = await SendGrid.send([reply, msg]);

  return parseResponse(responses);
}

function createEmailTemplate({
  name,
  email,
  message,
  phone,
  preferPhone,
}: FormInput) {
  // Sanitizing input values to prevent XSS attacks when using this in real environments
  const escapeHtml = (unsafe: string) =>
    unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  // Building the HTML string
  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Kontaktskjema</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          color: #333;
        }
        .email-container {
          max-width: 600px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
        .header {
          font-size: 20px;
          margin-bottom: 20px;
        }
        .content {
          margin-bottom: 10px;
        }
        .content span {
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">New Contact Form Submission</div>
        <div class="content"><span>Name:</span> ${escapeHtml(name)}</div>
        <div class="content"><span>Email:</span> ${escapeHtml(email)}</div>
        <div class="content"><span>Message:</span> ${escapeHtml(
          message
        )}</div>`;

  // Adding phone number if provided
  if (phone) {
    html += `
        <div class="content"><span>Phone:</span> ${escapeHtml(phone)}</div>`;
  }

  // Adding preferred contact method
  html += `
        <div class="content"><span>Preferred Contact Method:</span> ${
          preferPhone ? "Phone" : "Email"
        }</div>
      </div>
    </body>
    </html>`;

  return html;
}

function createTemplate(name: string, message: string) {
  const template = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Welcome Email</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    color: #333333;
                }
                .header {
                    background-color: #f2f2f2;
                    padding: 10px 0;
                    text-align: center;
                }
                .content {
                    padding: 20px;
                    text-align: left;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Hei, ${name}!</h1>
            </div>
            <div class="content">
                <h2>Dette er en bekreftelse på at vi har motatt din henvendelse. Vi tar kontakt om kort tid.</h2>
                <p>Her er en kopi av din henvendelse:</p>
                <br/>
                <p>${message}</p>
                <br/>
                <p>Med vennlig hilsen,</p>
                <p>Moxnes Jus</p>
            </div>
        </body>
        </html>
    `;

  return template;
}
