import type { CityPageProject, CityServicePageData } from "../types";

// Real, verified 3D Walkthrough work — used as representative samples on
// city pages where we don't (yet) have a verified project in that specific
// city. Framed honestly as general portfolio work, not claimed as local.
const SAMPLE_PORTFOLIO: CityPageProject[] = [
  {
    title: "Etereo 1, Goa",
    location: "Goa",
    type: "Luxury Residential 3D Walkthrough",
    image: "/images/portfolio/3d-walkthrough/etereo-1-goa.png",
    description: "Cinematic 3D walkthrough showcasing luxury residential units with panoramic views.",
  },
  {
    title: "Aura Vantaje, Gurugram",
    location: "Gurugram",
    type: "Commercial 3D Walkthrough",
    image: "/images/portfolio/3d-walkthrough/aura-vantaje-gurugram.png",
    description: "AI-powered 3D walkthrough for a commercial project, bringing out the scale, layout, and usability of the spaces — delivered in a record 7 days.",
  },
  {
    title: "Briston, Neemrana",
    location: "Neemrana",
    type: "Residential 3D Walkthrough",
    image: "/images/portfolio/3d-walkthrough/briston-neemrana.png",
    description: "AI-powered teaser video showcasing Japanese-inspired apartments, architecture, and lifestyle.",
  },
];

const PORTFOLIO_INTRO = "A sample of our 3D walkthrough work for real estate developers across India.";

export const cities: CityServicePageData[] = [
  {
    serviceSlug: "3d-walkthrough-videos",
    citySlug: "mumbai",
    fullSlug: "3d-walkthrough-videos-mumbai",
    cityName: "Mumbai",
    stateName: "Maharashtra",
    reraAuthority: "MahaRERA",
    heroTitle: "3D Walkthrough Videos in Mumbai",
    heroSubtitle: "Professional 3D Architectural Walkthroughs & Virtual Tours for Mumbai's Premium Real Estate Projects",
    heroImage: "/images/city-services/3d-walkthrough-videos-mumbai/hero.jpg",
    ogImage: "/images/services/3d-walkthrough-videos/2.jpg",
    introParagraph:
      "Creating stunning 3D architectural walkthroughs for Mumbai's leading real estate developers. From Bandra to Worli, we bring your projects to life with photorealistic 3D visualizations.",
    areasServed: ["Bandra", "Worli", "Andheri", "Lower Parel", "Thane", "Navi Mumbai"],
    metaTitle: "3D Walkthrough Videos Mumbai | Real Estate Animation & Property Tours | Alliance Media Labs",
    metaDescription:
      "Professional 3D walkthrough video service in Mumbai for real estate developers. Photorealistic 3D property tours for Bandra, Worli, Andheri, Lower Parel, Thane, and Navi Mumbai projects. Get a free quote today.",
    keywords:
      "3D walkthrough videos Mumbai, 3D property tour Mumbai, architectural visualization Mumbai, real estate 3D animation Mumbai, walkthrough video Bandra, walkthrough video Worli, 3D walkthrough Lower Parel, property tour video Mumbai, real estate visualization Mumbai, photorealistic walkthrough Mumbai, 3D animation Mumbai real estate, pre-launch property video Mumbai",
    portfolioIntro: "Showcasing our premium 3D walkthrough work for leading real estate projects across Mumbai.",
    portfolio: [
      {
        title: "Lodha World Towers",
        location: "Lower Parel, Mumbai",
        type: "Luxury Residential 3D Tour",
        image: "/images/city-services/3d-walkthrough-videos-mumbai/lodha-world.jpg",
        description: "Premium residential towers with world-class amenities and Mumbai harbor views",
      },
      {
        title: "Palais Royale Worli",
        location: "Worli, Mumbai",
        type: "Ultra-Luxury 3D Walkthrough",
        image: "/images/city-services/3d-walkthrough-videos-mumbai/palais-royale.jpg",
        description: "India's most expensive residential project with unparalleled luxury features",
      },
      {
        title: "Phoenix Mills Commercial",
        location: "Kurla, Mumbai",
        type: "Commercial 3D Visualization",
        image: "/images/city-services/3d-walkthrough-videos-mumbai/phoenix-mills.jpg",
        description: "State-of-the-art commercial complex with premium office spaces",
      },
    ],
    extraFaqs: [
      {
        q: "Which Mumbai areas does Alliance Media Labs serve for 3D walkthrough videos?",
        a: "Alliance Media Labs serves real estate developers across all Mumbai areas including Bandra, Worli, Andheri, Juhu, Lower Parel, Dadar, Thane, Navi Mumbai, Kharghar, Panvel, and all major micro-markets.",
      },
      {
        q: "How much does a 3D walkthrough video cost in Mumbai?",
        a: "3D walkthrough video costs in Mumbai range from ₹50,000 for a basic residential unit walkthrough to ₹5,00,000+ for a comprehensive luxury project with multiple typologies, amenity areas, and master plan flyover. Contact us for a project-specific quote.",
      },
      {
        q: "How long does 3D walkthrough video production take in Mumbai?",
        a: "Standard production takes 2–4 weeks for residential projects. Larger commercial or township projects may take 4–8 weeks. We offer priority production schedules for Mumbai project launches.",
      },
    ],
  },
  {
    serviceSlug: "3d-walkthrough-videos",
    citySlug: "delhi",
    fullSlug: "3d-walkthrough-videos-delhi",
    cityName: "Delhi NCR",
    stateName: "Delhi / Haryana / UP",
    reraAuthority: "RERA (Delhi / Haryana / UP as applicable)",
    heroTitle: "3D Walkthrough Videos in Delhi NCR",
    heroSubtitle: "Professional 3D Architectural Walkthroughs for Delhi, Gurgaon, Noida & Greater Noida Real Estate Projects",
    heroImage: "/images/city-services/3d-walkthrough-videos-delhi/hero.jpg",
    ogImage: "/images/services/3d-walkthrough-videos/3.jpg",
    introParagraph:
      "Serving Delhi, Gurgaon, Noida, and Greater Noida with premium 3D architectural visualization services. From luxury residences to commercial complexes, we create immersive experiences for the NCR market.",
    areasServed: ["Gurugram", "Noida", "Greater Noida", "Ghaziabad", "Dwarka Expressway", "Golf Course Road"],
    metaTitle: "3D Walkthrough Videos Delhi NCR | Real Estate Animation & Property Tours | Alliance Media Labs",
    metaDescription:
      "Professional 3D walkthrough video service in Delhi NCR for real estate developers. Photorealistic 3D property tours for Gurugram, Noida, Ghaziabad, Dwarka Expressway, and Golf Course Road projects.",
    keywords:
      "3D walkthrough videos Delhi NCR, 3D property tour Delhi, architectural visualization Delhi, real estate 3D animation Delhi NCR, walkthrough video Gurugram, walkthrough video Noida, 3D walkthrough Dwarka Expressway, property tour video Delhi NCR, real estate visualization Delhi, photorealistic walkthrough Delhi NCR, 3D animation Delhi real estate, Gurgaon 3D walkthrough",
    portfolioIntro: "Showcasing our premium 3D walkthrough work for leading real estate projects across Delhi NCR.",
    portfolio: [
      {
        title: "DLF Cyber City",
        location: "Gurgaon, Delhi NCR",
        type: "Commercial 3D Walkthrough",
        image: "/images/city-services/3d-walkthrough-videos-delhi/dlf-cyber.jpg",
        description: "India's largest private sector developed IT park with world-class infrastructure",
      },
      {
        title: "Lodha Altamount",
        location: "New Delhi",
        type: "Luxury Residential 3D Tour",
        image: "/images/city-services/3d-walkthrough-videos-delhi/lodha-altamount.jpg",
        description: "Ultra-luxury residential project in the heart of New Delhi",
      },
      {
        title: "Jaypee Greens Sports City",
        location: "Greater Noida",
        type: "Mixed-Use 3D Visualization",
        image: "/images/city-services/3d-walkthrough-videos-delhi/jaypee-sports.jpg",
        description: "Integrated township with residential, commercial and sports facilities",
      },
    ],
    extraFaqs: [
      {
        q: "Which Delhi NCR areas does Alliance Media Labs serve for 3D walkthrough videos?",
        a: "Alliance Media Labs serves real estate developers across Delhi NCR including Gurugram, Noida, Greater Noida, Ghaziabad, Dwarka, Dwarka Expressway, Golf Course Road, Sohna Road, Sector 150, and all major micro-markets.",
      },
      {
        q: "How much does a 3D walkthrough video cost in Delhi NCR?",
        a: "3D walkthrough video pricing in Delhi NCR starts from ₹50,000 for basic residential walkthroughs and goes up to ₹5,00,000+ for comprehensive luxury projects. Contact Alliance Media Labs for a customised quote.",
      },
      {
        q: "How do 3D walkthrough videos help Delhi NCR real estate projects?",
        a: "Delhi NCR has one of India's most competitive real estate markets. 3D walkthrough videos help developers stand out in pre-launch campaigns, reach buyers digitally across national portals, and present under-construction luxury projects with confidence.",
      },
      {
        q: "Can Alliance Media Labs create 3D walkthrough videos for Gurugram luxury projects?",
        a: "Yes. Alliance Media Labs specialises in high-end 3D walkthrough video production for Gurugram luxury projects on Golf Course Road, DLF sectors, Dwarka Expressway, and Sohna Road — with cinematic quality matching the premium positioning of these projects.",
      },
    ],
  },
  {
    serviceSlug: "3d-walkthrough-videos",
    citySlug: "bangalore",
    fullSlug: "3d-walkthrough-videos-bangalore",
    cityName: "Bangalore",
    stateName: "Karnataka",
    reraAuthority: "K-RERA",
    heroTitle: "3D Walkthrough Videos in Bangalore",
    heroSubtitle: "Professional 3D Architectural Walkthroughs for Bangalore's IT Parks, Residential & Commercial Projects",
    heroImage: "/images/city-services/3d-walkthrough-videos-bangalore/hero.jpg",
    ogImage: "/images/services/3d-walkthrough-videos/1.jpg",
    introParagraph:
      "Serving India's Silicon Valley with cutting-edge 3D architectural visualization services. From IT campuses to luxury residences, we create immersive experiences for Bangalore's dynamic market.",
    areasServed: ["Whitefield", "Sarjapur", "Hebbal", "Electronic City", "North Bangalore"],
    metaTitle: "3D Walkthrough Videos Bangalore | Real Estate Animation & Property Tours | Alliance Media Labs",
    metaDescription:
      "Professional 3D walkthrough video service in Bangalore for real estate developers. Photorealistic 3D property tours for Whitefield, Sarjapur, Electronic City, Hebbal, and North Bangalore. Get a free quote today.",
    keywords:
      "3D walkthrough videos Bangalore, 3D property tour Bangalore, architectural visualization Bangalore, real estate 3D animation Bangalore, walkthrough video Whitefield, walkthrough video Sarjapur, 3D walkthrough Hebbal, property tour video Bangalore, real estate visualization Bangalore, photorealistic walkthrough Bangalore, 3D animation Bangalore real estate",
    portfolioIntro: "Showcasing our premium 3D walkthrough work for leading real estate projects across Bangalore.",
    portfolio: [
      {
        title: "Manyata Tech Park",
        location: "Nagavara, Bangalore",
        type: "IT Campus 3D Walkthrough",
        image: "/images/city-services/3d-walkthrough-videos-bangalore/manyata-tech.jpg",
        description: "India's largest IT SEZ with world-class infrastructure and amenities",
      },
      {
        title: "Prestige Lakeside Habitat",
        location: "Varthur, Bangalore",
        type: "Luxury Residential 3D Tour",
        image: "/images/city-services/3d-walkthrough-videos-bangalore/prestige-lakeside.jpg",
        description: "Premium lakeside residential project with luxury amenities",
      },
      {
        title: "Forum Mall Koramangala",
        location: "Koramangala, Bangalore",
        type: "Retail 3D Visualization",
        image: "/images/city-services/3d-walkthrough-videos-bangalore/forum-mall.jpg",
        description: "Premier shopping and entertainment destination in South Bangalore",
      },
    ],
    extraFaqs: [
      {
        q: "Which Bangalore areas does Alliance Media Labs serve for 3D walkthrough videos?",
        a: "Alliance Media Labs serves real estate developers across Bangalore including Whitefield, Sarjapur Road, Electronic City, Hebbal, Devanahalli, Marathahalli, Yelahanka, Kanakapura Road, and all major micro-markets.",
      },
      {
        q: "How much does a 3D walkthrough video cost in Bangalore?",
        a: "3D walkthrough video costs in Bangalore range from ₹50,000 for a basic residential walkthrough to ₹5,00,000+ for large township projects. Contact Alliance Media Labs for a detailed project quote.",
      },
      {
        q: "How do 3D walkthrough videos help Bangalore real estate marketing?",
        a: "In Bangalore where IT professionals are key buyers, 3D walkthrough videos enable digital-first property marketing, reach NRI and out-of-city buyers online, and perform strongly across LinkedIn, YouTube, and housing portals.",
      },
      {
        q: "How long does it take to create a 3D walkthrough video in Bangalore?",
        a: "Standard production takes 2–4 weeks for residential projects and 4–8 weeks for large commercial or township projects. We work remotely with Bangalore developers and deliver on defined schedules.",
      },
    ],
  },
  {
    serviceSlug: "3d-walkthrough-videos",
    citySlug: "navi-mumbai",
    fullSlug: "3d-walkthrough-videos-navi-mumbai",
    cityName: "Navi Mumbai",
    stateName: "Maharashtra",
    reraAuthority: "MahaRERA",
    heroTitle: "3D Walkthrough Videos in Navi Mumbai",
    heroSubtitle: "Professional 3D Architectural Walkthroughs & Virtual Tours for Navi Mumbai's Growing Real Estate Market",
    heroImage: "/images/services/3d-walkthrough-videos/3.jpg",
    ogImage: "/images/services/3d-walkthrough-videos/3.jpg",
    introParagraph:
      "Navi Mumbai's real estate story is being rewritten by the upcoming Navi Mumbai International Airport and the rapid growth of business hubs along Vashi, Nerul, and Kharghar. Developers here are increasingly selling to buyers who want more space for their budget than Mumbai city offers — which means the walkthrough video has to work harder to justify a move across the harbour. We build 3D walkthroughs that highlight connectivity, layout efficiency, and lifestyle amenities side by side, so buyers can see exactly what they're trading up to.",
    areasServed: ["Vashi", "Nerul", "Kharghar", "Panvel", "Airoli", "Seawoods", "Kopar Khairane"],
    metaTitle: "3D Walkthrough Videos Navi Mumbai | Real Estate Animation & Property Tours | Alliance Media Labs",
    metaDescription:
      "Professional 3D walkthrough video service in Navi Mumbai for real estate developers. Photorealistic 3D property tours for Vashi, Nerul, Kharghar, Panvel, and Airoli projects. Get a free quote today.",
    keywords:
      "3D walkthrough videos Navi Mumbai, 3D property tour Navi Mumbai, architectural visualization Navi Mumbai, real estate 3D animation Navi Mumbai, walkthrough video Vashi, walkthrough video Kharghar, 3D walkthrough Panvel, property tour video Navi Mumbai, real estate visualization Navi Mumbai, photorealistic walkthrough Navi Mumbai",
    portfolioIntro: PORTFOLIO_INTRO,
    portfolio: SAMPLE_PORTFOLIO,
    extraFaqs: [
      {
        q: "Do you cover MahaRERA-compliant project documentation in Navi Mumbai walkthroughs?",
        a: "Yes. Our 3D walkthrough videos for Navi Mumbai projects are produced to align with MahaRERA disclosure norms — accurately representing layouts, carpet area, and amenities as approved in your project plans.",
      },
    ],
  },
  {
    serviceSlug: "3d-walkthrough-videos",
    citySlug: "pune",
    fullSlug: "3d-walkthrough-videos-pune",
    cityName: "Pune",
    stateName: "Maharashtra",
    reraAuthority: "MahaRERA",
    heroTitle: "3D Walkthrough Videos in Pune",
    heroSubtitle: "Professional 3D Architectural Walkthroughs & Virtual Tours for Pune's IT-Corridor Real Estate Projects",
    heroImage: "/images/services/3d-walkthrough-videos/4.jpg",
    ogImage: "/images/services/3d-walkthrough-videos/4.jpg",
    introParagraph:
      "Pune's residential demand is driven heavily by its IT corridors — Hinjewadi, Kharadi, and Baner — where a large share of buyers are corporate professionals relocating from other cities, or NRIs buying without a site visit. That makes a strong 3D walkthrough video less of a marketing add-on and more of a decision-making tool. We build walkthroughs that clearly communicate commute distance to tech parks, clubhouse and amenity quality, and unit layouts, so out-of-town buyers can commit with confidence.",
    areasServed: ["Hinjewadi", "Kharadi", "Baner", "Wakad", "Koregaon Park", "Viman Nagar", "Hadapsar"],
    metaTitle: "3D Walkthrough Videos Pune | Real Estate Animation & Property Tours | Alliance Media Labs",
    metaDescription:
      "Professional 3D walkthrough video service in Pune for real estate developers. Photorealistic 3D property tours for Hinjewadi, Kharadi, Baner, Wakad, and Koregaon Park projects. Get a free quote today.",
    keywords:
      "3D walkthrough videos Pune, 3D property tour Pune, architectural visualization Pune, real estate 3D animation Pune, walkthrough video Hinjewadi, walkthrough video Kharadi, 3D walkthrough Baner, property tour video Pune, real estate visualization Pune, photorealistic walkthrough Pune",
    portfolioIntro: PORTFOLIO_INTRO,
    portfolio: SAMPLE_PORTFOLIO,
    extraFaqs: [
      {
        q: "Can a 3D walkthrough video help sell to NRI or outstation buyers in Pune?",
        a: "Yes — this is one of the biggest use cases we see in Pune specifically. A detailed 3D walkthrough lets corporate and NRI buyers evaluate layout, amenities, and finish quality remotely, cutting down on the need for an in-person site visit before booking.",
      },
    ],
  },
  {
    serviceSlug: "3d-walkthrough-videos",
    citySlug: "jaipur",
    fullSlug: "3d-walkthrough-videos-jaipur",
    cityName: "Jaipur",
    stateName: "Rajasthan",
    reraAuthority: "RajRERA",
    heroTitle: "3D Walkthrough Videos in Jaipur",
    heroSubtitle: "Professional 3D Architectural Walkthroughs & Virtual Tours for Jaipur's Expanding Real Estate Market",
    heroImage: "/images/services/3d-walkthrough-videos/5.jpg",
    ogImage: "/images/services/3d-walkthrough-videos/5.jpg",
    introParagraph:
      "Jaipur's residential growth has pushed well beyond the walled city into Vaishali Nagar, Mansarovar, and the Ajmer Road and Tonk Road corridors, with Jaipur Metro's expansion opening up new peripheral markets. Many buyers here are Rajasthani families settled outside the state, or NRIs, who rely entirely on video content before booking a unit. Our 3D walkthroughs are built to carry that weight — accurate layouts, honest material representation, and a narrative that helps a buyer who may never visit the site until possession trust what they're paying for.",
    areasServed: ["Vaishali Nagar", "Mansarovar", "C-Scheme", "Jagatpura", "Ajmer Road", "Tonk Road"],
    metaTitle: "3D Walkthrough Videos Jaipur | Real Estate Animation & Property Tours | Alliance Media Labs",
    metaDescription:
      "Professional 3D walkthrough video service in Jaipur for real estate developers. Photorealistic 3D property tours for Vaishali Nagar, Mansarovar, Jagatpura, and Tonk Road projects. Get a free quote today.",
    keywords:
      "3D walkthrough videos Jaipur, 3D property tour Jaipur, architectural visualization Jaipur, real estate 3D animation Jaipur, walkthrough video Vaishali Nagar, walkthrough video Mansarovar, 3D walkthrough Jagatpura, property tour video Jaipur, real estate visualization Jaipur, photorealistic walkthrough Jaipur",
    portfolioIntro: PORTFOLIO_INTRO,
    portfolio: SAMPLE_PORTFOLIO,
    extraFaqs: [
      {
        q: "Is a 3D walkthrough video useful for selling to Rajasthani buyers settled outside Jaipur?",
        a: "Very much so. A large share of Jaipur's residential demand comes from Rajasthani families based in other Indian cities or abroad. A detailed 3D walkthrough lets them evaluate a project the same way a local site-visit buyer would, which shortens the sales cycle considerably.",
      },
    ],
  },
  {
    serviceSlug: "3d-walkthrough-videos",
    citySlug: "patna",
    fullSlug: "3d-walkthrough-videos-patna",
    cityName: "Patna",
    stateName: "Bihar",
    reraAuthority: "RERA Bihar",
    heroTitle: "3D Walkthrough Videos in Patna",
    heroSubtitle: "Professional 3D Architectural Walkthroughs & Virtual Tours for Patna's Emerging Real Estate Market",
    heroImage: "/images/services/3d-walkthrough-videos/6.jpg",
    ogImage: "/images/services/3d-walkthrough-videos/6.jpg",
    introParagraph:
      "Patna's organised residential market is still young compared to metro cities, which means a well-produced 3D walkthrough video does more to set a project apart here than almost anywhere else — buyers evaluating a branded apartment project for the first time have few comparable visuals to judge it against. A large share of Patna's serious buyers are also based outside Bihar — in Delhi NCR, Bengaluru, or the Gulf — and decide largely on video. We build walkthroughs that establish trust in construction quality and amenities as clearly as a site visit would.",
    areasServed: ["Boring Road", "Kankarbagh", "Patliputra Colony", "Rajendra Nagar", "Bailey Road", "Danapur"],
    metaTitle: "3D Walkthrough Videos Patna | Real Estate Animation & Property Tours | Alliance Media Labs",
    metaDescription:
      "Professional 3D walkthrough video service in Patna for real estate developers. Photorealistic 3D property tours for Boring Road, Kankarbagh, Bailey Road, and Danapur projects. Get a free quote today.",
    keywords:
      "3D walkthrough videos Patna, 3D property tour Patna, architectural visualization Patna, real estate 3D animation Patna, walkthrough video Boring Road, walkthrough video Kankarbagh, 3D walkthrough Bailey Road, property tour video Patna, real estate visualization Patna, photorealistic walkthrough Patna",
    portfolioIntro: PORTFOLIO_INTRO,
    portfolio: SAMPLE_PORTFOLIO,
    extraFaqs: [
      {
        q: "How does a 3D walkthrough video help Patna developers reach outstation and Gulf-based buyers?",
        a: "A large share of Patna's apartment buyers work outside Bihar. A detailed 3D walkthrough lets them evaluate layout, amenities, and construction quality remotely and share it easily over WhatsApp with family making the on-the-ground decision.",
      },
    ],
  },
  {
    serviceSlug: "3d-walkthrough-videos",
    citySlug: "kundli",
    fullSlug: "3d-walkthrough-videos-kundli",
    cityName: "Kundli",
    stateName: "Haryana",
    reraAuthority: "HRERA Panchkula",
    heroTitle: "3D Walkthrough Videos in Kundli",
    heroSubtitle: "Professional 3D Architectural Walkthroughs & Virtual Tours for Kundli & the Delhi-Sonipat Border Corridor",
    heroImage: "/images/services/3d-walkthrough-videos/7.jpg",
    ogImage: "/images/services/3d-walkthrough-videos/7.jpg",
    introParagraph:
      "Kundli sits right on the Delhi-Haryana border along the KMP Expressway, and its residential growth is driven almost entirely by Delhi buyers priced out of the capital looking for affordable and mid-segment housing with an easy commute. That buyer is comparing your project directly against options across the border in Delhi and Narela, so the walkthrough video needs to make connectivity and value-for-money obvious in the first 30 seconds. We build 3D walkthroughs for Kundli projects with that comparison front of mind.",
    areasServed: ["KMP Expressway corridor", "Sonipat border", "Rai", "Barhi", "Kundli Industrial Area"],
    metaTitle: "3D Walkthrough Videos Kundli | Real Estate Animation & Property Tours | Alliance Media Labs",
    metaDescription:
      "Professional 3D walkthrough video service in Kundli for real estate developers. Photorealistic 3D property tours for the KMP Expressway, Sonipat border, and Rai-Barhi corridor projects. Get a free quote today.",
    keywords:
      "3D walkthrough videos Kundli, 3D property tour Kundli, architectural visualization Kundli, real estate 3D animation Kundli, walkthrough video Sonipat, walkthrough video KMP Expressway, 3D walkthrough Rai Haryana, property tour video Kundli, real estate visualization Sonipat",
    portfolioIntro: PORTFOLIO_INTRO,
    portfolio: SAMPLE_PORTFOLIO,
    extraFaqs: [
      {
        q: "Do you produce HRERA-compliant 3D walkthrough videos for Kundli and Sonipat projects?",
        a: "Yes. For projects registered under Haryana RERA (HRERA Panchkula), our walkthroughs accurately reflect approved layouts and carpet areas, so the video can be used confidently in your RERA-compliant marketing material.",
      },
    ],
  },
];
