export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Crafting Experiences That Sell Before the First Brick Is Laid
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Alliance Media Labs is a creative technology company that
              specializes in helping real estate developers and builders
              present their projects in the most compelling way possible.
              From stunning 3D walkthroughs to immersive virtual reality
              experiences, we transform architectural visions into powerful
              marketing tools.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
                <div className="text-black font-semibold">Projects</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-black font-semibold">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/home/2.jpg"
              alt="Alliance Media Labs Studio"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
