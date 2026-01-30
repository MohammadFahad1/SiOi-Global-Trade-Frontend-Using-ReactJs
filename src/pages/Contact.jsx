import React from "react";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <section className="relative h-[60vh] min-h-125 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url("get_in_touch_bg.jpg")`,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-blue-500/10" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div style={{ opacity: 1, transform: "none" }}>
            <div
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold mb-6 backdrop-blur-sm"
              style={{ opacity: 1, transform: "none" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-2"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              24/7 Customer Support Available
            </div>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              style={{ opacity: 1, transform: "none" }}
            >
              Get In{" "}
              <span className="bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              style={{ opacity: 1, transform: "none" }}
            >
              Need help finding the perfect part? Our automotive experts are
              here to assist you with genuine Japanese auto parts and
              professional guidance.
            </p>
            <div
              className="flex flex-wrap justify-center gap-6 md:gap-8"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex items-center gap-2 text-white/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-blue-400"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="font-semibold">01905400666</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-blue-400"
                >
                  <rect width={20} height={16} x={2} y={4} rx={2} />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="font-semibold">info@japanparts.com.bd</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-blue-400"
                >
                  <circle cx={12} cy={12} r={10} />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span className="font-semibold">
                  Sat-Thu 10PM-8PM, Fri 10PM-8PM
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              transform:
                "translateX(82.97px) translateY(-41.485px) translateZ(0px)",
            }}
          />
          <div
            className="absolute bottom-32 right-20 w-3 h-3 bg-blue-400/30 rounded-full"
            style={{
              transform:
                "translateX(-35.168px) translateY(26.376px) translateZ(0px)",
            }}
          />
        </div>
      </section>
      <section className="py-16 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
            style={{ opacity: 1, transform: "none" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to{" "}
              <span className="bg-linear-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
                Reach Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to get in touch with our automotive
              parts experts. We're committed to providing you with exceptional
              service and support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Phone Support
              </h3>
              <p className="text-sm font-medium text-gray-800 mb-1">
                01905400666
              </p>
              <p className="text-sm text-gray-600 mb-3">+8801905400777</p>
              <p className="text-xs text-gray-500">
                Call us for immediate assistance
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <rect width={20} height={16} x={2} y={4} rx={2} />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email Support
              </h3>
              <p className="text-sm font-medium text-gray-800 mb-1">
                info@japanparts.com.bd
              </p>
              <p className="text-sm text-gray-600 mb-3">
                support@japanparts.com.bd
              </p>
              <p className="text-xs text-gray-500">
                Send us your detailed inquiries
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Visit Our Store
              </h3>
              <p className="text-sm font-medium text-gray-800 mb-1">
                277 Tejgaon Industrial Area, Dhaka
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Multiple locations available
              </p>
              <p className="text-xs text-gray-500">
                Come see our parts collection
              </p>
            </div>
            <div
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="w-12 h-12 rounded-xl bg-linear-to-r from-orange-500 to-red-600 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Live Chat
              </h3>
              <p className="text-sm font-medium text-gray-800 mb-1">
                Available Now
              </p>
              <p className="text-sm text-gray-600 mb-3">24/7 Online Support</p>
              <p className="text-xs text-gray-500">Get instant help online</p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-linear-to-r from-blue-500 to-blue-500 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-white"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-700">
                    Saturday - Thursday
                  </span>
                  <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-700">Friday</span>
                  <span className="text-gray-600">10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="font-medium text-gray-700">
                    Emergency Support
                  </span>
                  <span className="text-gray-600">24/7 Available</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-linear-to-r from-blue-50 to-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Emergency parts support available 24/7
                  for urgent automotive needs. Contact us anytime for critical
                  breakdowns.
                </p>
              </div>
            </div>
            <div
              className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg text-white"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-lg bg-linear-to-r from-blue-500 to-blue-500 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-white"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={2} x2={22} y1={12} y2={12} />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Why Choose Us?</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      Genuine Japanese Parts
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Authentic OEM and aftermarket parts from trusted Japanese
                      manufacturers
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      Expert Technical Support
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Our team has years of experience with Japanese automotive
                      systems
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">
                      Fast Nationwide Delivery
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Quick shipping across Bangladesh with secure packaging
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Quality Guarantee</h4>
                    <p className="text-gray-300 text-sm">
                      All parts come with warranty and quality assurance
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-lg border border-white/20">
                <p className="text-sm">
                  <strong>Trusted by 10,000+ customers</strong> across
                  Bangladesh for their Japanese automotive parts needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
            style={{ opacity: 1, transform: "none" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request a{" "}
              <span className="bg-linear-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
                Part Quote
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill out this form with your vehicle details and part
              requirements. Our experts will get back to you with availability
              and pricing.
            </p>
          </div>
          <div
            className="bg-linear-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-100"
            style={{ opacity: 1, transform: "none" }}
          >
            <form className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-blue-500"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      requiblue
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                      type="text"
                      defaultValue
                      name="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      requiblue
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                      type="email"
                      defaultValue
                      name="email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+880 1XXX XXXXXX"
                      type="tel"
                      defaultValue
                      name="phone"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="urgency"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Urgency Level
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="normal">Normal (3-5 days)</option>
                      <option value="urgent">Urgent (1-2 days)</option>
                      <option value="emergency">Emergency (Same day)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-blue-500"
                  >
                    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                    <circle cx="6.5" cy="16.5" r="2.5" />
                    <circle cx="16.5" cy="16.5" r="2.5" />
                  </svg>
                  Vehicle Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label
                      htmlFor="carMake"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Car Make *
                    </label>
                    <input
                      id="carMake"
                      requiblue
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="e.g., Toyota, Honda, Nissan"
                      type="text"
                      defaultValue
                      name="carMake"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="carModel"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Car Model *
                    </label>
                    <input
                      id="carModel"
                      requiblue
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="e.g., Corolla, Civic, Altima"
                      type="text"
                      defaultValue
                      name="carModel"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="year"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Year *
                    </label>
                    <input
                      id="year"
                      requiblue
                      min={1990}
                      max={2025}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder={2020}
                      type="number"
                      defaultValue
                      name="year"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-blue-500"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1={16} x2={8} y1={13} y2={13} />
                    <line x1={16} x2={8} y1={17} y2={17} />
                    <line x1={10} x2={8} y1={9} y2={9} />
                  </svg>
                  Part Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="partCategory"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Part Category *
                    </label>
                    <select
                      id="partCategory"
                      name="partCategory"
                      requiblue
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value>Select a category</option>
                      <option value="Engine Parts">Engine Parts</option>
                      <option value="Transmission Parts">
                        Transmission Parts
                      </option>
                      <option value="Brake System">Brake System</option>
                      <option value="Suspension Parts">Suspension Parts</option>
                      <option value="Electrical Components">
                        Electrical Components
                      </option>
                      <option value="Body Parts">Body Parts</option>
                      <option value="Interior Parts">Interior Parts</option>
                      <option value="Exhaust System">Exhaust System</option>
                      <option value="Cooling System">Cooling System</option>
                      <option value="Fuel System">Fuel System</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="partName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Specific Part Name *
                    </label>
                    <input
                      id="partName"
                      requiblue
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="e.g., Front brake pads, Oil filter"
                      type="text"
                      defaultValue
                      name="partName"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2 text-green-500"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Additional Details
                </h3>
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message / Additional Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Please provide any additional details about the part you need, installation requirements, or specific questions..."
                      defaultValue={""}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Attach Images or Documents (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8 text-gray-400 mx-auto mb-2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1={12} x2={12} y1={3} y2={15} />
                      </svg>
                      <input
                        id="file-upload"
                        multiple
                        accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                        className="hidden"
                        type="file"
                      />
                      <label
                        htmlFor="file-upload"
                        className="text-sm text-gray-600 cursor-pointer hover:text-blue-600"
                      >
                        Click to upload images of the part or relevant documents
                        <br />
                        <span className="text-xs text-gray-400">
                          Supported: JPG, PNG, PDF, DOC (Max 10MB each)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 bg-linear-to-r from-blue-500 to-blue-500 hover:from-blue-600 hover:to-blue-600 shadow-lg hover:shadow-xl"
                  tabIndex={0}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="py-16 bg-linear-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-12"
            style={{ opacity: 1, transform: "none" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our{" "}
              <span className="bg-linear-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
                Locations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find us at our convenient locations across Dhaka. Visit our
              showroom to see our parts collection or contact us for directions.
            </p>
          </div>
          {/* <Locations /> */}
        </div>
      </section>
    </main>
  );
};

export default Contact;
