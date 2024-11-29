import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getValueFromStream } from "@/utils";
import StaticOrder from "@/components/StaticOrder";
import { render } from "@react-email/components";

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

  const customerMail = searchParams.get("email")!;
  try {
    await transporter.verify();

    const info = await transporter.sendMail({
      from: senderMail,
      to: customerMail,
      subject: "Thank you for purchasing our service!",
      html: html,
    });

    return NextResponse.json({ info }, { status: 200 });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
