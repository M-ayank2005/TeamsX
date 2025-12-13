/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
    })

    return config
  },
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/f/**"
      }
    ],
    domains: [
      "uploadthing.com",
    ]
  },
  // Disable static optimization for API routes
  skipTrailingSlashRedirect: true,
  // Explicitly configure app directory
  reactStrictMode: true,
}

module.exports = nextConfig