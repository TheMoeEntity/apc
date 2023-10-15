/** @type {import('next').NextConfig} */
const nextConfig = {
  // trailingSlash: true,
  // skipTrailingSlashRedirect: true,
  // distDir: "dist",
  output: "export",
};

module.exports =
  // nextConfig;
  {
    experimental: {
      serverActions: true,
    },
  };
