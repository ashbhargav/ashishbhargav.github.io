// src/app/sitemap.ts

import { MetadataRoute } from 'next'; // This import is important
import { getPosts } from "@/utils/utils";
import { baseURL, routes as routesConfig } from "@/resources";

export const dynamic = 'force-static'; // This line makes the route static

// We've added the return type here -> Promise<MetadataRoute.Sitemap>
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const works = getPosts(["src", "app", "work", "projects"]).map((post) => ({
    url: `${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route as keyof typeof routesConfig]);

  const routes = activeRoutes.map((route) => ({
    url: `${baseURL}${route !== "/" ? route : ""}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works];
}