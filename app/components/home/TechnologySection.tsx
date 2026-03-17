import Image from "next/image";

const technologies = [
  {
    icon: "ri-vr-line",
    title: "Virtual Reality",
    description: "Immersive VR experiences using cutting-edge headsets and 360° environments",
    isCustomIcon: true,
    customIcon: "/images/customicon/vrtours.png",
  },
  {
    icon: "ri-smartphone-line",
    title: "Augmented Reality",
    description: "AR applications that overlay digital information onto real-world environments",
  },
  {
    icon: "ri-computer-line",
    title: "Real-time Rendering",
    description: "Advanced GPU-accelerated rendering for instant visualization updates",
  },
  {
    icon: "ri-cloud-line",
    title: "Cloud Computing",
    description: "Scalable cloud infrastructure for processing and delivering content globally",
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-black">Technology Edge</h2>
              <div className="w-20 h-1 bg-yellow-400"></div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              We leverage the latest in visualization technology to create immersive experiences
              that push the boundaries of what&apos;s possible in real estate marketing.
            </p>
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    {tech.isCustomIcon ? (
                      <Image src={tech.customIcon!} alt={tech.title} width={24} height={24} />
                    ) : (
                      <i className={`${tech.icon} text-xl text-black`}></i>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{tech.title}</h3>
                    <p className="text-gray-600">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-black to-gray-800 rounded-2xl overflow-hidden relative">
              <Image
                src="/images/home/3.jpg"
                alt="Technology Display"
                fill
                className="object-cover object-top opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <i className="ri-play-circle-line text-3xl text-yellow-400"></i>
                  </div>
                  <p className="text-sm font-medium">Experience Our Technology</p>
                </div>
              </div>
              <div className="absolute top-8 right-8 w-16 h-16 bg-yellow-400/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                <i className="ri-3d-view-line text-xl text-yellow-400"></i>
              </div>
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-yellow-400/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                <Image
                  src="https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/fe7a09b49ca15138bec4a79058f6a337.png"
                  alt="VR"
                  width={24}
                  height={24}
                  className="brightness-0 invert opacity-70"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
