import { withContentlayer } from 'next-contentlayer'

import './env.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  appDir: true,

  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['@prisma/client'],
  },
}

export default withContentlayer(nextConfig)
