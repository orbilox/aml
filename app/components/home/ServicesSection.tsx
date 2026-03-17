import Link from "next/link";

const services = [
  {
    icon: "ri-vidicon-line",
    title: "3D Walkthrough Videos",
    description:
      "Cinematic 3D animations that bring architectural designs to life with photorealistic detail.",
    href: "/services/3d-walkthrough-videos",
  },
  {
    icon: null,
    customIcon: "/images/services/virtual-reality-tours/2.png",
    title: "Virtual Reality Tours",
    description:
      "Immersive 360° VR experiences that transport clients into their future properties.",
    href: "/services/virtual-reality-tours",
  },
  {
    icon: "ri-building-line",
    title: "3D Renders & Isometrics",
    description:
      "Photorealistic architectural renders and bird's-eye isometric views.",
    href: "/services/3d-renders-isometrics",
  },
  {
    icon: "ri-computer-line",
    title: "Interactive 3D Tools",
    description:
      "Engaging interactive experiences for sales centers and digital platforms.",
    href: "/services/interactive-3d-tools",
  },
  {
    icon: "ri-scales-3-line",
    title: "Architectural Scale Models",
    description:
      "Precision-crafted physical models for presentations and exhibitions.",
    href: "/services/architectural-scale-models",
  },
  {
    icon: "ri-camera-line",
    title: "Construction Update Videos",
    description:
      "Professional documentation of construction progress for stakeholders.",
    href: "/services/construction-update-videos",
  },
  {
    icon: "ri-flight-takeoff-line",
    title: "Location AV",
    description:
      "Aerial cinematography showcasing location advantages and surroundings.",
    href: "/services/drone-shoots",
  },
  {
    icon: "ri-paint-brush-line",
    title: "Graphics & Branding",
    description:
      "Complete brand identity and marketing collateral for real estate projects.",
    href: "/services/graphics-branding",
  },
  {
    icon: "ri-global-line",
    title: "Digital Marketing",
    description:
      "Strategic digital campaigns that maximize reach and generate qualified leads.",
    href: "/services/digital-marketing",
  },
  {
    icon: "ri-road-map-line",
    title: "Route Videos",
    description:
      "Animated route visualization showing connectivity and location advantages.",
    href: "/services/route-videos",
  },
  {
    icon: "ri-map-2-line",
    title: "3D Isometrics",
    description:
      "Detailed isometric views showcasing master plans and project layouts.",
    href: "/services/3d-isometrics",
  },
  {
    icon: "ri-home-4-line",
    title: "Interior Cinematic Walkthrough",
    description:
      "Stunning cinematic videos showcasing interior spaces and lifestyle.",
    href: "/services/interior-cinematic-walkthrough",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate visualization and marketing solutions
            tailored for modern developers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-yellow-400"
            >
              <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.customIcon ? (
                  <img
                    src={service.customIcon}
                    alt={service.title}
                    className="w-8 h-8"
                  />
                ) : (
                  <i className={`${service.icon} text-2xl text-black`}></i>
                )}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <span className="text-yellow-400 font-semibold text-sm flex items-center space-x-1 group-hover:space-x-2 transition-all">
                <span>Learn More</span>
                <i className="ri-arrow-right-line"></i>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
