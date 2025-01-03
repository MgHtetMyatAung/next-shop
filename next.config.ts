import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        search: "",
      },
      {
        protocol: "https",
        hostname: "placeimg.com",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
