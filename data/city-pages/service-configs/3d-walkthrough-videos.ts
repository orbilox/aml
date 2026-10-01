import type { CityServiceTemplateConfig } from "../types";

export const config: CityServiceTemplateConfig = {
  serviceSlug: "3d-walkthrough-videos",
  serviceLabel: "3D Walkthrough Videos",
  serviceHref: "/services/3d-walkthrough-video-company-india",
  serviceIcon: "ri-building-4-line",
  legacyCityPages: [],
  services: (cityName) => [
    { icon: "ri-building-line", title: "Residential 3D Tours", description: `Immersive walkthroughs for ${cityName}'s premium residential projects` },
    { icon: "ri-community-line", title: "Commercial Visualizations", description: `Professional 3D tours for ${cityName}'s business districts and offices` },
    { icon: "ri-home-smile-line", title: "Luxury Property Tours", description: `High-end 3D experiences for ${cityName}'s most exclusive properties` },
    { icon: "ri-camera-3-line", title: "Interactive Presentations", description: "Engaging 3D walkthroughs with interactive hotspots and information" },
  ],
  whyUsItems: (cityName) => [
    { title: "High-Quality Real Estate Walkthrough Videos", description: "We deliver photorealistic 3D walkthrough videos with highly detailed interiors and exteriors. Our visuals capture materials, lighting, landscaping, and spatial flow to create a realistic preview of the final project." },
    { title: "Cinematic Camera Movement & Smooth Transitions", description: "Our walkthroughs feature cinematic camera paths, smooth transitions, and dynamic angles that enhance storytelling. This results in engaging videos that hold viewer attention and elevate the overall presentation quality." },
    { title: "Architectural Visualization & Cinematic Storytelling", description: "We combine architectural visualization with cinematic storytelling to communicate your project's vision clearly. Ideal for marketing campaigns, sales galleries, investor presentations, and digital promotions." },
    { title: "Perfect for Marketing, Sales & Investor Presentations", description: "Our 3D walkthrough videos help developers and marketers explain layouts, highlight key amenities, and create emotional engagement — leading to stronger buyer interest and faster conversions." },
    { title: `Fast Turnaround & ${cityName}-Focused Expertise`, description: `With local ${cityName} market awareness, we understand buyer expectations and real estate launch timelines in the region. We ensure fast, seamless delivery aligned with your promotional schedule.` },
    { title: "Seamless Delivery for Launches & Promotional Campaigns", description: "Our walkthrough videos are optimized for websites, social media, exhibitions, and large displays — making them perfect for real estate launches, roadshows, and digital marketing campaigns." },
  ],
  processSteps: [
    { n: 1, t: "Consultation & Planning", d: "Understanding your vision, target audience, and key selling points to create the perfect narrative." },
    { n: 2, t: "3D Modeling & Setup", d: "Creating detailed 3D models with accurate materials, lighting, and environmental elements." },
    { n: 3, t: "Animation & Rendering", d: "Crafting smooth camera movements and rendering high-quality frames with photorealistic detail." },
    { n: 4, t: "Post-Production", d: "Professional editing, color grading, audio integration, and final delivery in multiple formats." },
  ],
  baseFaqs: (cityName) => [
    { q: "What are 3D walkthrough videos?", a: "3D walkthrough videos are animated visual tours that allow viewers to experience a property or architectural design in a realistic and immersive way before construction or project completion." },
    { q: "Who should use 3D walkthrough videos?", a: "3D walkthrough videos are widely used by real estate developers, architects, builders, and marketing teams to present residential, commercial, and mixed-use projects effectively." },
    { q: "How do 3D walkthrough videos help real estate marketing?", a: "These videos help buyers clearly understand layouts, space flow, and amenities, increasing engagement at sales offices, online listings, digital campaigns, and property launch events." },
    { q: "How long does it take to create a 3D walkthrough video?", a: "The timeline depends on project size, complexity, and level of detailing. Most 3D walkthrough videos are delivered within a defined project schedule after design finalization." },
    { q: `Do you provide 3D walkthrough video services in ${cityName}?`, a: `Yes, we provide professional 3D walkthrough video services in ${cityName} for real estate, architectural visualization, and property marketing projects.` },
  ],
  formServiceOptions: [
    { value: "residential-3d-tour", label: "Residential 3D Tour" },
    { value: "commercial-walkthrough", label: "Commercial Walkthrough" },
    { value: "luxury-property-tour", label: "Luxury Property Tour" },
    { value: "interactive-presentation", label: "Interactive Presentation" },
  ],
};
