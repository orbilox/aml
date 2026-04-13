export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
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
    date: "March 15, 2025",
    readTime: "8 min read",
    author: "Alliance Media Labs Team",
    thumbnail: "/images/services/3d-walkthrough-videos/1.jpg",
    tags: ["3D Walkthrough", "Real Estate", "Visualization", "Marketing"],
  },
  {
    slug: "architectural-scale-models-india-real-estate",
    title: "The Silent Salesperson: How Architectural Scale Models Close Deals That Digital Can't",
    excerpt:
      "In an era of VR tours and CGI renders, why do India's top real estate developers still commission handcrafted architectural scale models? The answer lies in neuroscience, trust, and one undeniable truth about how buyers make decisions.",
    category: "Real Estate Marketing",
    date: "April 13, 2025",
    readTime: "9 min read",
    author: "Alliance Media Labs Team",
    thumbnail: "/images/services/architectural-scale-models/1.jpg",
    tags: ["Scale Models", "Architectural Models", "Real Estate", "Sales Strategy", "Pre-Launch"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
