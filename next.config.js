/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ophdlafxdp1yk5hy.public.blob.vercel-storage.com',
        pathname: '/photos/**', // Allow any path under /photos
      },
    ],
  },
}

module.exports = nextConfig

