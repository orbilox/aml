"use client";

export default function WhatsAppFloat() {
  const phoneNumber = "919988931093";
  const message =
    "Hello! I'm interested in your real estate visualization services. Could you please provide more information?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          aria-label="Chat on WhatsApp"
        >
          <i className="ri-whatsapp-line text-2xl text-white"></i>
        </a>
      </div>
    </div>
  );
}
