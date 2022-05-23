/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    test: process.env.NEXT_APP_BACKEND_PORT
  }
};

module.exports = nextConfig;
