

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ required for static export (no server)
  images: {
    unoptimized: true, // ✅ required for static export (no server)
  },
};

module.exports = nextConfig;
