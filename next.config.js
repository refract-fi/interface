/** @type {import('next').NextConfig} */

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Will need to replace this if we switch to static site
  //
  async redirects() {
    return [
      {
        source: '/rfct/:refractId',
        destination: '/rfct/:refractId/spectrum',
        permanent: false,
      },
    ];
  },
};

module.exports = withVanillaExtract(nextConfig);
