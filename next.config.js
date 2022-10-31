/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.gofundme.com", "i.postimage.cc"],
  },
};

module.exports = nextConfig;
