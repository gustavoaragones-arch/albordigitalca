const CONTACT_TO_EMAIL = "hello@albordigital.ca";

const PROJECT_TYPE_LABELS: Record<string, string> = {
  website: "Website design",
  brand: "Brand identity",
  both: "Website + brand identity",
  unsure: "Not sure yet",
};

type ContactEmailPayload = {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  message: string;
};

function formatProjectType(projectType: string) {
  return PROJECT_TYPE_LABELS[projectType] ?? projectType;
}

function buildEmailBody({
  name,
  email,
  company,
  projectType,
  message,
}: ContactEmailPayload) {
  const lines = [
    "New contact form submission from albordigital.ca",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Business: ${company?.trim() ? company : "—"}`,
    `Project type: ${formatProjectType(projectType)}`,
    "",
    "Message:",
    message,
  ];

  return lines.join("\n");
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Albor Digital Contact <onboarding@resend.dev>";

  if (!apiKey) {
    throw new Error("Email is not configured on the server.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: payload.email,
      subject: `New contact form — ${payload.name}`,
      text: buildEmailBody(payload),
    }),
  });

  if (!response.ok) {
    const error = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;
    throw new Error(error?.message ?? "Failed to send contact email.");
  }
}
