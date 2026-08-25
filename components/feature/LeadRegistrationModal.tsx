"use client";

import { useEffect, useState } from "react";
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE } from "@/lib/countryCodes";

type FormData = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  company: string;
  project_type: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "",
  email: "",
  countryCode: DEFAULT_COUNTRY_CODE,
  phone: "",
  company: "",
  project_type: "",
  budget: "",
  message: "",
};

function validateField(name: keyof FormData, value: string): string | undefined {
  switch (name) {
    case "name":
      if (!value.trim()) return "Name is required.";
      if (value.trim().length < 2) return "Name must be at least 2 characters.";
      return undefined;
    case "email":
      if (!value.trim()) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()))
        return "Enter a valid email address.";
      return undefined;
    case "phone": {
      if (!value.trim()) return "Phone number is required.";
      const digits = value.replace(/\D/g, "");
      if (digits.length !== 10) return "Enter a valid 10-digit mobile number.";
      return undefined;
    }
    default:
      return undefined;
  }
}

export default function LeadRegistrationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormData;
    const sanitized = field === "phone" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setFormData((prev) => ({ ...prev, [field]: sanitized }));
    if (touched[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, sanitized) }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormData;
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
    };
    setErrors(nextErrors);
    setTouched({ name: true, email: true, phone: true });
    if (Object.values(nextErrors).some(Boolean)) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
        setFormData(initialFormData);
        setErrors({});
        setTouched({});
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

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none text-sm ${
      touched[field] && errors[field]
        ? "border-red-400 focus:ring-red-400"
        : "border-gray-300 focus:ring-yellow-400"
    }`;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />

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
            Tell us about your project and our team will get back to you within 24 hours.
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
                We&apos;ve received your enquiry. Our team will respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your full name"
                    className={inputClass("name")}
                  />
                  {touched.name && errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@company.com"
                    className={inputClass("email")}
                  />
                  {touched.email && errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none text-sm bg-white w-[92px] flex-shrink-0"
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {c.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={10}
                      inputMode="numeric"
                      placeholder="10-digit mobile number"
                      className={inputClass("phone")}
                    />
                  </div>
                  {touched.phone && errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className={inputClass("company")}
                  />
                </div>
              </div>

              {/* Project Type + Budget Range */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                  <select
                    name="project_type"
                    value={formData.project_type}
                    onChange={handleChange}
                    className={`${inputClass("project_type")} bg-white`}
                  >
                    <option value="">Select project type</option>
                    <option value="3d-walkthrough">3D Walkthrough Videos</option>
                    <option value="vr-tour">Virtual Reality Tours (360°)</option>
                    <option value="construction-updates">Construction Update Videos</option>
                    <option value="drone-cinematography">Location AVs & Drone Shoots</option>
                    <option value="architectural-models">Architectural Scale Models</option>
                    <option value="3d-renders">3D Renders & Isometrics</option>
                    <option value="interactive-3d">Interactive 3D Tools</option>
                    <option value="digital-marketing">Real Estate Digital Marketing</option>
                    <option value="graphics-branding">Graphics & Branding Content</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${inputClass("budget")} bg-white`}
                  >
                    <option value="">Select budget range</option>
                    <option value="50k-1lakh">INR 50,000 - 1,00,000</option>
                    <option value="1lakh-5lakh">INR 1,00,000 - 5,00,000</option>
                    <option value="5lakh-10lakh">INR 5,00,000 - 10,00,000</option>
                    <option value="over-10lakh">Over INR 10,00,000</option>
                  </select>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  maxLength={500}
                  placeholder="Tell us about your project requirements..."
                  className={`${inputClass("message")} resize-none`}
                />
                <div className="text-right text-xs text-gray-500 mt-1">
                  {formData.message.length}/500 characters
                </div>
              </div>

              {/* Error */}
              {submitStatus === "error" && (
                <p className="text-red-600 text-sm">
                  Something went wrong. Please try again or WhatsApp us directly.
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
                    Sending.....
                  </>
                ) : (
                  <>
                    <span>Send Message via Email</span>
                    <i className="ri-mail-send-line" />
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
