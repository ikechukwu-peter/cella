/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "res.cloudinary.com",
      "www.hennessy.com",
      "www.cellarcentral.ng",
      "cdn.shopify.com",
      "i0.wp.com",
    ],
  },
  basePath: "",
};

module.exports = nextConfig;
