import type { Metadata } from "next";

export const siteConfig = {
  name: "Albor Digital",
  description:
    "Albor Digital builds websites and brand identities for small businesses in Alberta and across Canada. Canadian-owned. No retainers. Fixed pricing.",
  // Override in production via NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://albordigital.ca",
  ogImage: "/ace.webp",
  twitter: "@albordigital",
};

export interface GetSEOOptions {
  /** Page specific title. Rendered as `${title} | ${siteName}`. Omit for the site default. */
  title?: string;
  description?: string;
  /** Path of the page, e.g. "/pricing". Used for the canonical URL and og:url. */
  path?: string;
  /** Absolute or root relative OG / Twitter image. */
  image?: string;
  keywords?: string[];
  /** Set to true to keep the page out of search engines. */
  noIndex?: boolean;
  /** Override site name in title suffix and metadata (e.g. legal pages). */
  siteName?: string;
}

/**
 * Builds a complete Next.js `Metadata` object (title, description, canonical,
 * Open Graph, Twitter, robots, etc.) from a few page level inputs so every page
 * exposes consistent, SEO ready metadata.
 */
export function getSEO({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  keywords,
  noIndex = false,
  siteName = siteConfig.name,
}: GetSEOOptions = {}): Metadata {
  const resolvedTitle = title ? `${title} | ${siteName}` : siteName;
  const url = new URL(path, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: resolvedTitle,
    description,
    applicationName: siteName,
    keywords,
    authors: [{ name: siteName, url: siteConfig.url }],
    creator: siteName,
    publisher: siteName,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      siteName: siteName,
      title: resolvedTitle,
      description,
      url,
      locale: "en_CA",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image],
      creator: siteConfig.twitter,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
