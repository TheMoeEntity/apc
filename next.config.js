/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: "export",
};

module.exports = {
  experimental: {
    serverActions: true,
  },
};
