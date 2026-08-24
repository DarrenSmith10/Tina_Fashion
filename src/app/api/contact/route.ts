import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name = "", email = "", message = "" } = await request.json();

    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanMessage = String(message).trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return Response.json({ error: "Missing fields." }, { status: 400 });
    }

    if (!cleanEmail.includes("@")) {
      return Response.json({ error: "Invalid email." }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from =
      process.env.CONTACT_FROM_EMAIL ??
      "Justina Smith Portfolio <onboarding@resend.dev>";

    if (!process.env.RESEND_API_KEY || !to) {
      return Response.json({ error: "Server email settings are missing." }, { status: 500 });
    }

    const { data, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: cleanEmail,
      subject: `Portfolio enquiry from ${cleanName}`,
      text: [
        "New portfolio enquiry",
        "",
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        "",
        "Message:",
        cleanMessage,
      ].join("\n"),
    });

    if (error) {
      console.error(error);
      return Response.json({ error: "Unable to send message." }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Unable to send message." }, { status: 500 });
  }
}
