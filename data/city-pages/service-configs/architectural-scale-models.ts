import type { CityServiceTemplateConfig } from "../types";

export const config: CityServiceTemplateConfig = {
  serviceSlug: "architectural-scale-models",
  serviceLabel: "Architectural Scale Models",
  serviceHref: "/services/scale-model-maker-india",
  serviceIcon: "ri-building-2-line",
  legacyCityPages: [],
  services: (cityName) => [
    { icon: "ri-building-line", title: "Residential Tower Models", description: `Detailed scale models of ${cityName}'s apartment towers, villas, and gated communities` },
    { icon: "ri-community-line", title: "Township Master Plan Models", description: `Large-scale models showing phases, roads, amenities, and open spaces for ${cityName} townships` },
    { icon: "ri-store-2-line", title: "Commercial & Mixed-Use Models", description: `Scale models of offices, retail podiums, and mixed-use developments in ${cityName}` },
    { icon: "ri-lightbulb-flash-line", title: "LED-Lit Sales Gallery Models", description: "Phase-wise LED lighting and hand-finished detail for sales galleries, launches, and exhibitions" },
  ],
  whyUsItems: (cityName) => [
    { title: "In-House Fabrication, No Outsourcing", description: "CNC and laser cutting, hand-finishing, and assembly are handled by our own team, so the quality and timeline stay under one roof." },
    { title: "Built Directly From Your CAD Drawings", description: "We work from AutoCAD DWG, Revit, and SketchUp files and build a precise digital model first, so the physical model matches the approved plan down to the millimetre." },
    { title: "LED Lighting That Tells the Project's Story", description: "Phase-wise and amenity-wise LED lighting lets your sales team highlight towers, podiums, and landscape one at a time during a buyer presentation." },
    { title: `Delivery and Installation in ${cityName}`, description: `We custom-crate every model, supervise transport, and send our team to install it at your ${cityName} sales gallery or exhibition stand.` },
    { title: "Pairs With 3D Walkthroughs and VR Tours", description: "A physical model gives buyers something to gather around; a 3D walkthrough or VR tour shows the interiors. We build all of them from the same drawings, so they stay consistent." },
    { title: "Reliable Timelines for Launch Dates", description: "Standard residential models take 15–25 working days and large township models 30–50 working days from drawing sign-off, with rush production available for urgent launches." },
  ],
  processSteps: [
    { n: 1, t: "Brief & Drawings", d: "Share your CAD files and drawings. We agree the scale, size, materials, and where the model will be displayed." },
    { n: 2, t: "Digital 3D Model", d: "Our team converts the drawings into a precise digital model and shares it for approval before any fabrication starts." },
    { n: 3, t: "Fabrication & Finishing", d: "CNC and laser-cut components are assembled and hand-finished, with landscape, details, and LED lighting integrated." },
    { n: 4, t: "Delivery & Installation", d: "The model is custom-crated, transported, and installed at your sales gallery or event, ready for buyers." },
  ],
  baseFaqs: (cityName) => [
    { q: "What is an architectural scale model for real estate?", a: "An architectural scale model is a physical miniature of a building, township, or master plan, built to scale from your drawings. Developers use it in sales galleries and at launches so buyers can see the layout, towers, and amenities in three dimensions." },
    { q: "How long does it take to make a scale model?", a: "Standard residential block models take 15–25 working days and large township master plan models take 30–50 working days, counted from drawing sign-off. Rush production in 7–15 days is available for urgent launches at a premium." },
    { q: "How much does an architectural scale model cost?", a: "Scale model prices range from about ₹75,000 for a simple villa model to ₹20,00,000+ for a large township master plan with phase-wise LED lighting. Cost depends on size, scale ratio, finish quality, and lighting. Share your drawings for a detailed quote." },
    { q: "Can you build the model from my CAD drawings?", a: "Yes. We work directly from AutoCAD DWG, Revit, and SketchUp files, and build a digital model first so the physical model stays dimensionally accurate." },
    { q: `Do you deliver and install scale models in ${cityName}?`, a: `Yes. We deliver and install architectural scale models in ${cityName} and across India. Each model is custom-crated and transported under supervision, and our team handles installation at your sales gallery or exhibition.` },
  ],
  formServiceOptions: [
    { value: "residential-scale-model", label: "Residential Tower / Villa Model" },
    { value: "township-master-plan-model", label: "Township Master Plan Model" },
    { value: "commercial-scale-model", label: "Commercial / Mixed-Use Model" },
    { value: "led-sales-gallery-model", label: "LED-Lit Sales Gallery Model" },
  ],
};
