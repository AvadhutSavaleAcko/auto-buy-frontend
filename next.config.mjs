import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    useSystemTlsCerts: true,
  },
  async rewrites() {
    return [
      {
        source: "/gi/auto-storefront/registration-number",
        destination: "/fresh-car/registration-number",
      },
    ];
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@store": path.resolve(__dirname, "src/store"),
      "@widgets": path.resolve(__dirname, "src/widgets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@actions": path.resolve(__dirname, "src/actions"),
      "@service": path.resolve(__dirname, "src/service"),
    };
    return config;
  },
};

export default nextConfig;
