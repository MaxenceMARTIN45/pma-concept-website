const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // static site, deployable on GitHub Pages
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
