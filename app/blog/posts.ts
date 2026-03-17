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
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
