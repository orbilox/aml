import type { CityServicePageData, CityServiceTemplateConfig } from "./types";
import { config as walkthroughConfig } from "./service-configs/3d-walkthrough-videos";
import { cities as walkthroughCities } from "./cities/3d-walkthrough-videos.cities";

// Add one line here per service as it's rolled out (e.g. VR Tours next month).
const SERVICE_CONFIGS: Record<string, CityServiceTemplateConfig> = {
  [walkthroughConfig.serviceSlug]: walkthroughConfig,
};

const ALL_CITIES: CityServicePageData[] = [...walkthroughCities];

export function getCityPageData(fullSlug: string): CityServicePageData | undefined {
  return ALL_CITIES.find((c) => c.fullSlug === fullSlug);
}

export function getServiceConfig(serviceSlug: string): CityServiceTemplateConfig | undefined {
  return SERVICE_CONFIGS[serviceSlug];
}

export function getAllCityPageSlugs(): string[] {
  return ALL_CITIES.map((c) => c.fullSlug);
}

export function getSiblingCityPages(serviceSlug: string, excludeCitySlug: string) {
  const fromDataFile = ALL_CITIES.filter(
    (c) => c.serviceSlug === serviceSlug && c.citySlug !== excludeCitySlug
  ).map((c) => ({ href: `/city-services/${c.fullSlug}`, label: c.cityName }));

  const legacy = SERVICE_CONFIGS[serviceSlug]?.legacyCityPages ?? [];

  return [...legacy, ...fromDataFile];
}
