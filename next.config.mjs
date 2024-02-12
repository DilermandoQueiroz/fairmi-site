/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  // Use the basePath to set the subpath for GitHub Pages
  basePath: '/fairmi-site',
  // Enable static HTML export
  output: 'export',
};


export default nextConfig;
