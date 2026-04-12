import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Image
              src="https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/7240d6459fd7bd08670b4a90c4788daa.png"
              alt="Alliance Media Labs"
              width={160}
              height={44}
              className="h-11 w-auto mb-4"
              unoptimized
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Creative technology company specializing in real estate content
              creation and virtual visualization.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1KC5TqxSQL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors text-gray-400"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="https://youtube.com/@alliancemedialabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors text-gray-400"
                aria-label="YouTube"
              >
                <i className="ri-youtube-fill"></i>
              </a>
              <a
                href="https://www.instagram.com/alliancemedialabs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors text-gray-400"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://linkedin.com/company/alliance-media-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors text-gray-400"
                aria-label="LinkedIn"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                {
                  name: "3D Walkthrough Videos",
                  href: "/services/3d-walkthrough-videos",
                },
                {
                  name: "Virtual Reality Tours",
                  href: "/services/virtual-reality-tours",
                },
                {
                  name: "3D Renders & Isometrics",
                  href: "/services/3d-renders-isometrics",
                },
                {
                  name: "Interactive 3D Tools",
                  href: "/services/interactive-3d-tools",
                },
                { name: "Drone Shoots & Location AV", href: "/services/drone-shoots" },
                { name: "Route Videos", href: "/services/route-videos" },
                { name: "Construction Update Videos", href: "/services/construction-update-videos" },
                { name: "3D Isometric Views", href: "/services/3d-isometrics" },
                { name: "Interior Cinematic Walkthrough", href: "/services/interior-cinematic-walkthrough" },
                { name: "Architectural Scale Models", href: "/services/architectural-scale-models" },
                {
                  name: "Graphics & Branding",
                  href: "/services/graphics-branding",
                },
                {
                  name: "Digital Marketing",
                  href: "/services/digital-marketing",
                },
              ].map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="tel:+919988931093"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  +91-9988931093
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@alliancemedialabs.com"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  info@alliancemedialabs.com
                </a>
              </li>
            </ul>
          </div>

          {/* City Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">City Services</h3>
            <ul className="space-y-3">
              {[
                {
                  name: "3D Walkthroughs Mumbai",
                  href: "/city-services/3d-walkthrough-videos-mumbai",
                },
                {
                  name: "3D Walkthroughs Bangalore",
                  href: "/city-services/3d-walkthrough-videos-bangalore",
                },
                {
                  name: "3D Walkthroughs Delhi",
                  href: "/city-services/3d-walkthrough-videos-delhi",
                },
                {
                  name: "3D Renders Mumbai",
                  href: "/city-services/3d-renders-mumbai",
                },
                {
                  name: "Drone Shoots Bangalore",
                  href: "/city-services/drone-shoots-bangalore",
                },
                {
                  name: "Video Production Gurugram",
                  href: "/city-services/real-estate-video-production-gurugram",
                },
              ].map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Alliance Media Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
