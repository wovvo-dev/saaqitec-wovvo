/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/constants/axiosInstance";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// GHL
const stripeSecretKey = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY;
const endpointSecret = process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET!;

if (!stripeSecretKey || !endpointSecret) {
  throw new Error("Missing stripe environment variables.");
}

const stripe = new Stripe(stripeSecretKey!, {});

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("stripe-signature")!;
    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        endpointSecret
      );
    } catch (err: any) {
      console.error("Webhook signature verification failed:", err.message);
      return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;
        // send customer details to Go High Level CRM
        console.log('[session information]' , session)
        console.log('[session tags ]' , [session?.metadata?.plan])
        axiosInstance
          .post("/v1/contacts/", {
            email: session?.customer_details?.email,
            phone: session?.customer_details?.phone,
            name: session?.customer_details?.name,
            tags: [session?.metadata?.plan],
          })
          .catch((error) => {
            console.log(error);
          });

        break;
    }

    return new Response("Received", { status: 200 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ error: error?.message });

    return NextResponse.json(
      { error: "unexpected error in stripe webhook" },
      { status: 400 }
    );
  }
}
