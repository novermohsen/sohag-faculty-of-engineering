export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/about-college", "/departments", "/news"],
      disallow: ["/private/"],
    },
  };
}
