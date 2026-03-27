"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const services = [
  { name: "3D Walkthrough Videos", href: "/services/3d-walkthrough-videos" },
  { name: "Virtual Reality Tours", href: "/services/virtual-reality-tours" },
  { name: "3D Renders & Isometrics", href: "/services/3d-renders-isometrics" },
  { name: "Interactive 3D Tools", href: "/services/interactive-3d-tools" },
  {
    name: "Architectural Scale Models",
    href: "/services/architectural-scale-models",
  },
  {
    name: "Construction Update Videos",
    href: "/services/construction-update-videos",
  },
  { name: "Location AV", href: "/services/drone-shoots" },
  { name: "Graphics & Branding", href: "/services/graphics-branding" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${sectionId}`);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://static.readdy.ai/image/8d54cefc56aae77b02ec7dea9869daf3/7240d6459fd7bd08670b4a90c4788daa.png"
              alt="Alliance Media Labs"
              width={180}
              height={50}
              className="h-10 w-auto"
              unoptimized
            />
          </Link>

          {/* Desktop Nav — absolutely centered */}
          <nav className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-sm"
            >
              About
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-sm flex items-center space-x-1">
                <span>Services</span>
                <i className="ri-arrow-down-s-line"></i>
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 z-50">
                  <div className="bg-black border border-gray-700 rounded-xl shadow-2xl py-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-sm"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("technology")}
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-sm"
            >
              Technology
            </button>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-yellow-400 transition-colors font-medium text-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Book a Demo — right side */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/lakshay-alliancemedialabs/30min?month=2025-10",
                  "_blank"
                )
              }
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-yellow-300 transition-colors"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <i
              className={`text-2xl ${isMenuOpen ? "ri-close-line" : "ri-menu-line"}`}
            ></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 py-4">
            <nav className="flex flex-col space-y-1">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-colors rounded-lg"
              >
                About
              </button>

              <div>
                <button
                  onClick={() =>
                    setIsMobileServicesOpen(!isMobileServicesOpen)
                  }
                  className="w-full text-left px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-colors rounded-lg flex items-center justify-between"
                >
                  <span>Services</span>
                  <i
                    className={`ri-arrow-${isMobileServicesOpen ? "up" : "down"}-s-line`}
                  ></i>
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 mt-1 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-gray-400 hover:text-yellow-400 hover:bg-gray-800 transition-colors rounded-lg text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-colors rounded-lg"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="text-left px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-colors rounded-lg"
              >
                Technology
              </button>
              <Link
                href="/contact"
                className="px-4 py-3 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 transition-colors rounded-lg"
              >
                Contact
              </Link>
              <button
                onClick={() =>
                  window.open(
                    "https://calendly.com/lakshay-alliancemedialabs/30min?month=2025-10",
                    "_blank"
                  )
                }
                className="mx-4 mt-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-yellow-300 transition-colors"
              >
                Book a Demo
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
