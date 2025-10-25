export default function robots() {
  const baseUrl = "sohag-faculty-of-engineering.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about-college", "/departments", "/news"],
      disallow: ["/private/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
