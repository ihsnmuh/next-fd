/** @type {import('next').NextConfig} */
const { resolve } = require('path');

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias['@components'] = resolve(__dirname, 'components');
    return config;
  },
};
