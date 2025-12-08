

/*import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

/*
export default nextConfig;
*/
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ required for static export (no server)
};

module.exports = nextConfig;
