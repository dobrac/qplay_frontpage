/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        domains: ["cloud.n-io.cz"]
    },
    output: 'standalone',
    experimental: {
        images: {
            allowFutureImage: true,
        },
    },
}

module.exports = nextConfig
