/** @type {import('next').NextConfig} */
const nextConfig = {async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/index.html',
        permanent: true,
      },
      {
        source: '/dashboard/',
        destination: '/dashboard/index.html',
        permanent: true,
      },
    ];
  }, 
};

export default nextConfig;
