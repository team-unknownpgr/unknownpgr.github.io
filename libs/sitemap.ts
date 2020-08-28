import path from "path";
import { BlogMeta } from "./config";

type url = {
  loc: string;
  lastmod?: string;
  changefreq?: string;
  priority?: number;
};

// Generate sitemap xml (return type string) from urls.
// Use any[] for key-iteration
function getSitemap(urls: any[]) {
  let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  urls.forEach((url) => {
    sitemap += "<url>";
    for (let key in url) {
      sitemap += `<${key}>${url[key]}</${key}>`;
    }
    sitemap += "</url>";
  });
  sitemap += "</urlset>";
  return sitemap;
}

// Get the list of urls from metadata(blog-specified)
function getUrlsFromMeta(host: string, meta: BlogMeta) {
  if (host.endsWith("/")) host = host.substr(0, host.length - 1);

  let urls: url[] = [
    {
      loc: host,
      changefreq: "always",
      priority: 1.0,
    },
  ];
  for (let key in meta.posts) {
    let data = meta.posts[key];
    urls.push({
      loc: host + "/posts/" + data.name,
      lastmod: data.date.toISOString(),
      changefreq: "monthly",
    });
  }
  return urls;
}

module.exports = { getSitemap, getUrlsFromMeta };