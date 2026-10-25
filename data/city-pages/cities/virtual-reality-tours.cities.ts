import type { CityPageProject, CityServicePageData } from "../types";

const IMG = "/images/portfolio/vr-experience";

const VR_PROJECTS: Record<string, CityPageProject> = {
  houseOfHiranandani: {
    title: "House of Hiranandani, Mumbai",
    location: "Mumbai",
    type: "Commercial VR Tour",
    image: `${IMG}/house-of-hiranandani-mumbai.png`,
    description: "Immersive VR tour of a premium shopping mall featuring interactive retail spaces and modern commercial architecture.",
  },
  mauliHousing: {
    title: "Mauli Housing, Mumbai",
    location: "Mumbai",
    type: "Residential VR Tour",
    image: `${IMG}/mauli-housing-mumbai.png`,
    description: "An immersive 360° VR tour showcasing landmark views and multi-height outside perspectives for a complete spatial experience.",
  },
  dostiGreaterThane: {
    title: "Dosti Greater Thane, Thane",
    location: "Thane",
    type: "Residential VR Tour",
    image: `${IMG}/dosti-greater-thane.png`,
    description: "A 360° VR real estate tour featuring a superimposed 3D building for a realistic virtual property walkthrough experience.",
  },
  provinceDOlympia: {
    title: "Province D Olympia, Noida",
    location: "Noida",
    type: "Plotted Development VR Tour",
    image: `${IMG}/province-d-olympia-noida.png`,
    description: "Interactive VR tour of a residential plotted development.",
  },
  shreeRadhaGopal: {
    title: "Shree Radha Gopal Residency, Kosi",
    location: "Kosi",
    type: "Plotted Development VR Tour",
    image: `${IMG}/shree-radha-gopal-residency-kosi.png`,
    description: "Interactive VR tour of a residential plotted development with modern amenities and green spaces.",
  },
  gmcConfluence: {
    title: "GMC Confluence, Bengaluru",
    location: "Bengaluru",
    type: "Residential VR Tour",
    image: `${IMG}/gmc-confluence-bengaluru.png`,
    description: "Immersive VR tour for residential real estate, featuring landscaped green spaces, day and night views, 3D visualisation, and nearby landmark highlights.",
  },
  featherliteSignature: {
    title: "Featherlite Signature, Bengaluru",
    location: "Bengaluru",
    type: "Commercial VR Tour",
    image: `${IMG}/featherlite-signature-bengaluru.png`,
    description: "Interactive VR tour of commercial office spaces with 3D visualisation and nearby landmark highlights.",
  },
  sapExperienceCenter: {
    title: "SAP Experience Center, Bengaluru",
    location: "Bengaluru",
    type: "Matterport Virtual Tour",
    image: `${IMG}/sap-experience-center-bengaluru.png`,
    description: "Matterport-powered virtual tour delivering an immersive and interactive walkthrough of the experience center.",
  },
};

// Real, verified VR work — used as representative samples on city pages where
// we don't (yet) have a verified project in that specific city. Framed
// honestly as general portfolio work, not claimed as local.
const SAMPLE_PORTFOLIO: CityPageProject[] = [
  VR_PROJECTS.shreeRadhaGopal,
  VR_PROJECTS.houseOfHiranandani,
  VR_PROJECTS.provinceDOlympia,
];

const PORTFOLIO_INTRO = "A sample of our VR tour work for real estate developers across India.";

export const cities: CityServicePageData[] = [
  {
    serviceSlug: "virtual-reality-tours",
    citySlug: "mumbai",
    fullSlug: "virtual-reality-tours-mumbai",
    cityName: "Mumbai",
    stateName: "Maharashtra",
    reraAuthority: "MahaRERA",
    heroTitle: "Virtual Reality Tours in Mumbai",
    heroSubtitle: "Interactive 360° VR Property Tours for Mumbai's Residential and Commercial Real Estate Projects",
    heroImage: "/images/services/virtual-reality-tours/1.jpg",
    ogImage: `${IMG}/house-of-hiranandani-mumbai.png`,
    introParagraph:
      "In Mumbai, buyers are often choosing between towers that look similar on paper, in a market where site visits mean long commutes across the city. A VR tour lets a buyer in Andheri or Dubai walk through a Worli or Thane project in minutes, before deciding whether the trip is worth making. We have built VR tours for projects in Mumbai and Thane, from residential towers to a retail mall, with 3D visualisation and nearby landmark highlights that answer the connectivity question buyers raise first.",
    areasServed: ["Bandra", "Worli", "Andheri", "Lower Parel", "Thane", "Powai", "Borivali"],
    metaTitle: "Virtual Reality Tours Mumbai | Alliance Media Labs",
    metaDescription:
      "Interactive 360° VR property tours in Mumbai, no headset needed. Serving Bandra, Worli and Andheri. Get a free quote today.",
    keywords:
      "virtual reality tours Mumbai, VR tours Mumbai real estate, 360 virtual tour Mumbai, VR property tour Mumbai, virtual reality real estate Mumbai, interactive property tour Mumbai, VR walkthrough Mumbai, real estate VR company Mumbai, 3D virtual home tour Mumbai, pre-launch VR tour Mumbai",
    portfolioIntro: "Showcasing our VR tour work for real estate projects in Mumbai and Thane.",
    portfolio: [VR_PROJECTS.houseOfHiranandani, VR_PROJECTS.mauliHousing, VR_PROJECTS.dostiGreaterThane],
    extraFaqs: [
      {
        q: "Which Mumbai areas do you serve for VR tours?",
        a: "We serve real estate developers across Mumbai and the wider region, including Bandra, Worli, Andheri, Lower Parel, Powai, Borivali, and Thane.",
      },
      {
        q: "Can a VR tour help us sell to NRI buyers of Mumbai property?",
        a: "Yes. A VR tour is shared as a single web link, so overseas buyers can explore the project on any device without travelling, which shortens the gap between enquiry and a serious conversation.",
      },
    ],
  },
  {
    serviceSlug: "virtual-reality-tours",
    citySlug: "delhi-ncr",
    fullSlug: "virtual-reality-tours-delhi-ncr",
    cityName: "Delhi NCR",
    stateName: "Delhi / Haryana / UP",
    reraAuthority: "RERA (Delhi / Haryana / UP as applicable)",
    heroTitle: "Virtual Reality Tours in Delhi NCR",
    heroSubtitle: "Interactive 360° VR Property Tours for Gurugram, Noida, Greater Noida & Delhi Real Estate Projects",
    heroImage: "/images/services/virtual-reality-tours/1.jpg",
    ogImage: `${IMG}/province-d-olympia-noida.png`,
    introParagraph:
      "Delhi NCR is really several markets in one: Gurugram, Noida, Greater Noida, Ghaziabad, and Delhi each have their own buyers, price bands, and regulator. Projects here often launch in competition with several others on the same corridor, and brokers carry a lot of the sales effort. A VR tour gives channel partners a ready, interactive demo they can run on an iPad in every client meeting, and gives buyers across the region a link they can explore before a site visit. Our NCR work includes a plotted development in Noida.",
    areasServed: ["Gurugram", "Noida", "Greater Noida", "Ghaziabad", "Dwarka Expressway", "Golf Course Road"],
    metaTitle: "Virtual Reality Tours Delhi NCR | Alliance Media Labs",
    metaDescription:
      "Interactive 360° VR property tours in Delhi NCR, no headset needed. Serving Gurugram, Noida and Greater Noida. Get a free quote today.",
    keywords:
      "virtual reality tours Delhi NCR, VR tours Delhi real estate, 360 virtual tour Gurugram, VR property tour Noida, virtual reality real estate Delhi, interactive property tour Delhi NCR, VR walkthrough Gurugram, real estate VR company Delhi NCR, 3D virtual home tour Delhi, pre-launch VR tour Noida",
    portfolioIntro: "Showcasing our VR tour work for real estate projects in Delhi NCR, alongside samples from across India.",
    portfolio: [VR_PROJECTS.provinceDOlympia, VR_PROJECTS.houseOfHiranandani, VR_PROJECTS.shreeRadhaGopal],
    extraFaqs: [
      {
        q: "Can the VR tour be used by channel partners in Delhi NCR?",
        a: "Yes. We provide an offline-capable version that runs on an iPad or laptop, so brokers and channel partners can present the project in client meetings anywhere in NCR without depending on internet access.",
      },
      {
        q: "Do you cover projects across Gurugram, Noida, and Greater Noida?",
        a: "Yes. We build VR tours for developers across Delhi NCR, including Gurugram, Noida, Greater Noida, Ghaziabad, and Delhi, and align the content with the layouts and amenities approved for your project.",
      },
    ],
  },
  {
    serviceSlug: "virtual-reality-tours",
    citySlug: "bengaluru",
    fullSlug: "virtual-reality-tours-bengaluru",
    cityName: "Bengaluru",
    stateName: "Karnataka",
    reraAuthority: "K-RERA",
    heroTitle: "Virtual Reality Tours in Bengaluru",
    heroSubtitle: "Interactive 360° VR Property Tours for Bengaluru's Residential, Commercial and Corporate Projects",
    heroImage: "/images/services/virtual-reality-tours/1.jpg",
    ogImage: `${IMG}/gmc-confluence-bengaluru.png`,
    introParagraph:
      "Bengaluru's buyers are largely tech professionals and NRIs who are comfortable evaluating a purchase digitally, and its commercial market runs on office space that has to be understood before it is leased. That makes VR a natural fit here. We have built VR and virtual tours in Bengaluru for a residential project, a commercial office development, and corporate spaces, with landmark highlights that show how a project connects to tech parks, schools, and main roads.",
    areasServed: ["Whitefield", "Sarjapur Road", "Electronic City", "Hebbal", "Koramangala", "Yelahanka", "North Bengaluru"],
    metaTitle: "Virtual Reality Tours Bengaluru | Alliance Media Labs",
    metaDescription:
      "Interactive 360° VR property tours in Bengaluru, no headset needed. Serving Whitefield, Sarjapur Road and Electronic City. Get a free quote today.",
    keywords:
      "virtual reality tours Bengaluru, VR tours Bangalore real estate, 360 virtual tour Bengaluru, VR property tour Bangalore, virtual reality real estate Bengaluru, interactive property tour Bangalore, VR walkthrough Bengaluru, real estate VR company Bangalore, commercial VR tour Bengaluru, pre-launch VR tour Bangalore",
    portfolioIntro: "Showcasing our VR and virtual tour work for projects in Bengaluru.",
    portfolio: [VR_PROJECTS.gmcConfluence, VR_PROJECTS.featherliteSignature, VR_PROJECTS.sapExperienceCenter],
    extraFaqs: [
      {
        q: "Do you build VR tours for commercial and office spaces in Bengaluru?",
        a: "Yes. Alongside residential projects, we have built interactive tours for commercial office spaces and corporate experience centres in Bengaluru, including Matterport-based virtual tours.",
      },
      {
        q: "Can VR tours help with Bengaluru's NRI and relocating buyers?",
        a: "Yes. Buyers relocating from other cities or living abroad can explore layouts, amenities, and surroundings from a web link, which helps them shortlist a project before visiting.",
      },
    ],
  },
  {
    serviceSlug: "virtual-reality-tours",
    citySlug: "navi-mumbai",
    fullSlug: "virtual-reality-tours-navi-mumbai",
    cityName: "Navi Mumbai",
    stateName: "Maharashtra",
    reraAuthority: "MahaRERA",
    heroTitle: "Virtual Reality Tours in Navi Mumbai",
    heroSubtitle: "Interactive 360° VR Property Tours for Navi Mumbai's Growing Real Estate Market",
    heroImage: "/images/services/virtual-reality-tours/1.jpg",
    ogImage: "/images/services/virtual-reality-tours/1.jpg",
    introParagraph:
      "Navi Mumbai's growth is tied to the upcoming airport and the business hubs along Vashi, Nerul, and Kharghar, and many buyers here are weighing a move out of Mumbai city for more space. Those buyers need to understand both the home and its surroundings before they cross the harbour for a site visit. A VR tour lets them explore the layout and amenities remotely, with landmark highlights that put connectivity in context, so the visit is a confirmation instead of a first impression.",
    areasServed: ["Vashi", "Nerul", "Kharghar", "Panvel", "Airoli", "Seawoods", "Ulwe"],
    metaTitle: "Virtual Reality Tours Navi Mumbai | Alliance Media Labs",
    metaDescription:
      "Interactive 360° VR property tours in Navi Mumbai, no headset needed. Serving Vashi, Nerul and Kharghar. Get a free quote today.",
    keywords:
      "virtual reality tours Navi Mumbai, VR tours Navi Mumbai real estate, 360 virtual tour Navi Mumbai, VR property tour Kharghar, virtual reality real estate Navi Mumbai, interactive property tour Vashi, VR walkthrough Panvel, real estate VR company Navi Mumbai",
    portfolioIntro: PORTFOLIO_INTRO,
    portfolio: SAMPLE_PORTFOLIO,
    extraFaqs: [
      {
        q: "Can a VR tour help buyers who are deciding between Mumbai and Navi Mumbai?",
        a: "Yes. A VR tour lets buyers compare space, layout, and amenities remotely and see how the project connects to key landmarks, so they arrive at the site visit already informed.",
      },
    ],
  },
  {
    serviceSlug: "virtual-reality-tours",
    citySlug: "pune",
    fullSlug: "virtual-reality-tours-pune",
    cityName: "Pune",
    stateName: "Maharashtra",
    reraAuthority: "MahaRERA",
    heroTitle: "Virtual Reality Tours in Pune",
    heroSubtitle: "Interactive 360° VR Property Tours for Pune's IT-Corridor Real Estate Projects",
    heroImage: "/images/services/virtual-reality-tours/1.jpg",
    ogImage: "/images/services/virtual-reality-tours/1.jpg",
    introParagraph:
      "Pune's housing demand is led by its IT corridors, including Hinjewadi, Kharadi, and Baner, where many buyers are corporate professionals relocating from other cities or NRIs buying without a site visit. For these buyers, an interactive VR tour is a practical decision tool: they can walk through the home, check the amenities, and see the surroundings from wherever they are. We build tours that also run offline on an iPad, so your sales team can present them at the site office without depending on internet access.",
    areasServed: ["Hinjewadi", "Kharadi", "Baner", "Wakad", "Koregaon Park", "Viman Nagar", "Hadapsar"],
    metaTitle: "Virtual Reality Tours Pune | Alliance Media Labs",
    metaDescription:
      "Interactive 360° VR property tours in Pune, no headset needed. Serving Hinjewadi, Kharadi and Baner. Get a free quote today.",
    keywords:
      "virtual reality tours Pune, VR tours Pune real estate, 360 virtual tour Pune, VR property tour Hinjewadi, virtual reality real estate Pune, interactive property tour Kharadi, VR walkthrough Baner, real estate VR company Pune",
    portfolioIntro: PORTFOLIO_INTRO,
    portfolio: SAMPLE_PORTFOLIO,
    extraFaqs: [
      {
        q: "Can a VR tour help sell to NRI or relocating buyers in Pune?",
        a: "Yes, this is one of the strongest uses in Pune. Buyers who cannot visit in person can explore layout, amenities, and surroundings from a web link, and many shortlist a project before travelling.",
      },
    ],
  },
];
