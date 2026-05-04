import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "../posts";
import BlogDetailClient from "./BlogDetailClient";

export const revalidate = 86400;

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
      publishedTime: post.dateISO,
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
      "@type": "Organization",
      "@id": `${BASE}/#organization`,
      name: "Alliance Media Labs",
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
    datePublished: post.dateISO,
    dateModified: post.dateISO,
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

  // HowTo schema — eligible for Google featured snippets (position 0)
  const howToSchema =
    params.slug === "3d-walkthrough-video-service"
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Commission a 3D Walkthrough Video for Your Real Estate Project",
          description:
            "A step-by-step guide to getting a professional 3D walkthrough video produced for your real estate project in India.",
          step: [
            { "@type": "HowToStep", position: 1, name: "Submit Project Brief & CAD Files", text: "Share your architectural floor plans, elevation drawings, and CAD files with the 3D visualization studio. Include site area, number of floors, and typologies." },
            { "@type": "HowToStep", position: 2, name: "3D Modelling", text: "The studio builds a detailed 3D model of your project based on the submitted drawings — exterior shell, surrounding landscape, and interior spaces." },
            { "@type": "HowToStep", position: 3, name: "Material & Texture Application", text: "Specify your material palette — facade cladding, flooring, wall finishes. The team applies photorealistic textures to match your specifications." },
            { "@type": "HowToStep", position: 4, name: "Lighting Setup", text: "Lighting is configured to simulate time-of-day conditions — golden hour, daytime, or twilight — based on your marketing requirements." },
            { "@type": "HowToStep", position: 5, name: "Camera Path Planning", text: "Define the walkthrough camera route: exterior approach, amenity reveal, and interior room-by-room flow. Storyboard is approved before rendering begins." },
            { "@type": "HowToStep", position: 6, name: "High-Resolution Rendering", text: "Frames are rendered at 4K or Full HD across a render farm. This is the most time-intensive step — typically 3–7 days for a 2–3 minute walkthrough." },
            { "@type": "HowToStep", position: 7, name: "Post-Production & Delivery", text: "Rendered frames are assembled, colour graded, music and voiceover added, and final video delivered in formats suitable for social media, website, and site office display." },
          ],
        }
      : params.slug === "real-estate-drone-photography-india"
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Commission a Drone Shoot for Your Real Estate Project",
          description:
            "A step-by-step guide to planning and executing a professional drone shoot for real estate marketing in India.",
          step: [
            { "@type": "HowToStep", position: 1, name: "Choose a DGCA-Licensed Drone Operator", text: "Verify that the drone operator holds a valid DGCA Remote Pilot License (RPL) and that their drone is registered. This is mandatory for commercial shoots in India." },
            { "@type": "HowToStep", position: 2, name: "Plan Shot List & Flight Path", text: "Define the aerial angles you need: project overview, connectivity approach shots, amenity reveals, and construction progress. Provide the operator with site coordinates and any height restrictions." },
            { "@type": "HowToStep", position: 3, name: "Obtain Location Permissions", text: "The operator must obtain permissions from local authorities, especially for shoots near airports, defence zones, or high-density residential areas. This typically takes 3–5 days." },
            { "@type": "HowToStep", position: 4, name: "Schedule for Golden Hour", text: "Book the shoot for early morning (sunrise) or late afternoon (sunset) golden hour. These lighting conditions produce the most cinematic, high-quality aerial footage for real estate marketing." },
            { "@type": "HowToStep", position: 5, name: "Review & Post-Produce Footage", text: "Review raw 4K drone footage with the operator. Select the best clips for colour grading, stabilisation, and editing. Add motion graphics overlays (project name, proximity labels) in post-production." },
          ],
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}
      <BlogDetailClient slug={params.slug} />
    </>
  );
}
