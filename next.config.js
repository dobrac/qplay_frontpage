/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        domains: ["cloud.n-io.cz"]
    },
    experimental: {
        outputStandalone: true
    }
}

module.exports = nextConfig
