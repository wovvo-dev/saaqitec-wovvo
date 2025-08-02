interface PlanFeature {
  text: string | React.ReactNode;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  buttonText: string;
  highlighted: boolean;
  features: PlanFeature[];
  paymentLink: string;
}

export const plans: PricingPlan[] = [
  // {
  //   name: "🔥Creator Pass+ *Final Chance",
  //   price: "$69",
  //   description:
  //     "Lock in the lowest rate for one year of full platform access.",
  //   buttonText: "Join as Founding Creator",
  //   paymentLink: process.env.NEXT_PUBLIC_ANNUAL_PLAN || "",
  //   highlighted: false,
  //   features: [
  //     { text: "Unlimited job feed access", included: true },
  //     { text: "Early access to new features/upgrades", included: true },
  //     { text: "Post-recording access to Town Hall meetings", included: true },
  //     { text: "Priority support from Wovvo team", included: true },
  //     { text: "10% Referral Program", included: true },
  //     { text: "Founding contributor perks", included: true },
  //     { text: "5 free 1-month invites for friends", included: true },
  //     { text: "Access to Founder's Circle community", included: true },
  //     { text: "Ability to vote on future platform features", included: false },
  //     { text: "Premium Founder chat with group coaching", included: false },
  //     { text: "1:1 UGC Portfolio & Social Media Video Audit", included: false },
  //     { text: "VIP creator status + Founder's badge", included: false },
  //     { text: "Free access to Founder's Webinars + AMAs", included: false },
  //     { text: "No subscriptions or renewals, ever", included: false },
  //   ],
  // },
  {
    name: "Forever Founder",
    price: "$117",
    description:
      "80 creators have locked in their permanent spot. Forever Founder spots are now full.",
    buttonText: "Sold Out",
    paymentLink: process.env.NEXT_PUBLIC_LIFETIME_PLAN || "",
    highlighted: false,
    features: [
      { text: "Unlimited job feed access", included: true },
      { text: "Early access to new features/upgrades", included: true },
      { text: "Participate in LIVE Town Hall meetings", included: true },
      { text: "Priority support from Wovvo team", included: true },
      {
        text: "50% Referral Program",
        included: true,
      },
      { text: "Founding contributor perks", included: true },
      { text: "5 free 1-month invites for friends", included: true },
      { text: "Access to Founder's Circle community", included: true },
      { text: "Ability to vote on future platform features", included: true },
      { text: "Premium Founder chat with group coaching", included: true },
      { text: "1:1 UGC Portfolio & Social Media Video Audit", included: true },
      { text: "VIP creator status + Founder's badge", included: true },
      { text: "Free access to Founder's Webinars + AMAs", included: true },
      { text: "No subscriptions or renewals, ever", included: true },
    ],
  },
  {
    name: "🔥 Creator+ Pass *Final Chance",
    price: "$167",
    description: "No subscriptions or renewals, ever.",
    buttonText: "Claim Creator+ Pass Now",
    highlighted: true,
    paymentLink: process.env.NEXT_PUBLIC_CREATOR_PASS_PLUS || "",
    features: [
      {
        text: "Watch 50+ UGC portfolio + Twitter audits (25+ hours) YouTube: https://www.youtube.com/watch?v=UUhT8HZw2UA",
        included: true,
      },
      {
        text: " Twitter Portfolio Blueprint: how to stand out on Twitter to brands",
        included: true,
      },
      
      {
        text: "550+ brand Email contacts for UGC creators",
        included: true,
      },
      {
        text: "500+ Viral Hook Vault for videos",
        included: true,
      },
      {
        text: "Unlimited job feed access",
        included: true,
      },
      {
        text: "Early access to new features/upgrades",
        included: true,
      },
      {
        text: "Participate in LIVE Town Hall meetings",
        included: true,
      },
      {
        text: "50% Referral Program",
        included: true,
      },
      
      {
        text: "Priority support from Wovvo team",
        included: true,
      },
      // {
      //   text: "Access to Founder's Circle community",
      //   included: false,
      // },
      {
        text: "5 free 1-month invites for friends",
        included: true,
      },
      {
        text: "Founding contributor perks",
        included: true,
      },
      {
        text: "Ability to vote on future platform features",
        included: true,
      },
      {
        text: "Premium Founder chat with group coaching",
        included: true,
      },
      {
        text: "VIP creator status + Founder's badge",
        included: true,
      },
      
    ],
  },
];
