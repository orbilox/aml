import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "../posts";
import BlogDetailClient from "./BlogDetailClient";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const BASE = "https://www.alliancemedialabs.com";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Alliance Media Labs Blog`,
    description: post.excerpt,
    keywords:
      post.tags.join(", ") +
      ", Alliance Media Labs, real estate visualization India, 3D walkthrough video India",
    alternates: {
      canonical: `${BASE}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE}/blog/${post.slug}`,
      siteName: "Alliance Media Labs",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.thumbnail, width: 1200, height: 630, alt: post.title }],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.thumbnail],
    },
    robots: { index: true, follow: true },
  };
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
      url: BASE,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Alliance Media Labs",
      url: BASE,
      logo: {
        "@type": "ImageObject",
        url: "https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/7240d6459fd7bd08670b4a90c4788daa.png",
        width: 320,
        height: 88,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    image: {
      "@type": "ImageObject",
      url: post.thumbnail,
      width: 1200,
      height: 630,
    },
    url: `${BASE}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", ") + ", real estate visualization India, 3D walkthrough India",
    articleSection: "Real Estate Visualization",
    inLanguage: "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogDetailClient slug={params.slug} />
    </>
  );
}
