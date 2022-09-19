/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  pageExtensions: ['page.tsx'],

  images: {
    domains: ['rickandmortyapi.com'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/characters',
      },
    ];
  },
};
