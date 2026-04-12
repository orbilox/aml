import type { Metadata } from "next";

export const revalidate = 86400; // Revalidate every 24 hours
import BlogIndexClient from "./BlogIndexClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Blog | 3D Walkthrough, VR Tours & Real Estate Visualization Insights — Alliance Media Labs",
  description:
    "Expert articles on 3D walkthrough video production, virtual reality tours, architectural rendering, drone photography, and real estate visualization marketing. Learn from India's leading real estate visualization company.",
  keywords:
    "real estate visualization blog India, 3D walkthrough video guide, VR tour real estate blog, architectural rendering tips, drone photography real estate, how to make 3D walkthrough video, real estate marketing tips India, 3D animation blog real estate, property visualization insights, Alliance Media Labs blog",
  alternates: {
    canonical: `${BASE}/blog`,
  },
  openGraph: {
    title: "Blog | Real Estate Visualization Insights — Alliance Media Labs",
    description:
      "Expert articles on 3D walkthroughs, VR tours, architectural rendering, and real estate visualization from India's leading visualization company.",
    url: `${BASE}/blog`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/services/3d-walkthrough-videos/1.jpg`, width: 1200, height: 630, alt: "Alliance Media Labs Blog" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Alliance Media Labs — Real Estate Visualization Insights",
    description: "Expert guides on 3D walkthrough videos, VR tours, renders, and real estate visualization marketing across India.",
    images: [`${BASE}/images/services/3d-walkthrough-videos/1.jpg`],
  },
  robots: { index: true, follow: true },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Alliance Media Labs Blog",
  description:
    "Expert insights and guides on 3D walkthrough video production, virtual reality tours, architectural visualization, drone photography, and real estate marketing from Alliance Media Labs.",
  url: `${BASE}/blog`,
  publisher: {
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: "Alliance Media Labs",
    url: BASE,
    logo: {
      "@type": "ImageObject",
      url: "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/7240d6459fd7bd08670b4a90c4788daa.png",
    },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogIndexClient />
    </>
  );
}
