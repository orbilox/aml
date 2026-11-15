import type { CityPageProject, CityServicePageData } from "../types";

const IMG = "/images/services/architectural-scale-models";

const MODEL_PROJECTS: Record<string, CityPageProject> = {
  shapoorji: {
    title: "The Dualis, Shapoorji Pallonji",
    location: "Mumbai",
    type: "Premium Residential Scale Model",
    image: `${IMG}/shapoorji/01.png`,
    description: "A premium, space-efficient scale model for a luxury residential launch, with detailed tower structure, landscape elements, and modern residential planning.",
  },
  hiranandani: {
    title: "Hiranandani Meadows, Thane",
    location: "Thane",
    type: "Township Master Plan Model",
    image: `${IMG}/3.jpg`,
    description: "A large-scale township model capturing multi-storey clusters, green corridors, and integrated community facilities.",
  },
  island: {
    title: "Island City Centre, Mumbai",
    location: "Mumbai",
    type: "Commercial Mixed-Use Model",
    image: `${IMG}/7.jpg`,
    description: "A landmark commercial scale model with towers, retail podiums, and waterfront promenade integration for a business district.",
  },
  spree: {
    title: "Spree City, Sonipat",
    location: "Sonipat, Delhi NCR",
    type: "Mixed-Use Township Model",
    image: `${IMG}/5.jpg`,
    description: "A large mixed-use master plan model with residential zones, commercial areas, and extensive landscaping across multiple phases.",
  },
  venkatesh: {
    title: "Venkatesh Skydale, Pune",
    location: "Pune",
    type: "Residential High-Rise Model",
    image: `${IMG}/4.jpg`,
    description: "A twin-tower residential model with podium-level amenities, a contextual urban setting, and accurate proportions for the Pune launch.",
  },
  centonic: {
    title: "Centonic, Pune",
    location: "Pune",
    type: "Contemporary Residential Model",
    image: `${IMG}/1.jpg`,
    description: "A precision residential model with modern tower structures, detailed landscaping, and comprehensive amenity planning.",
  },
};

// Real scale model work, used as representative samples on city pages where we
// don't have a verified project in that specific city. Framed honestly as
// general portfolio work, not claimed as local.
const SAMPLE_PORTFOLIO: CityPageProject[] = [
  MODEL_PROJECTS.shapoorji,
  MODEL_PROJECTS.spree,
  MODEL_PROJECTS.venkatesh,
];

const PORTFOLIO_INTRO = "A sample of our architectural scale model work for real estate developers across India.";

export const cities: CityServicePageData[] = [
  {
    serviceSlug: "architectural-scale-models",
    citySlug: "mumbai",
    fullSlug: "architectural-scale-models-mumbai",
    cityName: "Mumbai",
    stateName: "Maharashtra",
    reraAuthority: "MahaRERA",
    heroTitle: "Architectural Scale Models in Mumbai",
    heroSubtitle: "LED-Lit Scale Models for Mumbai's Residential Towers, Townships and Commercial Projects",
    heroImage: `${IMG}/1.jpg`,
    ogImage: `${IMG}/shapoorji/01.png`,
    introParagraph:
      "Mumbai's sales galleries are some of the most competitive in India, with towers launching side by side in Worli, Thane, and the western suburbs, and buyers comparing several in a single weekend. A scale model gives them something to gather around and understand at a glance: tower heights, podium amenities, and how the project sits in its surroundings. We have built scale models for projects in Mumbai and Thane, from a Shapoorji Pallonji luxury residential launch to a Hiranandani township master plan and a commercial mixed-use development at Island City Centre.",
    areasServed: ["Bandra", "Worli", "Andheri", "Lower Parel", "Thane", "Powai", "Borivali"],
    metaTitle: "Architectural Scale Models Mumbai | Alliance Media Labs",
    metaDescription:
      "LED-lit architectural scale models in Mumbai for towers, townships and commercial projects. Delivery and installation included. Get a free quote.",
    keywords:
      "architectural scale models Mumbai, scale model maker Mumbai, real estate scale model Mumbai, architectural model makers Mumbai, township scale model Mumbai, LED scale model Mumbai, miniature model making Mumbai, sales gallery model Mumbai, scale model company Mumbai",
    portfolioIntro: "Showcasing our scale model work for real estate projects in Mumbai and Thane.",
    portfolio: [MODEL_PROJECTS.shapoorji, MODEL_PROJECTS.island, MODEL_PROJECTS.hiranandani],
    extraFaqs: [
      {
        q: "Which Mumbai areas do you deliver scale models to?",
        a: "We deliver and install scale models across Mumbai and the wider region, including Bandra, Worli, Andheri, Lower Parel, Powai, Borivali, and Thane.",
      },
      {
        q: "Can the model be ready in time for a Mumbai project launch?",
        a: "Yes. Standard residential models take 15–25 working days and township models 30–50 working days from drawing sign-off. Rush production is available for urgent launches, so share your launch date early and we will plan backwards from it.",
      },
    ],
  },
  {
    serviceSlug: "architectural-scale-models",
    citySlug: "delhi-ncr",
    fullSlug: "architectural-scale-models-delhi-ncr",
    cityName: "Delhi NCR",
    stateName: "Delhi / Haryana / UP",
    reraAuthority: "RERA (Delhi / Haryana / UP as applicable)",
    heroTitle: "Architectural Scale Models in Delhi NCR",
    heroSubtitle: "LED-Lit Scale Models for Gurugram, Noida, Greater Noida & Delhi Real Estate Projects",
    heroImage: `${IMG}/1.jpg`,
    ogImage: `${IMG}/5.jpg`,
    introParagraph:
      "Delhi NCR is several markets in one, and many of its projects are large: townships and mixed-use developments across Gurugram, Noida, Greater Noida, and Sonipat, where the master plan is the product. A scale model makes that scale easy to grasp, showing phases, green corridors, and commercial zones on one table, and it gives brokers a fixed point to anchor every client meeting. Our NCR work includes a large mixed-use township model for Spree City in Sonipat, with residential zones, commercial areas, and landscaping across multiple phases.",
    areasServed: ["Gurugram", "Noida", "Greater Noida", "Ghaziabad", "Sonipat", "Dwarka Expressway", "Golf Course Road"],
    metaTitle: "Architectural Scale Models Delhi NCR | Alliance Media Labs",
    metaDescription:
      "LED-lit architectural scale models in Delhi NCR for townships and towers. Serving Gurugram, Noida and Sonipat. Get a free quote today.",
    keywords:
      "architectural scale models Delhi NCR, scale model maker Delhi, scale model maker Gurugram, real estate scale model Noida, township scale model Delhi NCR, architectural model makers Delhi, LED scale model Gurugram, miniature model making Delhi, sales gallery model Gurugram",
    portfolioIntro: "Showcasing our scale model work for real estate projects in Delhi NCR, alongside samples from across India.",
    portfolio: [MODEL_PROJECTS.spree, MODEL_PROJECTS.shapoorji, MODEL_PROJECTS.hiranandani],
    extraFaqs: [
      {
        q: "Do you build large township master plan models for Delhi NCR projects?",
        a: "Yes. Township and mixed-use master plan models are a core part of our work. They show phases, roads, green corridors, and amenities at scale, with phase-wise LED lighting available.",
      },
      {
        q: "Can you install the model at our sales gallery in Gurugram or Noida?",
        a: "Yes. We custom-crate the model, supervise transport, and send our team to install it at your sales gallery or exhibition stand anywhere across Delhi NCR.",
      },
    ],
  },
  {
    serviceSlug: "architectural-scale-models",
    citySlug: "bengaluru",
    fullSlug: "architectural-scale-models-bengaluru",
    cityName: "Bengaluru",
    stateName: "Karnataka",
    reraAuthority: "K-RERA",
    heroTitle: "Architectural Scale Models in Bengaluru",
    heroSubtitle: "LED-Lit Scale Models for Bengaluru's Apartments, Gated Communities and Commercial Projects",
    heroImage: `${IMG}/1.jpg`,
    ogImage: `${IMG}/1.jpg`,
    introParagraph:
      "Bengaluru's housing market is built around large gated communities and apartment projects along its tech corridors, such as Whitefield, Sarjapur Road, and North Bengaluru, and many buyers are working professionals comparing several launches. A scale model helps those buyers understand the layout, clubhouse, and green areas of a large community in a way a brochure cannot, and it works well for channel partners who present the project repeatedly. We build each model in our own workshop and deliver it to Bengaluru with custom crating and on-site installation at your sales gallery.",
    areasServed: ["Whitefield", "Sarjapur Road", "Electronic City", "Hebbal", "Koramangala", "Yelahanka", "North Bengaluru"],
    metaTitle: "Architectural Scale Models Bengaluru | Alliance Media Labs",
    metaDescription:
      "LED-lit architectural scale models in Bengaluru for apartments and gated communities. Serving Whitefield and Sarjapur. Get a free quote.",
    keywords:
      "architectural scale models Bengaluru, scale model maker Bengaluru, real estate scale model Bengaluru, architectural model makers Bengaluru, township scale model Bengaluru, LED scale model Bengaluru, miniature model making Bengaluru, sales gallery model Bengaluru, scale model company Bengaluru",
    portfolioIntro: PORTFOLIO_INTRO,
    portfolio: SAMPLE_PORTFOLIO,
    extraFaqs: [
      {
        q: "Do you deliver scale models to Bengaluru from outside the city?",
        a: "Yes. We build each model in our workshop, then custom-crate it and supervise transport to Bengaluru, with our team installing it at your sales gallery or exhibition stand.",
      },
      {
        q: "Can a scale model show a large gated community in Bengaluru?",
        a: "Yes. We build master plan models that show blocks, clubhouses, roads, and landscaped areas to scale, and add LED lighting so your sales team can highlight each phase in turn.",
      },
    ],
  },
  {
    serviceSlug: "architectural-scale-models",
    citySlug: "navi-mumbai",
    fullSlug: "architectural-scale-models-navi-mumbai",
    cityName: "Navi Mumbai",
    stateName: "Maharashtra",
    reraAuthority: "MahaRERA",
    heroTitle: "Architectural Scale Models in Navi Mumbai",
    heroSubtitle: "LED-Lit Scale Models for Navi Mumbai's Townships, Towers and Commercial Projects",
    heroImage: `${IMG}/1.jpg`,
    ogImage: `${IMG}/3.jpg`,
    introParagraph:
      "Navi Mumbai's market is shaped by large townships and new developments around Vashi, Kharghar, Panvel, and Ulwe, with buyers watching the airport and new infrastructure closely. For projects like these, the story is as much about the surroundings as the building, and a master plan scale model shows how towers, roads, and open spaces fit together on a plot. Our township work in the Mumbai region includes the Hiranandani Meadows master plan model in Thane, and we deliver and install models across Navi Mumbai.",
    areasServed: ["Vashi", "Nerul", "Kharghar", "Panvel", "Airoli", "Seawoods", "Ulwe"],
    metaTitle: "Architectural Scale Models Navi Mumbai | Alliance Media Labs",
    metaDescription:
      "LED-lit architectural scale models in Navi Mumbai for townships and towers. Serving Vashi, Kharghar and Panvel. Get a free quote today.",
    keywords:
      "architectural scale models Navi Mumbai, scale model maker Navi Mumbai, real estate scale model Navi Mumbai, township scale model Kharghar, architectural model makers Navi Mumbai, LED scale model Navi Mumbai, miniature model making Vashi, sales gallery model Panvel",
    portfolioIntro: "A sample of our scale model work for developers in the Mumbai region and across India.",
    portfolio: [MODEL_PROJECTS.hiranandani, MODEL_PROJECTS.shapoorji, MODEL_PROJECTS.island],
    extraFaqs: [
      {
        q: "Can a scale model help sell a township project in Navi Mumbai?",
        a: "Yes. A master plan model shows buyers the phases, internal roads, amenities, and open spaces at a glance, which is hard to convey in a brochure or on a screen.",
      },
    ],
  },
  {
    serviceSlug: "architectural-scale-models",
    citySlug: "pune",
    fullSlug: "architectural-scale-models-pune",
    cityName: "Pune",
    stateName: "Maharashtra",
    reraAuthority: "MahaRERA",
    heroTitle: "Architectural Scale Models in Pune",
    heroSubtitle: "LED-Lit Scale Models for Pune's Residential High-Rises, Townships and Commercial Projects",
    heroImage: `${IMG}/1.jpg`,
    ogImage: `${IMG}/4.jpg`,
    introParagraph:
      "Pune's housing demand is concentrated in its IT corridors, including Hinjewadi, Kharadi, Baner, and Wakad, where developers are launching high-rise towers with podium amenities close together. A scale model shows buyers the podium, the tower configuration, and the surroundings in one view, and it works hard in a sales gallery where families come to see the project together. We have built scale models for Pune developers, including a twin-tower residential model for Venkatesh Skydale and a contemporary residential model for Centonic.",
    areasServed: ["Hinjewadi", "Kharadi", "Baner", "Wakad", "Koregaon Park", "Viman Nagar", "Hadapsar"],
    metaTitle: "Architectural Scale Models Pune | Alliance Media Labs",
    metaDescription:
      "LED-lit architectural scale models in Pune for high-rises and townships. Serving Hinjewadi, Kharadi and Baner. Get a free quote today.",
    keywords:
      "architectural scale models Pune, scale model maker Pune, real estate scale model Pune, architectural model makers Pune, township scale model Pune, LED scale model Pune, miniature model making Pune, sales gallery model Pune, scale model company Pune",
    portfolioIntro: "Showcasing our scale model work for Pune developers, alongside a sample from across India.",
    portfolio: [MODEL_PROJECTS.venkatesh, MODEL_PROJECTS.centonic, MODEL_PROJECTS.shapoorji],
    extraFaqs: [
      {
        q: "Have you built scale models for Pune developers?",
        a: "Yes. Our Pune work includes a twin-tower residential model with podium amenities for Venkatesh Skydale and a contemporary residential model with detailed landscaping for Centonic.",
      },
    ],
  },
];
