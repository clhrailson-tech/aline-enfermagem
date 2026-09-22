import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(process.env.GITHUB_PAGES === "true"
    ? { basePath: "/aline-enfermagem", assetPrefix: "/aline-enfermagem/" }
    : {}),
};

export default nextConfig;
