import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    emotion: true,
  },
  images: {
    minimumCacheTTL: 60 * 60, // hour
  },
  async headers() {
    return [
      {
        source: "/fonts/:all*", // matches any request to /fonts
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
