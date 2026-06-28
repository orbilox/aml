export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateISO: string; // ISO 8601 for schema.org Article datePublished
  readTime: string;
  author: string;
  thumbnail: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "premium-real-estate-marketing-differentiation-india",
    title: "Why Your Premium Project Looks Like Every Other Listing Online",
    excerpt:
      "You spent crores on premium finishes, larger floor plates, and better amenities — then put up the same generic renders and stock-style photos as every budget project in your market. Here's why your premium positioning dies in the first three seconds of a scroll, and the exact fix.",
    category: "Real Estate Marketing",
    date: "June 28, 2026",
    dateISO: "2026-06-28",
    readTime: "9 min read",
    author: "Alliance Media Labs Team",
    thumbnail: "/images/home/3.jpg",
    tags: ["Premium Real Estate Marketing", "Interior Cinematic Walkthrough", "Real Estate Branding", "Luxury Property Marketing", "Real Estate Developer"],
  },
  {
    slug: "sell-property-to-nri-buyers-india",
    title: "How to Sell Property to NRI Buyers Who Can't Visit India: The Remote Buyer Visualization Playbook",
    excerpt:
      "NRI buyers invest billions in Indian real estate every year — yet most can't fly in to inspect a property before booking. Here's the exact visualization stack top developers use to close high-ticket NRI sales remotely, without a single site visit.",
    category: "Real Estate Marketing",
    date: "June 22, 2026",
    dateISO: "2026-06-22",
    readTime: "10 min read",
    author: "Alliance Media Labs Team",
    thumbnail: "/images/services/3d-walkthrough-videos/1.jpg",
    tags: ["NRI Real Estate", "Remote Property Buyers", "NRI Marketing India", "3D Walkthrough", "Virtual Property Tours"],
  },
  {
    slug: "construction-delay-buyer-trust-india",
    title: "Construction Delays Are Killing Buyer Trust: How Indian Developers Rebuild Confidence With Video Updates",
    excerpt:
      "Construction delays are the single biggest fear driving real estate buyer anxiety in India — and it's the silence between booking and possession, not the delay itself, that turns a hesitant buyer into a cancellation. Here's the exact video-update framework developers use to protect their sales pipeline.",
    category: "Real Estate Marketing",
    date: "June 13, 2026",
    dateISO: "2026-06-13",
    readTime: "9 min read",
    author: "Alliance Media Labs Team",
    thumbnail: "/images/portfolio/10.png",
    tags: ["Construction Delay", "Buyer Trust", "Construction Update Video", "RERA Compliance", "Real Estate Developer"],
  },
  {
    slug: "architectural-scale-model-price-india-2026",
    title: "Architectural Scale Model Price in India 2026: Complete Cost Guide for Real Estate Developers",
    excerpt:
      "What does an architectural scale model actually cost in India? This complete pricing guide breaks down scale model charges by project type, size, and finish level — so real estate developers and project heads can budget accurately and compare vendor quotes with confidence.",
    category: "Real Estate Marketing",
    date: "June 2, 2026",
    dateISO: "2026-06-02",
    readTime: "7 min read",
    author: "Alliance Media Labs Team",
    thumbnail: "/images/services/architectural-scale-models/1.jpg",
    tags: ["Architectural Scale Model Price", "Scale Model Cost India", "Architectural Model Making Charges", "Scale Model Price", "Real Estate Developer"],
  },
  {
    slug: "best-architectural-scale-model-company-india",
    title: "Best Architectural Scale Model Company in India: How to Choose the Right Partner (2026)",
    excerpt:
      "A practical B2B guide for real estate developers and project heads evaluating architectural scale model companies in India. Learn the seven criteria that separate the best architectural model makers from average vendors — and why the right partner directly impacts your sales office conversion.",
    category: "Real Estate Marketing",
    date: "May 25, 2026",
    dateISO: "2026-05-25",
    readTime: "7 min read",
    author: "Alliance Media Labs Team",
    thumbnail: "/images/services/architectural-scale-models/1.jpg",
    tags: ["Architectural Scale Model Company", "Best Scale Model Maker", "Architectural Model Maker India", "Scale Model Company", "B2B Real Estate"],
  },
  {
    slug: "real-estate-marketing-video-types-india",
    title: "7 Types of Real Estate Marketing Videos Every Indian Developer Should Use in 2026",
    excerpt:
      "A complete guide to real estate video production in India — from 3D walkthroughs and drone shoots to VR tours and construction update videos. Learn which property video types drive the most leads, and how to build the right mix for your project launch.",
    category: "Real Estate Marketing",
    date: "May 18, 2026",
    dateISO: "2026-05-18",
    readTime: "11 min read",
    author: "Alliance Media Labs Team",
    thumbnail: "/images/services/3d-walkthrough-videos/1.jpg",
    tags: ["Real Estate Marketing Videos", "Property Video Production", "Real Estate Video", "3D Walkthrough", "Drone Shoots", "VR Tours"],
  },
  {
    slug: "3d-walkthrough-video-service",
    title: "The Ultimate Guide to 3D Walkthrough Video Services for Real Estate",
    excerpt:
      "Discover how professional 3D walkthrough video services are transforming real estate marketing in India. Learn about the production process, costs, and why top developers choose 3D walkthroughs to sell faster.",
    category: "Real Estate Marketing",
    date: "March 15, 2026",
    dateISO: "2026-03-15",
    readTime: "8 min read",
    author: "Alliance Media Labs Team",
    thumbnail: "/images/services/3d-walkthrough-videos/1.jpg",
    tags: ["3D Walkthrough", "Real Estate", "Visualization", "Marketing"],
  },
  {
    slug: "3d-house-rendering-guide-india",
    title: "3D House Rendering in India: The Complete Guide for Real Estate Developers (2026)",
    excerpt:
      "Everything Indian real estate developers need to know about 3D house rendering — types of renders, how to choose between 3D rendering companies, costs, timelines, AI rendering, and when to use a 3D floor plan vs a walkthrough video.",
    category: "Real Estate Marketing",
    date: "April 20, 2026",
    dateISO: "2026-04-20",
    readTime: "9 min read",
    author: "Alliance Media Labs Team",
    thumbnail: "/images/services/3d-renders-isometrics/1.jpg",
    tags: ["3D House Rendering", "Architectural Rendering", "3D Floor Plan", "3D Renders", "Real Estate Visualization"],
  },
  {
    slug: "real-estate-drone-photography-india",
    title: "Real Estate Drone Photography in India: The Complete Guide to Aerial Videography (2026)",
    excerpt:
      "Everything real estate developers need to know about hiring a drone photography company in India — aerial shot types, 4K drone video production, DGCA licensing, location AV shoots, construction aerial monitoring, and how to get cinematic footage that sells.",
    category: "Real Estate Marketing",
    date: "May 5, 2026",
    dateISO: "2026-05-05",
    readTime: "9 min read",
    author: "Alliance Media Labs Team",
    thumbnail: "/images/services/drone-shoots/1.jpg",
    tags: ["Drone Photography", "Aerial Videography", "Real Estate Video", "Location AV", "DGCA"],
  },
  {
    slug: "scale-model-making-india-complete-guide",
    title: "Scale Model Making in India: The Complete Guide for Real Estate Developers (2026)",
    excerpt:
      "Everything real estate developers need to know about architectural scale models in India — types, scale ratios, materials, how to choose a scale model making company, costs, and why a physical miniature model still outsells every digital alternative.",
    category: "Real Estate Marketing",
    date: "May 8, 2026",
    dateISO: "2026-05-08",
    readTime: "12 min read",
    author: "Alliance Media Labs Team",
    thumbnail: "/images/services/architectural-scale-models/1.jpg",
    tags: ["Scale Models", "Miniature Model Making", "3D Scale Model Maker", "Scale Model Making Company", "Architectural Scale Models"],
  },
  {
    slug: "architectural-scale-models-india-real-estate",
    title: "The Silent Salesperson: How Architectural Scale Models Close Deals That Digital Can't",
    excerpt:
      "In an era of VR tours and CGI renders, why do India's top real estate developers still commission handcrafted architectural scale models? The answer lies in neuroscience, trust, and one undeniable truth about how buyers make decisions.",
    category: "Real Estate Marketing",
    date: "April 13, 2026",
    dateISO: "2026-04-13",
    readTime: "9 min read",
    author: "Alliance Media Labs Team",
    thumbnail: "/images/services/architectural-scale-models/1.jpg",
    tags: ["Scale Models", "Architectural Models", "Real Estate", "Sales Strategy", "Pre-Launch"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
