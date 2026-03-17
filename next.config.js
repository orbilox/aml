/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.readdy.ai",
      },
    ],
  },
};

module.exports = nextConfig;
