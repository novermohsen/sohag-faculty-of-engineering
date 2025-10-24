/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.strapiapp.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
