export interface MetaOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function createMetaTags(options: MetaOptions = {}) {
  const {
    title = "Simon Lind",
    description = "Simon Lind's personal website",
    image = "https://simonlind.com/OG.png",
    url = "https://simonlind.com"
  } = options;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];
}
