import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityServiceTemplate from "@/components/city-pages/CityServiceTemplate";
import { getAllCityPageSlugs } from "@/data/city-pages/registry";
import { buildCityPageMetadata, buildCityPageSchemas } from "@/data/city-pages/pageHelpers";

export const revalidate = 86400;

export function generateStaticParams() {
  return getAllCityPageSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  return buildCityPageMetadata(params.slug);
}

export default function CityServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const schemas = buildCityPageSchemas(params.slug);
  if (!schemas) notFound();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas.faqSchema) }} />
      <CityServiceTemplate fullSlug={params.slug} />
    </>
  );
}
