import { withContentlayer } from "next-contentlayer"

import "./src/env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com"],
  },
}

export default withContentlayer(nextConfig)
