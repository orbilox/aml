export interface CityPageProject {
  title: string;
  location: string;
  type: string;
  image: string;
  description: string;
}

export interface CityPageFAQ {
  q: string;
  a: string;
}

export interface CityServicePageData {
  /** e.g. "3d-walkthrough-videos" */
  serviceSlug: string;
  /** e.g. "navi-mumbai" */
  citySlug: string;
  /** e.g. "3d-walkthrough-videos-navi-mumbai" — matches the site's existing flat URL convention */
  fullSlug: string;
  /** e.g. "Navi Mumbai" */
  cityName: string;
  stateName: string;
  reraAuthority: string;

  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  ogImage: string;

  /** Genuinely city-specific paragraph — not a template with the city name swapped in. */
  introParagraph: string;
  areasServed: string[];

  metaTitle: string;
  metaDescription: string;
  keywords: string;

  portfolioIntro: string;
  portfolio: CityPageProject[];

  /** City-specific FAQs, appended after the shared service FAQ set. */
  extraFaqs: CityPageFAQ[];
}

export interface CityServiceTemplateConfig {
  serviceSlug: string;
  serviceLabel: string;
  /** e.g. "/services/3d-walkthrough-video-company-india" — the main (non-city) service page */
  serviceHref: string;
  serviceIcon: string;
  /** Existing hand-built city pages for this service, not yet in the data system — kept for cross-linking. */
  legacyCityPages: { href: string; label: string }[];
  services: (cityName: string) => { icon: string; title: string; description: string }[];
  whyUsItems: (cityName: string) => { title: string; description: string }[];
  processSteps: { n: number; t: string; d: string }[];
  baseFaqs: (cityName: string) => CityPageFAQ[];
  formServiceOptions: { value: string; label: string }[];
}
