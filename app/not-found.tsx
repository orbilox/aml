import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-32 flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8">
            <i className="ri-error-warning-line text-5xl text-black"></i>
          </div>
          <h1 className="text-8xl font-bold text-black mb-4">404</h1>
          <h2 className="text-3xl font-bold text-black mb-6">Page Not Found</h2>
          <p className="text-lg text-black/70 mb-10 leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let us help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-colors whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/services/3d-walkthrough-videos"
              className="p-4 border border-gray-200 rounded-xl hover:border-yellow-400 transition-colors text-sm font-medium text-black/70 hover:text-black"
            >
              3D Walkthrough Videos
            </Link>
            <Link
              href="/services/drone-shoots"
              className="p-4 border border-gray-200 rounded-xl hover:border-yellow-400 transition-colors text-sm font-medium text-black/70 hover:text-black"
            >
              Drone Shoots
            </Link>
            <Link
              href="/services/virtual-reality-tours"
              className="p-4 border border-gray-200 rounded-xl hover:border-yellow-400 transition-colors text-sm font-medium text-black/70 hover:text-black"
            >
              Virtual Reality Tours
            </Link>
            <Link
              href="/portfolio"
              className="p-4 border border-gray-200 rounded-xl hover:border-yellow-400 transition-colors text-sm font-medium text-black/70 hover:text-black"
            >
              Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
