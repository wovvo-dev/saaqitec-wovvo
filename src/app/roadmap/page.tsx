'use client'
import TimelineSection from "src/components/TimelineSection";

const Roadmap = () => {
  return (
    <main className="relative bg-white pt-24 pb-16">
      {/* Hero Banner */}
      <div className="aboutbanner flex-col bg-[url(/banner.jpg)] min-h-[350px] bg-cover bg-center flex justify-center items-center">
        <h2 className="text-[52px] font-bold text-center text-white">
          Wovvo Roadmap
        </h2>
      </div>

      <TimelineSection />

      {/* Call to Action */}
      <div className="creue-cto bg-[url(/cta-crue.jpg)] min-h-[475px] bg-cover bg-center flex justify-center items-center">
        <div className="cta-form max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3>Get Notified When New Tools Go Live</h3>
          <div className="searchbar w-[90%] max-w-[600px] relative mt-0">
            <input
              className="placeholder-white bg-black w-full h-[50px] outline-none border-none px-[30px] text-white text-base font-light rounded-lg"
              type="email"
              placeholder="Your Email Address"
            />
            <button className="absolute right-0 top-1/2 -translate-x-[10px] -translate-y-1/2 bg-[#ee2720] text-white text-base px-[25px] pt-[10px] pb-[11px] leading-none rounded-[5px]">
              Send
            </button>
          </div>
          <p>
            Stay ahead of the curve by getting notified as soon as new tools launch. Be the first to explore innovative features designed to boost your productivity. Subscribe now and never miss an update on the latest tools going live!
          </p>
        </div>
      </div>

      {/* Instagram Section */}
      <section id="about_gallery" className="pt-10 md:pt-12 md:mb-[0px] mb-[-80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto mb-10">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Follow Us on Instagram</h2>
            <p className="mt-2 text-4xl font-bold sm:text-4xl">
              Get a Glimpse of <span className="gradient-text">Our Latest Work</span>
            </p>
            <p className="mt-4 text-md md:text-xl text-gray-600">
              <a href="https://www.instagram.com/wovvo.ai" target="_blank">wovvo@ai</a>
            </p>
          </div>
        </div>
        <div className="w-full h-[400px] md:h-[190px] overflow-hidden">
          <iframe
            src="https://pulsemarketing.cloud/wovvoai_instagrame/"
            title="Instagram Gallery"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </main>
  )
}

export default Roadmap;