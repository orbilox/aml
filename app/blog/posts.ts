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
