import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getValueFromStream } from "../../../utils";

export const config = {
  api: {
    bodyParser: false,
  },
};

const endpointSecret = process.env.WEBHOOK_SECRET!;
const stripe = new Stripe(process.env.STRIPE_TOKEN || "", {
  apiVersion: "2025-02-24.acacia",
});

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature")!;
  const bodyReader = req.body!.getReader()!;

  const origin = process.env.NEXT_PUBLIC_URL_ORIGIN; // process.env.NEXT_PUBLIC_URL_ORIGIN;
  // const tableToken = process.env.TABLE_TOKEN;
  if (!sig) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  let event;

  const bufferData = await bodyReader.read().then(getValueFromStream);

  console.log("buffer data:", bufferData);

  try {
    event = stripe.webhooks.constructEvent(bufferData!, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({ err, event }, { status: 400 });
  }

  const { payment_intent, metadata, balance_transaction } = JSON.parse(
    bufferData!
  ).data.object;

  console.log({ payment_intent, metadata, balance_transaction });

  switch (event.type) {
    case "checkout.session.completed":
      await stripe.paymentIntents.update(payment_intent, { metadata });

      break;
    case "charge.updated":
      // const { amount } = await stripe.balanceTransactions.retrieve(
      //   balance_transaction
      // );

      const paymentData = await stripe.paymentIntents.retrieve(payment_intent);
      console.log("payment data:", paymentData);

      try {
        await fetch(`${origin}/api/send?email=${paymentData.metadata.email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...paymentData.metadata,
            amount: (paymentData.amount / 100).toFixed(2),
          }),
        }).catch((r) => console.log("send error:", r));

        return NextResponse.json({ info: "success" }, { status: 200 });
      } catch (error) {
        return NextResponse.json(
          {
            error: JSON.stringify(error),
            info: "cannot send email",
            link: `${origin}/api/send?email=${paymentData.metadata.email}`,
            body: {
              ...paymentData.metadata,
              amount: (paymentData.amount / 100).toFixed(2),
            },
          },
          { status: 400 }
        );
      }

    default:
  }

  try {
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: JSON.stringify(error), info: "unknown error" },
      { status: 400 }
    );
  }
}
