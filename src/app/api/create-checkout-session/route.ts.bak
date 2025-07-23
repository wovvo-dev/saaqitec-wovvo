import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const referral = body.referral;
  try {
    let sessionObject = {
      line_items: [
        {
          price: "price_1RaoLoIz0RvcPBNsswMJObFm",
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      mode: "payment",
      success_url: "https://www.wovvo.ai/",
      cancel_url: "https://www.wovvo.ai/",
      consent_collection: {
        terms_of_service: "required",
      },
      custom_text: {
        terms_of_service_acceptance: {
          message:
            "I agree to the [Terms and Conditions](https://www.wovvo.ai/terms-and-conditions)",
        },
      },
    } as any;
    if (referral) {
      sessionObject = {
        ...sessionObject,
        client_reference_id: referral,
      };
    }
    const session = await stripe.checkout.sessions.create(sessionObject);

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("Stripe Checkout Error:", err);
    return NextResponse.json(
      { error: err.message || "Something went wrong!" },
      { status: 500 }
    );
  }
}
