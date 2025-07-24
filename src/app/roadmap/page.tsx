'use client'
import TimelineSection from "src/components/TimelineSection";

const PressPage = () => {

  return (
    <main className="relative bg-white pt-24 pb-16">
      {/* Hero Banner */}
      <div className="aboutbanner flex-col bg-[url(/banner.jpg)] min-h-[350px] bg-cover bg-center flex justify-center items-center">
        <h2 className="text-[52px] font-bold text-center text-white">
          Wovvo Roadmap
        </h2>
      </div>

      {/* <TestimonialsSection /> */}
        <TimelineSection />

    </main>
  )
}

export default PressPage