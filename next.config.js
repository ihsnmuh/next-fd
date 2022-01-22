/** @type {import('next').NextConfig} */
const { resolve } = require('path');

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias['@components'] = resolve(__dirname, 'components');
    return config;
  },
  images: {
    domains: ['imgcdn.femaledaily.com', 'static.femaledaily.com', 'editorial.femaledaily.com', 'randomuser.me'],
    formats: ['image/avif', 'image/webp'],
  },
};
