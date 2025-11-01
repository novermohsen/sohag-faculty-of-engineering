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
      {
        protocol: "https",
        hostname: "**eng.sohag-univ.edu.eg",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
