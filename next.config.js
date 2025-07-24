/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GHL_API_BASE_URL: process.env.NEXT_PUBLIC_GHL_API_BASE_URL,
    NEXT_PUBLIC_GHL_API_AUTH_KEY: process.env.NEXT_PUBLIC_GHL_API_AUTH_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
  }
}

module.exports = nextConfig