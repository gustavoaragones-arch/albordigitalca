import { sendContactEmail } from "@/lib/contact-email";
import { NextResponse } from "next/server";

type ContactPayload = {
  token?: string;
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const { token, name, email, company, projectType, message } = body;

  if (!name || !email || !projectType || !message) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Captcha is not configured on the server." },
      { status: 500 },
    );
  }

  if (!token) {
    return NextResponse.json(
      { error: "Please complete the captcha." },
      { status: 400 },
    );
  }

  const verifyResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
      }),
    },
  );

  const verification = (await verifyResponse.json()) as { success?: boolean };

  if (!verification.success) {
    return NextResponse.json(
      { error: "Captcha verification failed. Please try again." },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail({
      name,
      email,
      company,
      projectType,
      message,
    });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to send your message. Please email hello@albordigital.ca directly.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Message sent. We will respond within one business day.",
  });
}
