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
