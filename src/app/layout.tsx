// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

import "./globals.css";
import Navbar from "../components/Navbar";
import FooterSection from "../components/FooterSection";
import UserConsentModal from "../components/ui/user-consent-modal";
import TermsAndConditionsModal from "../components/ui/terms-conditions-modal";
import { ReferralProvider } from "../context/ReferralContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wovvo",
  description:
    "Stop chasing scattered brand deals across five platforms. Find UGC campaigns, casting calls, and brand briefs — all in one place.",
  openGraph: {
    title: "Wovvo - One Dashboard. Every UGC Job.",
    description:
      "Stop chasing scattered brand deals across five platforms. Find UGC campaigns, casting calls, and brand briefs — all in one place.",
    images: ["https://wovvo.ai/open-graph-banner.png"],
    url: "https://wovvo.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Twitter Pixel */}
        <Script id="twitter-conversion-tracking" strategy="afterInteractive">
          {`!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){
              s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
              },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,
              u.src='https://static.ads-twitter.com/uwt.js',
              a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
              twq('config','pks6f');`}
        </Script>
      </head>
      <body className="antialiased">
        <Navbar />
        <ReferralProvider>{children}</ReferralProvider>
        <FooterSection />
        <UserConsentModal />
        <TermsAndConditionsModal />

        {/* Rewardful */}
        <Script
          src="https://r.wdfl.co/rw.js"
          data-rewardful="fb0572"
          strategy="afterInteractive"
        />
        <Script id="rewardful-queue" strategy="beforeInteractive">
          {`(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');`}
        </Script>

        {/* Google Analytics */}
        <GoogleAnalytics gaId="G-HD79YKJYKD" />
      </body>
    </html>
  );
}