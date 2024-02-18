/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cloud.n-io.cz',
            },
        ],
    },
    output: 'standalone',
    modularizeImports: {
        lodash: {
            transform: "lodash/{{member}}",
        },
    },
}

module.exports = nextConfig
