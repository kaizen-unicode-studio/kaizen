import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getValueFromStream } from "../../../utils";
import { NextURL } from "next/dist/server/web/next-url";

export const config = {
  api: {
    bodyParser: false,
  },
};

const endpointSecret = process.env.WEBHOOK_SECRET!;
const stripe = new Stripe(process.env.STRIPE_TOKEN || "", {
  apiVersion: "2024-11-20.acacia",
});

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature")!;
  const bodyReader = req.body!.getReader()!;

  const origin = process.env.URL_ORIGIN;

  if (!sig) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  let event;

  const bufferData = await bodyReader.read().then(getValueFromStream);

  try {
    event = stripe.webhooks.constructEvent(bufferData!, sig, endpointSecret);
  } catch (err) {
    return NextResponse.json({ err }, { status: 400 });
  }

  const { payment_intent, metadata, balance_transaction } = JSON.parse(
    bufferData!
  ).data.object;

  switch (event.type) {
    case "checkout.session.completed":
      await stripe.paymentIntents.update(payment_intent, { metadata });

      break;
    case "charge.updated":
      const { amount } = await stripe.balanceTransactions.retrieve(
        balance_transaction
      );

      const paymentData = await stripe.paymentIntents.retrieve(payment_intent);

      try {
        await fetch("https://api.airtable.com/v0/appHiUu8xLatLQoQj/orders", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + process.env.AIRTABLE_TOKEN,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              ...paymentData.metadata,
              amount: "$" + (amount / 100).toFixed(2),
            },
          }),
        });

        fetch(`${origin}/api/send?email=oleksiychernenko286@gmail.com`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...paymentData.metadata,
            amount: "$" + (amount / 100).toFixed(2),
          }),
        });
      } catch (error) {
        return NextResponse.json(
          { error: JSON.stringify(error) },
          { status: 400 }
        );
      }

      break;
    default:
  }

  try {
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error: JSON.stringify(error) }, { status: 400 });
  }
}
