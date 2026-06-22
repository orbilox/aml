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
      // Legacy WordPress URLs (pre-Next.js migration) — 301 to current paths
      // so link/index equity isn't lost on a 404.
      {
        source: "/architectural-scale-models",
        destination: "/services/architectural-scale-models",
        permanent: true,
      },
      {
        source: "/3d-walkthrough-videos",
        destination: "/services/3d-walkthrough-videos",
        permanent: true,
      },
      {
        source: "/real-estate-video-production-service-in-lucknow",
        destination: "/city-services/real-estate-video-production-gurugram",
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
          { key: "X-Robots-Tag", value: "index, follow" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Explicitly block API routes from indexing
        source: "/api/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        // Long-term cache for static assets (images, fonts, etc.)
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Long-term cache for Next.js static chunks
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
