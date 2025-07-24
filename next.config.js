/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GHL_API_BASE_URL: 'https://your-api-url.com',
    NEXT_PUBLIC_GHL_API_AUTH_KEY: 'your_auth_token_here',
    STRIPE_SECRET_KEY: 'sk_test_your_stripe_secret_key_here',
  }
}

module.exports = nextConfig