'use client';

import Image from 'next/image';

export const members: {
  id: number;
  image: string;
  tagline: string;
  followers: string;
  location: string;
}[] = [
  { id: 1, image: "/images/Jennifer_Alford.jpeg", tagline: "Jennifer Alford", followers: "1.9k Followers", location: "Iowa, US" },
  { id: 2, image: "/images/Alex_Gettlin.jpg", tagline: "Alex Gettlin", followers: "3.3k Followers", location: "Georgia, US" },
  { id: 3, image: "/images/Jessalyn_Tester.jpeg", tagline: "Jessalyn Tester", followers: "17k Followers", location: "Ohio, US" },
  { id: 4, image: "/comunity-avatr.jpg", tagline: "Ryan Barned", followers: "lorem Followers", location: "lorem , lorem" },
  { id: 5, image: "/images/Sarah-2.6k-Twitter.png", tagline: "Sarah Franz", followers: "31.5k Followers", location: "Alabama, US" },
  { id: 6, image: "/comunity-avatr.jpg", tagline: "Mannie Williams", followers: "lorem Followers", location: "lorem , lorem" },
  { id: 7, image: "/comunity-avatr.jpg", tagline: "Kendra Morancy", followers: "lorem Followers", location: "lorem , lorem" },
  { id: 8, image: "/comunity-avatr.jpg", tagline: "James Schneider", followers: "lorem Followers", location: "lorem , lorem" },

];

const AboutPage = () => {
  const visibleCards = members;

  return (
    <main className="relative bg-white pt-24">

        <div className="aboutbanner flex-col bg-[url(/banner.jpg)] min-h-[350px] bg-cover bg-center flex justify-center items-center">
            <h2 className="text-[52px] font-bold text-center text-white">
                Wovvo Community Program
            </h2>
        </div>

        <div className="whatmakewovvo max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col gap-[50px] items-center">
            <div className="text-center mx-auto">
                <h2 className="text-base font-semibold text-primary tracking-wide uppercase">PERKS OF Creators Joining Wovvo</h2>
                <p className="mt-2 text-4xl font-bold sm:text-4xl">
                    What Makes Wovvo <span className="gradient-text">More Than Just A Tool</span>
                </p>
                {/* <p className="mt-4 text-md md:text-xl text-gray-600">
                    Secure your spot with lifetime access before we close the doors. This is your only chance.
                </p> */}
            </div>
            <div className="toolswrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[15px]">
                <div className="item">
                    <div className="icon">
                        <img src="tool-icon.svg" alt="tool-icon" />
                        <h4>Who</h4>
                    </div>
                    <p>Wovvo’s affiliate program is for creators who want to earn <b>50% commission</b> by sharing a tool built for creators, by creators.Open to global members every yearly subscriber gets access to the Wovvo platform, private community, and their own referral link to start earning instantly.</p>
                </div>
                <div className="item">
                    <div className="icon">
                        <img src="tool-icon.svg" alt="tool-icon" />
                        <h4>Community</h4>
                    </div>
                    <p>Wovvo’s affiliate program is for creators who want to earn <b>50% commission</b> by sharing a tool built for Once you join Wovvo, you’ll get your own personalized referral link. Share it anywhere Twitter, TikTok, email list, even your group chat. Every creator who signs up through your link earns you 50% of their annual fee., by creators.Open to global members every yearly subscriber gets access to the Wovvo platform, private community, and their own referral link to start earning instantly.</p>
                </div>
                <div className="item">
                    <div className="icon">
                        <img src="tool-icon.svg" alt="tool-icon" />
                        <h4>How</h4>
                    </div>
                    <p>Wovvo isn’t just a tool, it’s a space for creators who are serious about landing paid deals without wasting hours searching. Inside, you’ll find a private community full of creators sharing wins, pitch ideas, and real feedback plus exclusive community-only resources to help you level up faster as a creator.</p>
                </div>
            </div>
            <button
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-lg text-white hover:bg-primary-dark transition-colors"
                >
                Get Access → Start Earning 50%
            </button>
        </div>

        <div className="affliate-signup py-12 md:py-24">
            <div className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-base font-semibold text-primary text-white uppercase">WOVVO</h2>
                <p className="mt-2 text-4xl font-bold sm:text-4xl text-white">
                    Affiliate Sign-Up Requirements
                </p>
                <p className="mt-4 text-md md:text-xl text-white max-w-[70%] mx-auto">
                    To join the affiliate program, you must be an active paid member of Wovvo. Once you're in, you'll get access to your unique referral link, tracking dashboard, and exclusive content to help you promote Wovvo with ease.
                </p>
            </div>

            <div className="circle-wrapper-animated max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="circle-one">
                    <img src="circle01.svg" alt="circleimg" />
                    <img src="circle02.svg" alt="circleimg" />
                </div>
                <div className="circle-two">
                    <img src="circle03.svg" alt="circleimg" />
                    <img src="circle04.svg" alt="circleimg" />
                    <img src="circle05.svg" alt="circleimg" />
                </div>
                <div className="text-center flex justify-center items-center flex-col gap-[50px] circle-text">
                    <p className="text-4xl font-bold sm:text-4xl text-white">
                        Click here to join the <br /> Affiliate Program
                    </p>
                    <button
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-lg text-white hover:bg-primary-dark transition-colors"
                        >
                        Get Access → Start Earning 50%
                    </button>
                </div>
            </div>

        </div>

        <div className="private-creator max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 grid gap-[50px]">

            <div className="text-center mx-auto">
                <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Private Creator Community Included</h2>
                <p className="mt-2 text-4xl font-bold sm:text-4xl">
                    150+ Creators <span className="gradient-text">& Growing</span>
                </p>
                <p className="mt-4 text-md md:text-xl text-gray-600">
                    Become a Wovvo yearly member for $99 and unlock two major things:
                </p>
            </div>

            <div className="creator-two-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
                <div className="item flex flex-col gap-[20px] items-start">
                    <img src="creator0001.png"/>
                    <div>
                        <p className="text-4xl font-bold sm:text-4xl">
                            <span className="gradient-text text-[65px]">Earn 50%</span><br />Commission Instantly
                        </p>
                        <p className="text-md text-gray-600 text-[16px]">
                            Get access to your own affiliate dashboard, personal referral link, and 50% commission on every creator you bring in.
                        </p>
                        <button
                            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-lg text-white hover:bg-primary-dark transition-colors mt-[30px]"
                            >
                            Join yearly → Access community
                        </button>
                    </div>
                </div>
                <div className="item flex flex-col gap-[20px] items-start">
                    <img src="creator0002.png"/>
                    <div>
                        <p className="text-4xl font-bold sm:text-4xl">
                           Private Creator <br /> Community included <br /><span className="gradient-text text-[42px]">(150+ Creators & Growing)</span>
                        </p>
                        <p className="text-md text-gray-600 text-[16px]">
                            When you join Wovvo yearly, you’re not just getting access to the platform…
                        </p>
                        <p className="text-md text-gray-600 text-[16px]">
                            You’re also joining a private UGC community filled with creators and business-builders who are serious about growing their UGC business and getting paid well to do it. Being around creators who treat UGC like a business is the kind of accountability you need to keep you motivated, growing and scaling your UGC business.
                        </p>
                    </div>
                </div>
            </div>

        </div>

        <div className="insigth max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mx-auto">
                <p className="text-4xl font-bold sm:text-4xl">
                    Inside, You’ll <span className="gradient-text">Find:</span>
                </p>
            </div>
            <div className="insight-content-wrapper">
                <div className="itme">
                    <p>Real-time convos, support, and inspo from other serious UGC creators</p>
                    <img src="insight-arrow.png" alt="insight-arrow" />
                </div>
                <div className="itme">
                    <p>Early access to features, drops, and beta tests</p>
                    <img src="insight-arrow.png" alt="insight-arrow" />
                </div>
                <div className="itme">
                    <p>Strategy chats, live audits, and behind-the-scenes of what’s working</p>
                    <img src="insight-arrow.png" alt="insight-arrow" />
                </div>
                <div className="itme">
                    <p>A space that values growth — no gatekeeping, just real support</p>
                    <img src="insight-arrow.png" alt="insight-arrow" />
                </div>
                <div className="itme">
                    <p>25+ hours of portfolio audits from founder Paula</p>
                    <img src="insight-arrow.png" alt="insight-arrow" />
                </div>
                <div className="itme">
                    <p>550+ brand contact emails (valued at $30 USD)</p>
                    <img src="insight-arrow.png" alt="insight-arrow" />
                </div>
                <div className="itme">
                    <p>500+ scroll-stopping video hooks (valued at $100 USD)</p>
                    <img src="insight-arrow.png" alt="insight-arrow" />
                </div>
                <div className="itme">
                    <p>Monthly giveaways + exclusive resources you won’t find anywhere else</p>
                    <img src="insight-arrow.png" alt="insight-arrow" />
                </div>
            </div>
            <button
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-lg text-white hover:bg-primary-dark transition-colors"
                >
                Join yearly → Access community
            </button>
        </div>

        <div className="twiter-image max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <div className="text-center mx-auto">
                <p className="mt-2 text-4xl font-bold sm:text-4xl">
                    Make a More Impact <span className="gradient-text">On Twitter</span>
                </p>
                <p className="mt-4 text-md md:text-xl text-gray-600">
                    Recieve a free Twitter blueprint as a Creator+ member of Wovvo.
                </p>
            </div>
            <img src="twiter-banner.png"/>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center ucg-bussiness-community bg-white rounded-3xl p-10 bg-[url('/ucg-bassness.jpg')] bg-cover bg-center shadow-[0px_2px_8px_0px_rgba(99,99,99,0.2)]">
            <div className='contentwrapper-inner'>
                <div className="flex items-center mb-4">
                <span className="text-base font-semibold text-primary tracking-wide uppercase">
                    Ready to grow your
                </span>
                {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center">
                    <span className="gradient-text">Income And Your UGC Business</span><br />And Be Part Of Community?
                </h2>

                <button
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-lg text-white hover:bg-primary-dark transition-colors"
                >
                Join yearly → Access community
                </button>
            </div>
        </div>

        <div className="comunityprograme max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 grid gap-[50px]">
            <div className="text-center mx-auto">
                <h2 className="text-base font-semibold text-primary tracking-wide uppercase">QUICK ANSWERS</h2>
                <p className="mt-2 text-4xl font-bold sm:text-4xl">
                    Wovvo Community <span className="gradient-text">Program Details</span>
                </p>
            </div>
            <div className="list-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[15px] w-[80%] mx-auto">
                <div className="item">
                    <ul>
                        <li>Commission payouts go out bi-weekly to the payment method you’ve added</li>
                        <li>You must have an active annual Wovvo membership to earn commission</li>
                        <li>Commissions apply only to first-year membership sales through your link</li>
                        <li>Refunds or cancellations during the trial will cancel your commission</li>
                    </ul>
                </div>
                <div className="item">
                    <ul>
                        <li>Self-referrals and spammy tactics are not allowed (we’re watching you)</li>
                        <li>Wovvo reserves the right to adjust rates or terms when needed</li>
                        <li>Global creators welcome promote Wovvo from anywhere around the world</li>
                        <li>You’ll get notified when someone signs up through your link</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="py-12 md:py-24 bg-gradient-to-r from-primary to-secondary text-white uscgmemes">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold sm:text-4xl mb-10">
                    Questions, UGC rants, or memes?
                    </h2>
                    <p className="text-xl mb-10 text-white/80">
                    Send them our way <span><a href="mailto:team@wovvo.ai"><img src="whitemail.png" />team@wovvo.ai</a></span> and we’ll be happy to help.
                    </p>
                    <button
                        className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-lg text-white hover:bg-primary-dark transition-colors"
                        >
                        Built by creators for Creators, that’s Wovvo.
                    </button>
                </div>
            </div>
        </div>

        <div className="comunitymember py-12 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-4xl font-bold sm:text-4xl text-center px-4 md:px-8">
                Creators who are earning<span className="gradient-text"> commission and in the community</span>
                </p>

                <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
                {visibleCards.map((phone, index) => (
                    <div
                    key={index}
                    className="relative rounded-xl overflow-hidden shadow-md h-[350px]"
                    >
                    <Image
                        src={phone.image}
                        alt="Profile Image"
                        layout="fill"
                        objectFit="cover"
                        objectPosition={phone.id === 10 ? 'top' : 'center'}
                        className="absolute inset-0 z-0"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(180.41deg,rgba(242,72,26,0)_3.77%,rgba(242,72,26,0.7)_49.77%,#F67112_99.64%)]"></div>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 text-white text-center space-y-1 w-[90vw] sm:w-auto max-w-xs">
                        <h3 className="text-lg font-extrabold truncate whitespace-nowrap">
                        {phone.tagline}
                        </h3>
                        <p className="text-sm truncate whitespace-nowrap">
                        {phone.followers}
                        </p>
                        <p className="truncate whitespace-nowrap">
                        {phone.location}
                        </p>
                    </div>
                    </div>
                ))}
                </div>

            </div>
        </div>

    </main>
  );
};

export default AboutPage;
