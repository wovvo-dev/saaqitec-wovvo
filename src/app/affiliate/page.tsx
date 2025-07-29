'use client'

const aboutpage = () => {

  return (
    <main className="relative bg-white pt-24">

        <div className="aboutbanner flex-col bg-[url(/banner.jpg)] min-h-[350px] bg-cover bg-center flex justify-center items-center">
            <h2 className="text-[52px] font-bold text-center text-white">
                Wovvo Community Program
            </h2>
        </div>

        <div className="whatmakewovvo max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <div className="text-center mx-auto mb-16">
                <h2 className="text-base font-semibold text-primary tracking-wide uppercase">PERKS OF Creators Joining Wovvo</h2>
                <p className="mt-2 text-4xl font-bold sm:text-4xl">
                    What Makes Wovvo <span className="gradient-text">More Than Just A Tool</span>
                </p>
                {/* <p className="mt-4 text-md md:text-xl text-gray-600">
                    Secure your spot with lifetime access before we close the doors. This is your only chance.
                </p> */}
            </div>
        </div>

    </main>
  )
}

export default aboutpage