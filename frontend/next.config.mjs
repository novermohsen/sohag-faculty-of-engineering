/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [{ protocol: "**", hostname: "**" }],
  },
};

export default nextConfig;
