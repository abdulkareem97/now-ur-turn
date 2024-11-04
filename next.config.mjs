/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: '/static',
    trailingSlash:true,
    images: {
        unoptimized: true,
      },

};

export default nextConfig;
