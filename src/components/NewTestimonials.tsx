'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import newTestimonials from '../data/newTestimonials'

const NewTestimonials = () => {
  const half = Math.ceil(newTestimonials.length / 2)
  const row1 = [...newTestimonials.slice(0, half), ...newTestimonials.slice(0, half)]
  const row2 = [...newTestimonials.slice(half), ...newTestimonials.slice(half)]

  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const r1 = row1Ref.current
    const r2 = row2Ref.current
    if (!r1 || !r2) return

    let x1 = 0
    let x2 = -r2.scrollWidth / 2 // Start from the end

    let row1Width = r1.scrollWidth / 2
    let row2Width = r2.scrollWidth / 2

    const animate = () => {
      x1 -= 0.5
      if (x1 <= -row1Width) x1 = 0
      r1.style.transform = `translateX(${x1}px)`

      x2 += 0.5
      if (x2 >= 0) x2 = -row2Width
      r2.style.transform = `translateX(${x2}px)`

      requestAnimationFrame(animate)
    }

    requestAnimationFrame(() => {
      row1Width = r1.scrollWidth / 2
      row2Width = r2.scrollWidth / 2
      x2 = -row2Width // Reset in case of layout delay
      animate()
    })
  }, [])

  return (
    <div className="w-full py-12 md:py-24 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <h1 className="text-4xl font-bold">
          What Our Creators Say <span className="gradient-text">About Us</span>
        </h1>
      </div>

      <div className="new-testimonail-slider-wrapper">
        {/* Row 1 */}
        <div className="overflow-hidden pb-1">
          <div
            ref={row1Ref}
            className="flex w-max gap-6 transition-none will-change-transform"
          >
            {row1.map((testimonial, i) => (
              <TestimonialCard testimonial={testimonial} key={`row1-${i}`} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden mt-10 pb-1">
          <div
            ref={row2Ref}
            className="flex w-max gap-6 transition-none will-change-transform"
          >
            {row2.map((testimonial, i) => (
              <TestimonialCard testimonial={testimonial} key={`row2-${i}`} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="w-[350px] bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-1 mb-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="rounded-full w-[40px] h-[40px] overflow-hidden flex-shrink-0">
            <Image
              className="object-cover w-full h-full"
              src={testimonial.image || '/placeholder.svg'}
              width={40}
              height={40}
              alt={testimonial.name}
            />
          </div>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-5">
          {testimonial.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-3">
          {testimonial.socials?.map((social: string, idx: number) => (
            <span
              key={idx}
              className="text-xs text-gray-500 bg-blue-50 px-2 py-1 rounded-full font-medium"
            >
              {social}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-100 pt-2">
        <p className="text-gray-900 font-semibold text-sm">- {testimonial.name}</p>
      </div>
    </div>
  )
}

export default NewTestimonials