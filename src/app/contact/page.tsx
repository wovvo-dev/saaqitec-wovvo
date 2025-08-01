'use client'
import Link from "next/link";
import CtaSection from "../../components/CtaSection";

const ContactPage = () => {
  return (
    <main className="relative bg-white pt-24">
      {/* Banner */}
      <div className="aboutbanner flex-col bg-[url(/banner.jpg)] min-h-[350px] bg-cover bg-center flex justify-center items-center">
        <h2 className="text-[52px] font-bold text-center text-white">
          Contact Our Team
        </h2>
      </div>

      {/* Contact Section */}
      <section id="form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="formmap-wrapper grid grid-cols-1 lg:grid-cols-[60%_37%] gap-8">
          {/* Form */}
          <div className="form space-y-6">
            <h4 className="text-2xl font-semibold mb-4">Get In Touch</h4>
            <form className="space-y-4">
              {/* Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-white rounded-[5px]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-white rounded-[5px]"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white rounded-[5px]"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 bg-white rounded-[5px]"
              />

              {/* Message */}
              <textarea
                placeholder="Leave a message"
                rows={5}
                className="w-full px-4 py-3 resize-none bg-white rounded-[5px]"
              ></textarea>

              {/* Checkboxes */}
              <div>
                <p className="font-medium mb-2">I am a:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    "UGC Creator",
                    "Content Creator",
                    "Brand or Business",
                    "Agency",
                    "Influencer",
                    "Recruiter or Talent Manager",
                    "Freelancer",
                    "Other"
                  ].map((label, index) => (
                    <label key={index} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={label}
                        className="form-checkbox text-primary"
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Send
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="map w-full h-[100%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10498.696373289062!2d-123.1238735!3d49.2827296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717998d34a77%3A0xe0e189b14db771f!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1629556548123!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="class-faq-bar max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[70px]">
            <Link href="mailto:team@wovvo.ai">
              <div className="item bg-[#fff] rounded-[10px] flex flex-col items-center justify-center px-5 py-7 gap-[10px] shadow-md">
                  <img src="contact-email.svg" className="w-[80px]" alt="" />
                  <h5>Email</h5>
                  <Link href="mailto:team@wovvo.ai">Team@wovvo.ai</Link>
              </div>
            </Link>
            <Link href="https://www.instagram.com/wovvo.ai" target="_blank">
              <div className="item bg-gradient-to-r from-[#EE2720] to-[#F98C0D] rounded-[10px] flex flex-col items-center justify-center px-5 py-7 gap-[10px] shadow-md">
                  <img src="contact-inst.svg" className="w-[80px]" alt="" />
                  <h5 className='text-white'>DM Us</h5>
                  <Link href="https://www.instagram.com/wovvo.ai" target="_blank" className='text-white'>@wovvo.ai</Link>
              </div>
            </Link>
            <Link href="https://x.com/wovvoai" target="_blank">
              <div className="item bg-[#fff] rounded-[10px] flex flex-col items-center justify-center px-5 py-7 gap-[10px] shadow-md">
                  <img src="contact-twiter.svg" className="w-[80px]" alt="" />
                  <h5>Tweet Us</h5>
                  <Link href="https://x.com/wovvoai" target="_blank">@wovvoai</Link>
              </div>
            </Link>
        </div>
      </section>
      
      <CtaSection />

    </main>
  )
}

export default ContactPage