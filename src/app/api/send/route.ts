import EmailTemplate from "@/components/EmailTemplate/EmailTemplate";
import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest } from "next/server";
import { Resend } from "resend";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { searchParams } = new NextURL(req.url);
  const customerMail = searchParams.get("email")!;
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["oleksiychernenko286@gmail.com", customerMail],
      subject: "Hello world",
      react: EmailTemplate() as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
