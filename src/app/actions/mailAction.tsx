"use server";
import * as SendGrid from "@sendgrid/mail";

const email = "post@moxnesjus.no";

export async function submitContactForm(formData: FormData) {
  SendGrid.setApiKey("");

  const reply: SendGrid.MailDataRequired = {
    to: formData.get("email")?.toString(),
    from: email,
    subject: "Bekreftelse på motatt hendvendelse til Moxnes Jus",
    text: "Bekrefter hendvendelse til Moxnes Jus. Vi tar kontakt innen 1-2 dager.",
    html: createTemplate(
      formData.get("name")?.toString() ?? "",
      formData.get("message")?.toString() ?? ""
    ),
  };

  const msg: SendGrid.MailDataRequired = {
    to: email,
    from: email,
    subject: "Erling tester å sende epost fra nettsiden",
    text: "HALLO, dette er en test",
    html: "<strong>HALLO</strong>",
  }; // todo: oppdater denne

  let responses = await SendGrid.send([reply, msg]);

  return responses.every((element) => {
    if (element[0].statusCode != 202) {
      // send actually returns an array
      console.log(element);
      return false;
    }

    return true;
  });
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
                <p>Dette er en bekreftelse på at vi har motatt din henvendelse. Vi tar kontakt om kort tid.</p>
                <p>${message}</p>
                <p>Med vennlig hilsen,</p>
                <p>Moxnes Jus</p>
            </div>
        </body>
        </html>
    `;

  return template;
}
