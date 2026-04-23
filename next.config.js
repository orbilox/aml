const nextConfig = {
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },

  // Add this to force clients to reload on new deployment
  experimental: {
    staleTimes: {
      dynamic: 0,
    },
  },
  images: {
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

  async headers() {
    return [
      {
        // Apply to all routes
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
      {
        // Explicitly block API routes from indexing
        source: "/api/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
