import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this folder so a stray lockfile higher up the
  // disk does not confuse the build.
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
