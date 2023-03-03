const { withContentlayer } = require("next-contentlayer")

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  swcMinify: true,
  async headers () {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
    ]
  },
}

module.exports = withContentlayer(nextConfig)

// https://nextjs.org/docs/advanced-features/security-headers
// const ContentSecurityPolicy = `
//     script-src 'self' 'unsafe-eval' 'unsafe-inline' *.youtube.com *.twitter.com *.giscus.app;
//     style-src 'self' 'unsafe-inline' *.googleapis.com;
//     img-src * blob: data:;
//     media-src 'none';
//     connect-src *;
//     font-src * data:;
// `

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  // {
  //   key: 'Content-Security-Policy',
  //   value: ContentSecurityPolicy.replace(/\n/g, '')
  // },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload'
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  }
]
