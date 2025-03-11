import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getValueFromStream } from "@/utils";
import StaticOrder from "@/components/StaticOrder";
import { render } from "@react-email/components";

const senderMail = process.env.SENDER_MAIL;
const senderPass = process.env.SENDER_PASS;
const ownerMail = process.env.OWNER_MAIL!;

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

export async function POST(req: NextRequest) {
  const { searchParams } = new NextURL(req.url);
  const bodyReader = req.body?.getReader();
  const bodyData: { products: string; amount: number } = JSON.parse(
    (await bodyReader?.read().then(getValueFromStream))!
  );

  console.log("body:", bodyData);

  const html = await render(
    StaticOrder({
      itemsNames: bodyData.products,
      amount: Number(bodyData.amount),
    })
  );

  console.log("test html:", html);

  const customerMail = searchParams.get("email")!;
  try {
    await transporter.verify();

    const info = await transporter.sendMail({
      from: senderMail,
      to: [customerMail, ownerMail],
      subject: "Thank You for Choosing Kaizen Project! Here's Your Purchase!",
      html: html,
    });

    console.log("info:", info);

    return NextResponse.json({ info }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
