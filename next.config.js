/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    CLIENT_API_URL: process.env.API_URL,
    OTHER_SECRET_KEY: process.env.SECRET_KEY,
  },
};

module.exports = nextConfig;
