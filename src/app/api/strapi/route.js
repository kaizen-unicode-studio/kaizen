import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecret = new Stripe(process.env.STRIPE_TOKEN);

export async function POST(req) {
  const total = Number(
    new URLSearchParams(new URL(req.url).search).get("total")
  );

  const curr = new URLSearchParams(new URL(req.url).search).get("currency");

  try {
    const paymentIntent = await stripeSecret.paymentIntents.create({
      amount: total * 100,
      currency: curr,
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { clientSecret: JSON.stringify(error) },
      { status: 500 }
    );
  }
}
