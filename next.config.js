/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // With a static export, `trailingSlash: true` makes each route emit
  // <route>/index.html instead of <route>.html. Every static host serves that at
  // /<route>/ with no rewrite or cleanUrls configuration, so the nine section
  // URLs work on Firebase Hosting exactly as they do locally. The hrefs in
  // data/sections.ts carry the same trailing slash, so links never take a
  // redirect hop — which would otherwise waste crawl budget and dilute signals.
  trailingSlash: true,
  experimental: {
    externalDir: true,
  },
};

module.exports = nextConfig;
