import type { Metadata } from "next";
import BlogIndexClient from "./BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog | Alliance Media Labs – Real Estate Visualization Insights",
  description:
    "Explore expert articles on 3D walkthrough videos, virtual reality tours, drone photography, and real estate visualization. Stay updated with Alliance Media Labs.",
  keywords:
    "real estate visualization blog, 3D walkthrough guide, VR tours real estate, architectural rendering tips, drone photography real estate, Alliance Media Labs blog",
  alternates: {
    canonical: "https://www.alliancemedialabs.com/blog",
  },
  openGraph: {
    title: "Blog | Alliance Media Labs – Real Estate Visualization Insights",
    description:
      "Expert articles on 3D walkthrough videos, VR tours, and real estate visualization from Alliance Media Labs.",
    url: "https://www.alliancemedialabs.com/blog",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Alliance Media Labs Blog",
  description:
    "Expert insights on 3D walkthrough videos, virtual reality tours, and real estate visualization.",
  url: "https://www.alliancemedialabs.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Alliance Media Labs",
    url: "https://www.alliancemedialabs.com",
  },
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogIndexClient />
    </>
  );
}
