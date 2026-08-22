"use client";

import { useEffect, useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  targetMarket: string;
  message: string;
};

export default function LeadRegistrationModal() {
  const [isOpen, setIsOpen] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    targetMarket: "",
    message: "",
  });

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "a557c293-5de3-4d54-8636-50b7d3c406c7",

          subject: "New Lead — Website Registration Popup",

          from_name: formData.name,

          ...formData,

          source: "Website Lead Popup",

          page_url: window.location.href,
        }),
      });

      if (res.ok) {
        setSubmitStatus("success");

        setFormData({
          name: "",
          email: "",
          phone: "",
          targetMarket: "",
          message: "",
        });

        // Close after showing success message
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
        >
          <i className="ri-close-line text-xl" />
        </button>

        {/* Header */}
        <div className="bg-yellow-400 px-6 sm:px-8 py-7 sm:py-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-black/70 mb-2">
            Alliance Media Labs
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-black pr-10">
            Let&apos;s Bring Your Vision to Life
          </h2>

          <p className="mt-2 text-sm sm:text-base text-black/80">
            Tell us about your project and our team will get back to you within
            24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="p-6 sm:p-8">
          {submitStatus === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-check-line text-3xl text-green-500" />
              </div>

              <h3 className="text-2xl font-bold text-black mb-2">Thank You!</h3>

              <p className="text-gray-600">
                We&apos;ve received your enquiry. Our team will respond within
                24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-sm"
                  />
                </div>
              </div>

              {/* Phone + Target Market */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Market
                  </label>

                  <select
                    name="targetMarket"
                    value={formData.targetMarket}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-sm bg-white"
                  >
                    <option value="">Select market</option>
                    <option value="India">India</option>
                    <option value="Gulf (UAE/Saudi/Qatar)">
                      Gulf (UAE / Saudi / Qatar)
                    </option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Multiple Markets">Multiple Markets</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-sm resize-none"
                />
              </div>

              {/* Error */}
              {submitStatus === "error" && (
                <p className="text-red-600 text-sm">
                  Something went wrong. Please try again or WhatsApp us
                  directly.
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-400 text-black py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-line" />
                    Get My Free Quote
                  </>
                )}
              </button>

              <p className="text-center text-gray-500 text-xs">
                We respond within 24 hours. Your information is confidential.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
