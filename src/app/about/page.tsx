'use client'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiThreads } from "react-icons/si"; // Threads icon from Simple Icons
import AboutGallerySlider from "../../components/AboutGallerySlider";

const aboutpage = () => {

  return (
    <main className="relative bg-white pt-24">
        <div className="aboutbanner flex-col bg-[url(/banner.jpg)] min-h-[350px] bg-cover bg-center flex justify-center items-center">
            <h2 className="text-[52px] font-bold text-center text-white">
                About Us
            </h2>
        </div>
        
        <section id="mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <div className="text-left mx-auto">
                <h2 className="text-base font-semibold text-primary tracking-wide uppercase">WOVVO</h2>
                <p className="mt-2 text-4xl font-bold sm:text-4xl">
                    Mission & <span className="gradient-text">Origin</span>
                </p>
                <p className="mt-4 text-md md:text-xl text-gray-600">
                    WOVVO was created to fill a real gap in the creator space: a lack of trustworthy, centralized places to find real, paid UGC jobs. Our mission is to build a smart, easy-to-use tool that helps creators turn their content into consistent income.
                </p>
                <p className="mt-4 text-md md:text-xl text-gray-600">Instead of chasing down gigs through sketchy DMs or dead job boards, WOVVO gives creators a clean, searchable experience filled with legit opportunities, time-saving tools, and community support. We’re here to make the business side of being a creator easier, faster, and more sustainable.</p>
                <p className="mt-4 text-md md:text-xl text-gray-600 max-w-[95%]">This all started with a small team of creators and marketers who got tired of the chaos. We knew there had to be a better way, so we built it.</p>
            </div>
        </section>

        <section id="creator-economy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mx-auto creator-economy-text">
                <h2 className="text-base font-semibold text-primary tracking-wide uppercase">VISION</h2>
                <p className="mt-2 text-4xl font-bold sm:text-4xl">
                    For The Creator <span className="gradient-text">Economy</span>
                </p>
                <p className="mt-4 text-md md:text-xl text-gray-600">We see a future where creators are treated like professionals, not just influencers.</p>
                <p className="mt-4 text-md md:text-xl text-gray-600">Our vision is to support the new wave of UGC talent by building the infrastructure that powers the modern creator’s career. WOVVO isn’t just a job feed. It’s a trusted tool to help you pitch smarter, get paid faster, and grow your business on your own terms.</p>
                <p className="mt-4 text-md md:text-xl text-gray-600">As the creator economy grows, so does the need for structure, transparency, and support. WOVVO is here to lead that shift, giving creators the power, tools, and freedom to build real careers doing what they love.</p>
            </div>
            <div className="creator-enomu-value">
                <div className="item-box">
                    <img src="user-icon.png" />
                    <div className="content">
                        <h4>USERS</h4>
                        <h5>250+</h5>
                    </div>
                </div>
                <div className="item-box">
                    <img src="co-founder-icon.png" />
                    <div className="content">
                        <h4>Founders</h4>
                        <h5>80+</h5>
                    </div>
                </div>
                <div className="item-box">
                    <img src="result-icon.png" />
                    <div className="content">
                        <h4>RESULTS</h4>
                        <h5>100%</h5>
                    </div>
                </div>
            </div>
        </section>

        <section id="founder-box" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <div className="text-center mx-auto">
                <h2 className="text-base font-semibold text-primary tracking-wide uppercase">WOVVO</h2>
                <p className="mt-2 text-4xl font-bold sm:text-4xl">
                    Our <span className="gradient-text">Founders</span>
                </p>
            </div>

            <div className="founder-wrapper">
                <div className="item">
                    <img src="founder01.png" alt="founder" />
                    <div className="content">
                        <div className="info">
                            <h3>Paula <span className="gradient-text">Hlavacek</span></h3>
                            <p>Co-Founder</p>
                        </div>
                        <div className="social">
                            <ul>
                                <li>
                                    <a href=""><FaFacebookF /></a>
                                </li>
                                <li>
                                    <a href=""><FaInstagram /></a>
                                </li>
                                <li>
                                    <a href=""><FaLinkedinIn /></a>
                                </li>
                                <li>
                                    <a href=""><SiThreads /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <img src="founder02.png" alt="founder" />
                    <div className="content">
                        <div className="info">
                            <h3>Ian <span className="gradient-text">Slater</span></h3>
                            <p>Co-Founder</p>
                        </div>
                        <div className="social">
                            <ul>
                                <li>
                                    <a href=""><FaFacebookF /></a>
                                </li>
                                <li>
                                    <a href=""><FaInstagram /></a>
                                </li>
                                <li>
                                    <a href=""><FaLinkedinIn /></a>
                                </li>
                                <li>
                                    <a href=""><SiThreads /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>

        <section id="creator-economy" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left mx-auto creator-economy-text">
                <p className="mt-2 text-4xl font-bold sm:text-4xl">
                    Built by Creators, <span className="gradient-text">Not Corporations</span>
                </p>
                <p className="mt-4 text-md md:text-xl text-gray-600">Hey, we’re Paula Hlavacek and Ian Slater, the duo behind WOVVO. Paula is a UGC coach, creator, and branding expert who knows what it takes to stand out and get hired. Ian comes from a tech and development background and has worked with global companies, building software and systems that scale.</p>
                <p className="mt-4 text-md md:text-xl text-gray-600">Together, we built WOVVO to be the tool we always wished existed. It’s designed to help creators find real, paid gigs faster, connect with brands, and grow their creator careers with confidence.</p>
                <p className="mt-4 text-md md:text-xl text-gray-600">We’re here to make things easier, smarter, and a lot more fun for creators everywhere.</p>
            </div>
            <div className="build-img">
                <img src="build.png" alt="build" />
            </div>
        </section>

        <section id="about_gallery" className="py-12 md:py-24">
            <div className="text-left mx-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-[50px]">
                <p className="mt-2 text-4xl font-bold sm:text-4xl">
                    Our <span className="gradient-text">Gallery</span>
                </p>
            </div>
            <AboutGallerySlider />
        </section>
    </main>
  )
}

export default aboutpage