/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.revistagq.com",
      },
    ],
  },
};

export default nextConfig;
