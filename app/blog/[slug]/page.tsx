import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "../posts";
import BlogDetailClient from "./BlogDetailClient";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

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
    keywords: post.tags.join(", ") + ", Alliance Media Labs, real estate visualization",
    alternates: {
      canonical: `https://www.alliancemedialabs.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.alliancemedialabs.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.thumbnail, width: 800, height: 500 }],
    },
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
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Alliance Media Labs",
      url: "https://www.alliancemedialabs.com",
    },
    datePublished: post.date,
    image: post.thumbnail,
    url: `https://www.alliancemedialabs.com/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogDetailClient slug={params.slug} />
    </>
  );
}
