"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"
import Image from "next/image"
import newTestimonials from "../data/newTestimonials"

const NewTestimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollTop >= scrollContainer.scrollHeight / 2) {
        scrollContainer.scrollTop = 0
      } else {
        scrollContainer.scrollTop += 1
      }
    }

    const interval = setInterval(scroll, 50)
    return () => clearInterval(interval)
  }, [])

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...newTestimonials, ...newTestimonials]

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <h1 className="text-4xl font-bold">What Our Creators Say <span className="gradient-text">About Us</span></h1>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative h-[600px] overflow-hidden">
        <div
          ref={scrollRef}
          className="h-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                {/* Stars and Profile Image */}
                <div className="flex items-center w-full justify-between gap-1 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="rounded-full w-[50px] h-[50px] overflow-hidden flex-shrink-0">
                    <Image
                      className="object-cover w-full h-full"
                      src={testimonial.image || "/placeholder.svg"}
                      width={50}
                      height={50}
                      alt={`${testimonial.name} profile`}
                    />
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-6">{testimonial.description}</p>

                {/* Social Handles */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {testimonial.socials?.map((social, socialIndex) => (
                    <span
                      key={socialIndex}
                      className="text-sm text-gray-500 bg-blue-50 px-3 py-1 rounded-full font-medium hover:bg-blue-100 transition-colors cursor-pointer"
                    >
                      {social}
                    </span>
                  ))}
                </div>

                {/* Client Name */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-3">
                    <p className="text-gray-900 font-semibold">- {testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewTestimonials
