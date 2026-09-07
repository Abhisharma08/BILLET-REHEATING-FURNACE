import type {NextConfig} from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  basePath: '/billet-reheating-furnace',
<<<<<<< HEAD
  skipTrailingSlashRedirect: true,
  outputFileTracingRoot: path.join(__dirname),
=======
   skipTrailingSlashRedirect: true,
>>>>>>> d93b9f32c4e20ba99842f2c8a562b8d997af674a
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
