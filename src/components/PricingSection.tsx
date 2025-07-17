"use client"

import type React from "react"
import { useState } from "react"
import { Check, X, Play } from "lucide-react"
import { plans, type PricingPlan } from "../constants/pricing_plans"
import useModalStore from "@/zustand-hooks/consent-modal"
import { sendGAEvent } from "@next/third-parties/google"
import handleCheckout from "@/services/handleCheckout"
import { useReferral } from "@/context/ReferralContext"

const PricingSection: React.FC = () => {
  const { setPaymentLink, openModal } = useModalStore()
  const [playingVideos, setPlayingVideos] = useState<Set<string>>(new Set())
      const { referral } = useReferral();
  

  // Function to extract YouTube video ID from URL
  const extractYouTubeId = (url: string): string | null => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/
    const match = url.match(regex)
    return match ? match[1] : null
  }

  // Function to check if text contains YouTube URL
  const containsYouTubeUrl = (text: string): boolean => {
    return text.includes("youtube.com") || text.includes("youtu.be")
  }

  // Function to handle video click
  const handleVideoClick = (url: string) => {
    const newPlayingVideos = new Set(playingVideos)
    if (playingVideos.has(url)) {
      newPlayingVideos.delete(url)
    } else {
      newPlayingVideos.add(url)
    }
    setPlayingVideos(newPlayingVideos)
  }

  const VideoEmbed = ({ url, title }: { url: string; title?: string }) => {
    const videoId = extractYouTubeId(url)
    if (!videoId) return null

    return (
      <div className="mt-2 mb-2">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title || "Video"}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    )
  }

  const PricingCard = ({ plan, index }: { plan: PricingPlan; index: number }) => {
    return (
      <div
        key={index}
        className={`rounded-2xl min-h-full overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${
          plan.highlighted ? "gradient-border bg-white shadow-xl" : "bg-white shadow-lg"
        }`}
      >
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
          <div className="flex items-baseline mb-4">
            <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 flex items-end gap-3">
               {plan.price}/
              {plan.name?.includes("🔥") ? (
                <h3 className="text-2xl font-bold text-gray-900">Lifetime Access</h3>
              ) : (
                <h3 className="text-2xl font-bold text-gray-900">Pay Once</h3>
              )}
            </span>
          </div>
          <p className="text-gray-600 mb-6">{plan.description}</p>
          {/* <Link href={plan?.highlighted ? plan.paymentLink : ""}> */}
            <button
              className={`w-full block py-3 px-4 rounded-lg text-center  ${
                plan.highlighted
                  ? "bg-primary  text-white hover:bg-primary-dark "
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200 font-extrabold pointer-events-none  cursor-not-allowed opacity-60"
              } transition-colors duration-200`}
              onClick={() => {
                if (!plan.highlighted) return
                sendGAEvent("event", "Join", { value: "User Joined!" })
                handleCheckout(referral)
                setPaymentLink(plan?.paymentLink)
                // openModal(
                //   `Become a ${plan?.name?.includes("Crew")
                //     ? "Launch Crew"
                //     : "Forever Founding"
                //   } Member Now!`
                // );
              }}
            >
              {plan.buttonText}
            </button>
          {/* </Link> */}
        </div>

        <div className="bg-gray-50 p-8 min-h-full">
          <h4 className="font-semibold text-gray-900 mb-4">What&apos;s included:</h4>
          <ul className="space-y-3">
            {plan.features.map((feature, featureIndex) => {
              // Type guard to ensure feature.text is a string
              const featureText = typeof feature.text === "string" ? feature.text : String(feature.text)

              return (
                <li key={featureIndex} className="flex items-start">
                  <span className={`flex-shrink-0 ${feature.included ? "text-primary" : "text-gray-300"}`}>
                    {feature.included ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                  </span>
                  <div className="ml-2 flex-1">
                    <span
                      className={`
        ${featureText.includes("50% Referral Program") ? "font-bold" : ""}
        ${feature.included ? "text-gray-900" : "text-gray-400"}
      `}
                    >
                      {containsYouTubeUrl(featureText) ? (
                        <>
                          {featureText.split("https://")[0]}
                          <button
                            onClick={() => handleVideoClick(`https://${featureText.split("https://")[1]}`)}
                            className="inline-flex items-center gap-1 underline text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <Play className="h-3 w-3" />
                            {playingVideos.has(`https://${featureText.split("https://")[1]}`)
                              ? "Hide Video"
                              : "Play Video"}
                          </button>
                          {playingVideos.has(`https://${featureText.split("https://")[1]}`) && (
                            <VideoEmbed url={`https://${featureText.split("https://")[1]}`} title="Feature Video" />
                          )}
                        </>
                      ) : featureText.includes("https://") ? (
                        <>
                          {featureText.split("https://")[0]}
                          <a
                            href={`https://${featureText.split("https://")[1]}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-blue-600 hover:text-blue-800"
                          >
                            https://{featureText.split("https://")[1]}
                          </a>
                        </>
                      ) : (
                        feature.text
                      )}
                    </span>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <section id="pricing" className=" pt-24 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mx-auto mb-16">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">LIMITED TO 250 CREATORS</h2>
          <p className="mt-2 text-4xl font-bold sm:text-4xl">
            Limited <span className="gradient-text">Spots Remaining</span>
          </p>
          <p className="mt-4 text-md md:text-xl text-gray-600">
            Secure your spot with lifetime access before we close the doors. This is your only chance.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {[plans[0], plans[1]].map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
        <div className="grid md:hidden grid-cols-1 md:grid-cols-2 gap-8 ">
          {[plans[1], plans[0]].map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PricingSection
