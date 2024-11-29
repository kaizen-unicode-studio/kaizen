import EmailTemplate from "@/components/EmailTemplate/EmailTemplate";
import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest, NextResponse } from "next/server";
import React from "react";
import nodemailer from "nodemailer";
import { renderToString } from "react-dom/server";
import Order from "@/components/Order/Order";
import { getValueFromStream } from "@/utils";

const senderMail = "nodemailer.kaizen.test.mail@gmail.com";
const senderPass = "qrey cvcr aqad omqc";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: senderMail,
    pass: senderPass,
  },
});

// const html = renderToString(<Order />)

export async function POST(req: NextRequest) {
  const { searchParams } = new NextURL(req.url);
  // const bodyReader = req.body?.getReader();
  // const stringData = await bodyReader?.read().then(getValueFromStream);
  // console.log(stringData);

  const customerMail = searchParams.get("email")!;
  try {
    // const isVerified = await transporter.verify();

    const info = await transporter.sendMail({
      from: senderMail,
      to: customerMail,
      subject: "Your order",
      html: "<p>hello from nextjs</p>",
    });

    return NextResponse.json({ info }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
