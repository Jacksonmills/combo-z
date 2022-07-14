/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['www.dustloop.com', 'www.twitter.com', 'abs.twimg.com', 'pbs.twimg.com'],
  },
};

module.exports = nextConfig;
