/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true, // ✅ THIS FIXES THE ERROR
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.readdy.ai",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "alliancemedialabs.com" }],
        destination: "https://www.alliancemedialabs.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;