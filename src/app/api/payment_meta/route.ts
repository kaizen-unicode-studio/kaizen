import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecret = new Stripe(process.env.STRIPE_TOKEN!);

export async function POST(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const paymentIntentId = searchParams.get("payment_intent")!;

  const metadata = {
    firstName: searchParams.get("firstName"),
    lastName: searchParams.get("lastName"),
    phone: searchParams.get("phone"),
    email: searchParams.get("email"),
    amount: searchParams.get("amount"),
    products: searchParams.get("products"),
  };

  try {
    await stripeSecret.paymentIntents.update(paymentIntentId, { metadata });

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error: JSON.stringify(error) }, { status: 500 });
  }
}
