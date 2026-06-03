/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.amu.ac.in',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;