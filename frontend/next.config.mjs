/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**", // أو '/**' إذا تريد كل المسارات
      },
    ],
  },
};

export default nextConfig;
