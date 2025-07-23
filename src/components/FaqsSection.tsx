import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
// import { Badge } from "../components/ui/badge"
import { Badge } from "./ui/badge"

import { HelpCircle } from "lucide-react"

const faqData = [
  {
    question: "What is Wovvo?",
    answer:
      "Wovvo is the first job discovery platform built specifically for UGC creators. It curates verified, paid brand opportunities from across the internet — all in one clean, searchable dashboard. We're also building for the future: Wovvo will expand to source listings from 20+ platforms and integrate AI-powered job suggestions and automations to help creators land work faster.",
  },
  {
    question: "What membership options are currently available?",
    answer:
      "We are currently offering two early-access tiers:\n\n• Core Crew – One-year membership with all platform access\n• Forever Founder – One-time payment for lifetime access\n\nOnce the full platform launches publicly, Wovvo will only offer monthly or annual subscription plans. No one-time payment options will be available after this funding round.",
  },
  {
    question: "What is a Founding Contributor?",
    answer:
      "A Founding Contributor is anyone who joins as part of our pre-launch campaign.\n\n• Forever Founders receive permanent access, early features, and exclusive perks.\n• Core Crew Members are locked in at a lower annual rate and receive full access for one year.\n\nBoth tiers receive badges, community access, priority support, and referral commission opportunities.",
  },
  {
    question: "Are memberships transferable to someone else?",
    answer: "No. All Wovvo memberships are non-transferable and tied to the individual who originally signed up.",
  },
  {
    question: "How often are jobs updated?",
    answer:
      "New UGC jobs are added all day, every day. We're constantly scanning the internet to keep the feed fresh with real opportunities. Check back anytime — there's always something new.",
  },
  {
    question: "Does Wovvo take a cut from my jobs or deals?",
    answer:
      "No. Wovvo never takes a commission or fee from creators. All jobs link directly to the original platform or brand — no middlemen, no markup.",
  },
  {
    question: "Can I get a refund after purchasing a membership?",
    answer:
      "All payments are final and non-refundable, as outlined in our Terms and Conditions. This is a one-time opportunity to contribute to Wovvo's growth and lock in lifetime or discounted access.",
  },
  {
    question: "When does the platform launch?",
    answer:
      "• Version 1: Launching July 1, 2025\n• Version 2: Launching August 1, 2025 with additional tools, notifications, team access, and smart job suggestions",
  },
  {
    question: "Can't I just find jobs on my own?",
    answer:
      "You can — but it takes time and slows your workflow. Wovvo is built to help you find better jobs, faster. It keeps everything in one place so you can run your UGC business more efficiently and stay focused on landing paid gigs.",
  },
  {
    question: "What types of jobs are listed?",
    answer:
      "Wovvo includes all kinds of paid UGC opportunities — from social content to product demos and casting calls — across every industry. Just search by platform, keyword, or content type.",
  },
]

export default function FAQSection() {
  // Split FAQ data into two columns
  const leftColumnFaqs = faqData.filter((_, index) => index % 2 === 0)
  const rightColumnFaqs = faqData.filter((_, index) => index % 2 === 1)

  const renderFaqColumn = (faqs: typeof faqData) => (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {faqs.map((faq) => (
        <AccordionItem key={faq.question} value={`item-${faq.question}`} className="border-0 bg-transparent">
          <AccordionTrigger className="text-left hover:no-underline py-4 px-0 text-slate-700 font-medium">
            <div className="flex items-center gap-3 flex-1">
              <HelpCircle className="w-5 h-5 text-slate-500 flex-shrink-0" />
              <span className="text-sm leading-relaxed">{faq.question}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 text-sm leading-relaxed px-0 pb-4 ml-8">
            <div className="whitespace-pre-line">{faq.answer}</div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
  return (
    <section id="faqs" className="w-full min-h-[80vh] bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Gradient border wrapper */}
        <div className="p-1 gradient-border bg-white shadow-xl rounded-3xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 ">
            {/* Header */}
            <div className="mb-8">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/10 mb-4 px-3 py-1 text-sm font-medium border-0"
              >
                FAQ
              </Badge>
              <h2 className="text-4xl font-bold mb-6">Frequently <span className="gradient-text">Asked Questions</span> </h2>

            </div>

            {/* Two Column FAQ Layout */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-2">{renderFaqColumn(leftColumnFaqs)}</div>
              <div className="space-y-2">{renderFaqColumn(rightColumnFaqs)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
