import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/about/showroom-outside.jpg")',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="text-white text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
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
                  className="h-4 sm:h-5 w-4 sm:w-5 text-blue-400"
                >
                  <circle cx={12} cy={8} r={6} />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                <span className="text-blue-300 font-semibold text-xs sm:text-sm uppercase tracking-wider">
                  Since 2008
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Authentic
                <span className="bg-linear-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  {" "}
                  Japanese{" "}
                </span>
                Excellence
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-2 lg:px-0">
                Welcome to Japan Parts, your trusted destination for
                high-quality original Japanese automotive parts and accessories
                in Bangladesh.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 px-2 lg:px-0">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg">
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
                      className="h-4 sm:h-5 w-4 sm:w-5 text-blue-400"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <line x1={2} x2={22} y1={12} y2={12} />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <span className="text-gray-300 font-medium text-sm sm:text-base">
                    Nation-wide Reach
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg">
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
                      className="h-4 sm:h-5 w-4 sm:w-5 text-blue-400"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <span className="text-gray-300 font-medium text-sm sm:text-base">
                    Authentic &amp; Quality
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg">
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
                      className="h-4 sm:h-5 w-4 sm:w-5 text-blue-400"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="text-gray-300 font-medium text-sm sm:text-base">
                    Dedicated Support
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-blue-500/20 rounded-lg">
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
                      className="h-4 sm:h-5 w-4 sm:w-5 text-blue-400"
                    >
                      <circle cx={12} cy={8} r={6} />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <span className="text-gray-300 font-medium text-sm sm:text-base">
                    Great Value
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-2 lg:px-0">
                <a
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-blue-500 to-blue-300 text-white font-bold rounded-xl hover:from-blue-600 hover:to-blue-300 transition-all duration-300 shadow-lg hover:shadow-blue-lg group text-sm sm:text-base"
                  href="/products"
                >
                  <span>Explore Our Parts</span>
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
                    className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
                <a
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:border-white hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                  href="/contact"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="relative bg-linear-to-br from-blue-500/20 to-blue-300/20 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm border border-white/10">
                <div className="w-full h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden relative">
                  <img
                    src="/images/about/showroom-inside.png"
                    alt="Japan Parts Showroom Interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex items-end justify-center pb-6">
                    <div className="text-center px-4">
                      <p className="text-white text-lg sm:text-xl lg:text-2xl font-bold drop-shadow-lg">
                        Japan Parts Excellence
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-1.5 sm:gap-2">
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
                      className="h-3 sm:h-4 w-3 sm:w-4 fill-current"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="font-bold text-xs sm:text-sm">
                      4.9/5 Rating
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-linear-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-1.5 sm:gap-2">
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
                      className="h-3 sm:h-4 w-3 sm:w-4"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span className="font-bold text-xs sm:text-sm">
                      ISO Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-linear-to-br from-blue-500/10 to-blue-300/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-linear-to-tl from-blue-500/5 to-blue-300/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-500/10 border border-blue-500/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8">
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
                className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span className="text-blue-700 font-bold text-xs sm:text-sm uppercase tracking-wider">
                Our Story
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              See Japan Parts in
              <span className="bg-linear-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                {" "}
                Action
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 lg:px-0">
              A modern, well-stocked showroom located at 277 Tejgaon I/A, Dhaka
              -1208 1208. Our warehouse with genuine Japanese automotive parts,
              lubricants, tyres and accessories ready for fast dispatch.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-linear-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-200">
              <div className="aspect-video relative">
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1562141961-4d2d4d3ea76e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                >
                  <source src="/videos/about-intro.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-200 hover:scale-105 z-10"
                  aria-label="Unmute video"
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
                    className="h-4 sm:h-5 w-4 sm:w-5"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1={22} x2={16} y1={9} y2={15} />
                    <line x1={16} x2={22} y1={9} y2={15} />
                  </svg>
                </button>
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold mb-1">
                        Japan Parts: Our Journey
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-200">
                        15 years of automotive excellence
                      </p>
                    </div>
                    <div className="text-xs sm:text-sm bg-black/20 px-2 sm:px-3 py-1 rounded-full backdrop-blur-sm">
                      3:24
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-linear-to-br from-blue-500 to-blue-300 rounded-xl sm:rounded-2xl opacity-20 rotate-12" />
            <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-linear-to-br from-blue-500 to-purple-500 rounded-lg sm:rounded-xl opacity-15 -rotate-12" />
            <div className="absolute top-6 sm:top-8 -left-6 sm:-left-8 hidden md:block">
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center">
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
                      className="h-4 sm:h-5 w-4 sm:w-5 text-white"
                    >
                      <circle cx={12} cy={8} r={6} />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-8 sm:top-12 -right-8 sm:-right-12 hidden md:block">
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-green-500 rounded-lg flex items-center justify-center">
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
                      className="h-4 sm:h-5 w-4 sm:w-5 text-white"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <line x1={2} x2={22} y1={12} y2={12} />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-6 sm:bottom-8 -right-6 sm:-right-8 hidden md:block">
              <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center">
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
                      className="h-4 sm:h-5 w-4 sm:w-5 text-white"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-6 sm:mt-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                Japan Parts in Action
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                A dedicated customer service team guiding you to the correct
                product or part number every time. Our modern showroom showcases
                genuine Japanese automotive parts, lubricants, tyres and
                accessories ready for fast dispatch.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">
                    Dhaka
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Headquartered
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">
                    Genuine
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Japanese Parts
                  </div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-600">
                    Fast
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">
                    Dispatch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-500/10 border border-blue-500/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8">
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
                  className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <span className="text-blue-700 font-bold text-xs sm:text-sm uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Born from Passion for
                <span className="bg-linear-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                  {" "}
                  Japanese Engineering
                </span>
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Founded with a passion for performance, reliability and
                  authenticity, Japan Parts operates under the umbrella of Japan
                  Automotive Ltd., headquartered in Dhaka. Our mission is
                  simple: to make premium Japanese-brand spare parts easily
                  accessible, affordably priced and backed by service you can
                  rely on.
                </p>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                  We specialise in sourcing and supplying genuine Japanese auto
                  parts and accessories — directly imported, never through
                  unnecessary intermediaries. Whether it's engine filters, brake
                  components, tyres, lighting, batteries, or car-care items, we
                  bring you a wide selection from top brands with clear
                  provenance and certified quality. Our commitment to
                  authenticity means you can shop with confidence: every product
                  is vetted, every supplier is verified.
                </p>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  At Japan Parts, your vehicle's performance and safety matter
                  deeply to us. We pledge to support you with the right parts,
                  trustworthy advice, and service you can count on. Whether you
                  are a DIY enthusiast, an independent workshop, or simply a
                  car-owner— we're here for you.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-blue-500 text-white font-bold rounded-lg text-sm sm:text-base">
                    F
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">
                      Founded
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      Born from passion for Japanese engineering
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-blue-500 text-white font-bold rounded-lg text-sm sm:text-base">
                    Q
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">
                      Quality
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      Only products meeting strict criteria from trusted
                      manufacturers
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-blue-500 text-white font-bold rounded-lg text-sm sm:text-base">
                    R
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">
                      Reach
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      E-commerce platform serving customers throughout
                      Bangladesh
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-blue-500 text-white font-bold rounded-lg text-sm sm:text-base">
                    V
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">
                      Value
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm lg:text-base">
                      Cutting middle-man costs while upholding quality standards
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="relative bg-linear-to-br from-gray-100 to-gray-200 rounded-xl sm:rounded-2xl overflow-hidden">
                <div className="aspect-square bg-linear-to-br from-blue-50 to-blue-300 flex items-center justify-center">
                  <div className="text-center p-6 sm:p-8">
                    <div className="w-20 sm:w-24 h-20 sm:h-24 bg-linear-to-r from-blue-500 to-blue-300 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
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
                        className="h-10 sm:h-12 w-10 sm:w-12 text-white"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <circle cx={12} cy={12} r={6} />
                        <circle cx={12} cy={12} r={2} />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 text-base sm:text-lg px-2">
                      To make premium Japanese-brand spare parts easily
                      accessible, affordably priced and backed by service you
                      can rely on
                    </p>
                  </div>
                </div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-12 sm:w-16 h-12 sm:h-16 bg-white/20 rounded-full backdrop-blur-sm" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-16 sm:w-20 h-16 sm:h-20 bg-white/10 rounded-full backdrop-blur-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 sm:gap-3 bg-blue-500/10 border border-blue-500/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8">
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
                className="h-4 sm:h-5 w-4 sm:w-5 text-blue-600"
              >
                <circle cx={12} cy={12} r={10} />
                <circle cx={12} cy={12} r={6} />
                <circle cx={12} cy={12} r={2} />
              </svg>
              <span className="text-blue-700 font-bold text-xs sm:text-sm uppercase tracking-wider">
                Our Values
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Built on
              <span className="bg-linear-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                {" "}
                Strong Foundations
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 lg:px-0">
              By cutting unnecessary middle-man costs, we pass on savings to you
              while upholding our quality and service standards.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="group">
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
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
                    className="h-6 sm:h-8 w-6 sm:w-8 text-blue-500"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Authenticity &amp; Quality
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We only stock products that meet our strict criteria and
                  originate from trusted Japanese manufacturers.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
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
                    className="h-6 sm:h-8 w-6 sm:w-8 text-blue-500"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <line x1={2} x2={22} y1={12} y2={12} />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Nation-wide Reach
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  With our e-commerce platform and support services, we serve
                  customers throughout Bangladesh with ease and speed.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-green-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
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
                    className="h-6 sm:h-8 w-6 sm:w-8 text-green-500"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx={9} cy={7} r={4} />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Customer Support
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Our team is available daily to help you find the right
                  component, understand compatibility, and handle any request or
                  return.
                </p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-purple-50 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
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
                    className="h-6 sm:h-8 w-6 sm:w-8 text-purple-500"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Innovation &amp; Convenience
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We introduce catalogue-search &amp; chassis-lookup tools so
                  that finding the exact part number for your vehicle is faster
                  and more accurate than ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div
            className="text-center mb-12"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">
                Quality Assured
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Our Quality Promise
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every part undergoes rigorous testing and verification to ensure
              you receive only authentic, high-quality Japanese automotive
              components.
            </p>
          </div>
          <div className="mb-12" style={{ opacity: 1 }}>
            <div className="hidden md:grid md:grid-cols-4 gap-6">
              <div
                className="relative group cursor-pointer"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="absolute top-8 left-full w-6 h-0.5 bg-linear-to-r from-blue-400 to-blue-300 transform translate-x-2 z-10 hidden lg:block">
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
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 h-3 w-3 text-blue-500"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg border-2 transition-all duration-300 p-6 text-center border-gray-200 hover:border-blue-300">
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors duration-300">
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
                      className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform duration-300"
                    >
                      <path d="M6 18h8" />
                      <path d="M3 22h18" />
                      <path d="M14 22a7 7 0 1 0 0-14h-1" />
                      <path d="M9 14h2" />
                      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
                      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">
                    Testing
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Advanced laboratory testing and materials analysis
                  </p>
                </div>
              </div>
              <div
                className="relative group cursor-pointer"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="absolute top-8 left-full w-6 h-0.5 bg-linear-to-r from-blue-400 to-blue-300 transform translate-x-2 z-10 hidden lg:block">
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
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 h-3 w-3 text-blue-500"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg border-2 transition-all duration-300 p-6 text-center border-gray-200 hover:border-blue-300">
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors duration-300">
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
                      className="h-6 w-6 text-emerald-500 group-hover:scale-110 transition-transform duration-300"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="m9 15 2 2 4-4" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">
                    Authentication
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    OEM certification and authenticity verification
                  </p>
                </div>
              </div>
              <div
                className="relative group cursor-pointer"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="absolute top-8 left-full w-6 h-0.5 bg-linear-to-r from-blue-400 to-blue-300 transform translate-x-2 z-10 hidden lg:block">
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
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 h-3 w-3 text-blue-500"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg border-2 transition-all duration-300 p-6 text-center border-gray-200 hover:border-blue-300">
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors duration-300">
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
                      className="h-6 w-6 text-blue-300 group-hover:scale-110 transition-transform duration-300"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <circle cx={12} cy={12} r={6} />
                      <circle cx={12} cy={12} r={2} />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">
                    Inspection
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Precision quality inspection by expert technicians
                  </p>
                </div>
              </div>
              <div
                className="relative group cursor-pointer"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg border-2 transition-all duration-300 p-6 text-center border-gray-200 hover:border-blue-300">
                  <div className="absolute -top-3 -left-3 w-6 h-6 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors duration-300">
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
                      className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform duration-300"
                    >
                      <circle cx={12} cy={8} r={6} />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">
                    Certification
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Final quality seal with guarantee
                  </p>
                </div>
              </div>
            </div>
            <div className="md:hidden space-y-4">
              <div
                className="bg-white rounded-lg shadow-md border border-gray-200 p-4"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                    1
                  </div>
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
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
                      className="h-5 w-5 text-blue-500"
                    >
                      <path d="M6 18h8" />
                      <path d="M3 22h18" />
                      <path d="M14 22a7 7 0 1 0 0-14h-1" />
                      <path d="M9 14h2" />
                      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
                      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">Testing</h4>
                    <p className="text-gray-600 text-xs">
                      Advanced laboratory testing and materials analysis
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white rounded-lg shadow-md border border-gray-200 p-4"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                    2
                  </div>
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
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
                      className="h-5 w-5 text-emerald-500"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="m9 15 2 2 4-4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">
                      Authentication
                    </h4>
                    <p className="text-gray-600 text-xs">
                      OEM certification and authenticity verification
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white rounded-lg shadow-md border border-gray-200 p-4"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                    3
                  </div>
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
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
                      className="h-5 w-5 text-blue-300"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <circle cx={12} cy={12} r={6} />
                      <circle cx={12} cy={12} r={2} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">
                      Inspection
                    </h4>
                    <p className="text-gray-600 text-xs">
                      Precision quality inspection by expert technicians
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bg-white rounded-lg shadow-md border border-gray-200 p-4"
                style={{ opacity: 1, transform: "none" }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                    4
                  </div>
                  <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center shrink-0">
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
                      className="h-5 w-5 text-blue-500"
                    >
                      <circle cx={12} cy={8} r={6} />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-sm">
                      Certification
                    </h4>
                    <p className="text-gray-600 text-xs">
                      Final quality seal with guarantee
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="inline-flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
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
                  className="h-4 w-4 text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>ISO 9001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
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
                  className="h-4 w-4 text-green-500"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>JIS Standards</span>
              </div>
              <button className="group inline-flex items-center px-6 py-3 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg text-sm transition-all duration-300 hover:shadow-lg">
                Learn More
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
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 bg-white ">
        {" "}
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {" "}
          <div
            className="text-center mb-16"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 px-6 py-3 rounded-full mb-8">
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
                className="text-blue-600 h-5 w-5"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
                Customer Reviews
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Customer Stories
            </h2>{" "}
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-blue-600 mx-auto mb-8 rounded-full" />
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-normal">
              Hear from the automotive enthusiasts and professionals who trust
              Japan Parts for their projects.
            </p>{" "}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <article
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/3 to-blue-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="p-8 relative z-10">
                {" "}
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
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
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-1">
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-600">
                      (5.0)
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight mb-3">
                  {" "}
                  Authentic Japanese Quality
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {" "}
                  Ordered genuine OEM brake pads and was amazed by the precision
                  engineering. Perfect fitment and quality that matches original
                  specifications. Fast shipping and excellent customer service.
                </p>
                <div className="inline-flex items-center px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-blue-300 text-blue-300 border border-blue-300/20">
                  {" "}
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
                    className="h-3 w-3 mr-2"
                  >
                    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                    <circle cx="6.5" cy="16.5" r="2.5" />
                    <circle cx="16.5" cy="16.5" r="2.5" />
                  </svg>
                  OEM Brake Pads Set
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      {" "}
                      <span className="text-gray-900 font-bold text-lg">M</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base leading-tight">
                        Mohammad Rahman
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
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
                          className="h-3 w-3 mr-1"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx={12} cy={10} r={3} />
                        </svg>
                        Dhaka, Bangladesh - Automotive Engineer
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        2018 Toyota Camry
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                    {" "}
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
                      className="h-3 w-3 mr-1 inline"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
            </article>
            <article
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/3 to-blue-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="p-8 relative z-10">
                {" "}
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
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
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-1">
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-600">
                      (5.0)
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight mb-3">
                  {" "}
                  Exceptional Service &amp; Support
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {" "}
                  Their technical support team helped me identify the exact part
                  I needed. The air filter arrived quickly and installation was
                  seamless. Professional service that builds trust.
                </p>
                <div className="inline-flex items-center px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-emerald-50 text-emerald-600 border border-emerald-500/20">
                  {" "}
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
                    className="h-3 w-3 mr-2"
                  >
                    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                    <circle cx="6.5" cy="16.5" r="2.5" />
                    <circle cx="16.5" cy="16.5" r="2.5" />
                  </svg>
                  Engine Air Filter
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      {" "}
                      <span className="text-gray-900 font-bold text-lg">F</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base leading-tight">
                        Fatima Khatun
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
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
                          className="h-3 w-3 mr-1"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx={12} cy={10} r={3} />
                        </svg>
                        Chittagong, Bangladesh - Taxi Service Owner
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        2020 Honda Civic
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                    {" "}
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
                      className="h-3 w-3 mr-1 inline"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
            </article>
            <article
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/3 to-blue-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="p-8 relative z-10">
                {" "}
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
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
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-1">
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-600">
                      (5.0)
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight mb-3">
                  {" "}
                  Genuine OEM Parts, Great Value
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {" "}
                  Dealer wanted ৳30000 for this engine mount. Got the identical
                  OEM part here for ৳8000 with same warranty. Quality is
                  indistinguishable from dealer parts.
                </p>
                <div className="inline-flex items-center px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-red-50 text-red-600 border border-red-500/20">
                  {" "}
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
                    className="h-3 w-3 mr-2"
                  >
                    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                    <circle cx="6.5" cy="16.5" r="2.5" />
                    <circle cx="16.5" cy="16.5" r="2.5" />
                  </svg>
                  Engine Mount Assembly
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      {" "}
                      <span className="text-gray-900 font-bold text-lg">A</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base leading-tight">
                        Ahmed Hossain
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
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
                          className="h-3 w-3 mr-1"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx={12} cy={10} r={3} />
                        </svg>
                        Sylhet, Bangladesh - Transport Business Owner
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        2017 Nissan Altima
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                    {" "}
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
                      className="h-3 w-3 mr-1 inline"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
            </article>
            <article
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/3 to-blue-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="p-8 relative z-10">
                {" "}
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
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
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-1">
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-600">
                      (5.0)
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight mb-3">
                  {" "}
                  Professional Reliability
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {" "}
                  As a certified mechanic, I need suppliers I can trust. Japan
                  Parts consistently delivers OEM-grade components with proper
                  documentation and fast shipping.
                </p>
                <div className="inline-flex items-center px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-emerald-50 text-emerald-600 border border-emerald-500/20">
                  {" "}
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
                    className="h-3 w-3 mr-2"
                  >
                    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                    <circle cx="6.5" cy="16.5" r="2.5" />
                    <circle cx="16.5" cy="16.5" r="2.5" />
                  </svg>
                  Transmission Filter Kit
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      {" "}
                      <span className="text-gray-900 font-bold text-lg">R</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base leading-tight">
                        Rashida Begum
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
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
                          className="h-3 w-3 mr-1"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx={12} cy={10} r={3} />
                        </svg>
                        Rajshahi, Bangladesh - Certified Mechanic
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        2019 Mazda CX-5
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                    {" "}
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
                      className="h-3 w-3 mr-1 inline"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
            </article>
            <article
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/3 to-blue-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="p-8 relative z-10">
                {" "}
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
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
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-1">
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-600">
                      (5.0)
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight mb-3">
                  {" "}
                  Superior Handling Performance
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {" "}
                  Upgraded my suspension with their OEM struts. The difference
                  in ride quality and handling is remarkable. Authentic parts
                  that deliver professional results.
                </p>
                <div className="inline-flex items-center px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-emerald-50 text-emerald-600 border border-emerald-500/20">
                  {" "}
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
                    className="h-3 w-3 mr-2"
                  >
                    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                    <circle cx="6.5" cy="16.5" r="2.5" />
                    <circle cx="16.5" cy="16.5" r="2.5" />
                  </svg>
                  Strut Assembly Pair
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      {" "}
                      <span className="text-gray-900 font-bold text-lg">K</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base leading-tight">
                        Karim Uddin
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
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
                          className="h-3 w-3 mr-1"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx={12} cy={10} r={3} />
                        </svg>
                        Khulna, Bangladesh - Car Enthusiast
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        2021 Subaru Outback
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                    {" "}
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
                      className="h-3 w-3 mr-1 inline"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
            </article>
            <article
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="absolute inset-0 rounded-xl bg-linear-to-r from-blue-500/3 to-blue-600/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="p-8 relative z-10">
                {" "}
                <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-100 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
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
                    className="h-6 w-6 text-blue-600"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-1">
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
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
                      className="h-5 w-5 transition-colors duration-200 text-blue-500 fill-blue-500"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-600">
                      (5.0)
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight mb-3">
                  {" "}
                  Reliable Parts for Commercial Use
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {" "}
                  Managing a fleet of 25 vehicles, quality parts are essential.
                  Japan Parts has been our trusted supplier for 3 years. Never
                  had a single defective part.
                </p>
                <div className="inline-flex items-center px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-blue-50 text-blue-600 border border-blue-500/20">
                  {" "}
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
                    className="h-3 w-3 mr-2"
                  >
                    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                    <circle cx="6.5" cy="16.5" r="2.5" />
                    <circle cx="16.5" cy="16.5" r="2.5" />
                  </svg>
                  Alternator Assembly
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      {" "}
                      <span className="text-gray-900 font-bold text-lg">N</span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base leading-tight">
                        Nasir Ahmed
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
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
                          className="h-3 w-3 mr-1"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx={12} cy={10} r={3} />
                        </svg>
                        Barisal, Bangladesh - Fleet Manager
                      </div>
                      <div className="text-sm text-gray-400 mt-1">
                        2019 Toyota Hiace
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-700 border border-emerald-500/30 px-3 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                    {" "}
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
                      className="h-3 w-3 mr-1 inline"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
