import type { MetadataRoute } from "next";

import { SITE, SITE_DESCRIPTION } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f3f3e7",
    theme_color: "#0e293e",
    icons: [
      {
        src: "/icon.jpg",
        type: "image/jpeg",
        sizes: "32x32",
        purpose: "any",
      },
    ],
  };
}
