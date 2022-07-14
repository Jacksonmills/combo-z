/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // add the following snippet
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['www.dustloop.com'],
  },
};

module.exports = nextConfig;
