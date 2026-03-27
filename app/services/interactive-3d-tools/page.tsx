import type { Metadata } from "next";
import Interactive3DToolsClient from "./Interactive3DToolsClient";

const BASE = "https://www.alliancemedialabs.com";

export const metadata: Metadata = {
  title: "Interactive 3D Tools for Real Estate | Property Configurator & Virtual Showroom India | Alliance Media Labs",
  description:
    "Engage property buyers with interactive 3D tools — property configurators, virtual showrooms, interactive floor plans, and unit selectors. Web-based, cross-platform, real-time customization. Mumbai, Delhi NCR, Bangalore. Get a demo.",
  keywords:
    "interactive 3D tools real estate India, property configurator India, virtual showroom real estate, interactive floor plan India, 3D unit selector real estate, real estate interactive experience India, web-based 3D property tool, real estate configurator Mumbai Delhi Bangalore, interactive property visualization India, 3D viewer real estate website India",
  alternates: { canonical: `${BASE}/services/interactive-3d-tools` },
  openGraph: {
    title: "Interactive 3D Tools for Real Estate | Property Configurator & Virtual Showroom India",
    description: "Property configurators, virtual showrooms & interactive floor plans for real estate. Web-based, cross-platform. Mumbai, Delhi, Bangalore.",
    url: `${BASE}/services/interactive-3d-tools`,
    siteName: "Alliance Media Labs",
    images: [{ url: `${BASE}/images/home/3.jpg`, width: 1200, height: 630, alt: "Interactive 3D Tools — Alliance Media Labs" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive 3D Tools Real Estate India | Alliance Media Labs",
    description: "Property configurators, virtual showrooms & interactive floor plans. Web-based, cross-platform.",
    images: [`${BASE}/images/home/3.jpg`],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE}/services/interactive-3d-tools#service`,
  name: "Interactive 3D Tools for Real Estate",
  description: "Web-based interactive 3D property configurators, virtual showrooms, and interactive floor plans for real estate sales offices and websites.",
  provider: { "@type": "Organization", "@id": `${BASE}/#organization`, name: "Alliance Media Labs" },
  serviceType: "3D Property Configurator",
  areaServed: [{ "@type": "City", name: "Mumbai" }, { "@type": "City", name: "Delhi" }, { "@type": "City", name: "Bangalore" }, { "@type": "Country", name: "India" }],
  url: `${BASE}/services/interactive-3d-tools`,
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Interactive 3D Tools", item: `${BASE}/services/interactive-3d-tools` },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is a property configurator?", acceptedAnswer: { "@type": "Answer", text: "A property configurator is an interactive web tool that lets buyers customize a property in real time — switching between floor plans, selecting unit types, changing material finishes, and viewing different layout options — all from their browser." } },
    { "@type": "Question", name: "What is a virtual showroom for real estate?", acceptedAnswer: { "@type": "Answer", text: "A virtual showroom is a web-based 3D environment where buyers can explore a property's design, materials, and layouts without visiting a physical sales office. It can be accessed from anywhere and is available 24/7." } },
    { "@type": "Question", name: "Can these tools be used in a sales office?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our interactive 3D tools are designed for both sales office touchscreen displays and remote buyer access via web browsers. They work seamlessly on large screens, tablets, and smartphones." } },
    { "@type": "Question", name: "Can buyers select their unit using these tools?", acceptedAnswer: { "@type": "Answer", text: "Yes. Our interactive floor plan tools include availability matrix integration, allowing buyers to see which units are available, filter by floor/type/size, and mark their preferred unit for follow-up." } },
    { "@type": "Question", name: "Can these tools be embedded on a real estate project website?", acceptedAnswer: { "@type": "Answer", text: "Yes. All Alliance Media Labs interactive 3D tools are web-based and can be embedded directly on your project website via iframe or API integration. They are mobile-responsive and work across all browsers without requiring any app downloads." } },
    { "@type": "Question", name: "What is a 360° unit selector for real estate?", acceptedAnswer: { "@type": "Answer", text: "A 360° unit selector is an interactive floor plate view where buyers can click on any unit in a building to see its floor plan, view direction, size, and availability status. It helps buyers explore all available inventory visually and is a powerful sales tool for project launches." } },
  ],
};

export default function Interactive3DToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Interactive3DToolsClient />
    </>
  );
}
