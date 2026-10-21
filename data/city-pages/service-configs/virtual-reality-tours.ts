import type { CityServiceTemplateConfig } from "../types";

export const config: CityServiceTemplateConfig = {
  serviceSlug: "virtual-reality-tours",
  serviceLabel: "Virtual Reality Tours",
  serviceHref: "/services/virtual-reality-tours",
  serviceIcon: "ri-eye-line",
  legacyCityPages: [],
  services: (cityName) => [
    { icon: "ri-building-line", title: "Residential VR Tours", description: `Interactive 360° tours of ${cityName}'s apartments, villas, and plotted developments` },
    { icon: "ri-community-line", title: "Commercial VR Tours", description: `Immersive tours of offices, retail, and mixed-use projects in ${cityName}` },
    { icon: "ri-home-smile-line", title: "Pre-Launch VR Experiences", description: `Let ${cityName} buyers explore the project before construction begins` },
    { icon: "ri-ipad-line", title: "Sales Office & iPad Demos", description: "Offline-ready VR tours for sales galleries, channel partners, and site-visit meetings" },
  ],
  whyUsItems: (cityName) => [
    { title: "Interactive 360° Experiences, Not Just Video", description: "Buyers look around freely, move between rooms and floors, and explore at their own pace. That makes a VR tour a decision tool rather than a passive clip." },
    { title: "Works on Any Device — No Headset Required", description: "Our VR tours run in a browser on mobile, tablet, and desktop through a simple web link, and also support VR headsets for sales galleries and launch events." },
    { title: "Hotspots, Landmarks & Material Options", description: "Clickable hotspots explain features and specifications, nearby landmark highlights show connectivity, and material or lighting options let buyers visualise choices." },
    { title: "Offline-Ready for Sales Offices", description: "We can provide a version that runs on a dedicated iPad or laptop without internet, so your sales team can present anywhere in the city, even on weak site-office connectivity." },
    { title: `${cityName}-Focused Expertise`, description: `We understand how ${cityName} buyers research and decide, and we shape the tour around the questions they ask first: layout, amenities, surroundings, and connectivity.` },
    { title: "Easy Sharing With NRIs, Investors & Channel Partners", description: "A single link can be forwarded on WhatsApp or email, which lets outstation and overseas buyers experience the project without travelling to site." },
  ],
  processSteps: [
    { n: 1, t: "Input & Brief", d: "Share floor plans, CAD files, or drawings. We discuss style, materials, and your target audience." },
    { n: 2, t: "3D Build", d: "Our team models the space in full 3D, including architecture, interiors, lighting, and landscaping." },
    { n: 3, t: "Review & Refine", d: "You get a preview link for feedback. We refine materials, camera positions, and interactions." },
    { n: 4, t: "Deploy", d: "The final VR tour is delivered as a web link, iPad app, or VR headset package, ready for launch." },
  ],
  baseFaqs: (cityName) => [
    { q: "What is a virtual reality (VR) tour for real estate?", a: "A VR tour is an interactive 360° experience of a property or project that buyers can explore on their own, moving through rooms, floors, and outdoor areas using a browser, tablet, or VR headset." },
    { q: "What is the difference between a VR tour and a 3D walkthrough video?", a: "A 3D walkthrough is a pre-rendered video, like a film of the property. A VR tour is interactive: the viewer controls where to look and move, and can explore at their own pace." },
    { q: "Do buyers need a VR headset to view the tour?", a: "No. Our VR tours work on mobile, tablet, and desktop through a simple web link with no app or download needed. A headset version is available for sales galleries and events." },
    { q: "How long does it take to build a VR tour?", a: "Most VR tours take around 4–6 weeks, depending on the size and complexity of the project. We share progress previews at key milestones for your feedback." },
    { q: `Do you provide virtual reality tour services in ${cityName}?`, a: `Yes, we provide VR tours for real estate developers in ${cityName}, covering residential, commercial, and plotted projects, with delivery as a web link, iPad version, or headset package.` },
  ],
  formServiceOptions: [
    { value: "residential-vr-tour", label: "Residential VR Tour" },
    { value: "commercial-vr-tour", label: "Commercial VR Tour" },
    { value: "pre-launch-vr-experience", label: "Pre-Launch VR Experience" },
    { value: "sales-office-vr-demo", label: "Sales Office / iPad VR Demo" },
  ],
};
