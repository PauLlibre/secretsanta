import type { NextConfig } from "next";
import withNextIntl from 'next-intl/plugin';

const config: NextConfig = {
  // Add any Next.js config options here
};

const nextConfig = withNextIntl()(config);

export default nextConfig;
