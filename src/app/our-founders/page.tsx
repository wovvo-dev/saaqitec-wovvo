'use client'
import SocialProof from "src/components/SocialProof";

const FounderPage = () => {

  return (
    <main className="relative bg-white pt-24 pb-16">

      {/* Hero Banner */}
      <div className="aboutbanner flex-col bg-[url(/banner.jpg)] min-h-[350px] bg-cover bg-center flex justify-center items-center mb-[60px]">
        <h2 className="text-[52px] font-bold text-center text-white">
          Our Founders
        </h2>
      </div>

      <SocialProof
        view={16}
        title="Forever Founders:"
        highlight="The Original 80"
        subtitle="The creators who shaped Wovvo from the ground up"
      />

    </main>
  )
}

export default FounderPage