/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Keep links to the old PHP site's URLs working.
  async redirects() {
    return [
      { source: "/chanpinyufuwu.html", destination: "/products", permanent: true },
      { source: "/changjianwenda.html", destination: "/faq", permanent: true },
      { source: "/Contact-us.html", destination: "/contact", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
