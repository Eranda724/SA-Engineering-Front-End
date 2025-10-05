// src/pages/HomePage.jsx
import { Carousel } from "../ui";
import { Layout } from "../common";

/* ---- Reusable circled-check icon (inherits currentColor) ---- */
function CircledCheckIcon({ className = "h-6 w-6 text-amber-500" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M7.5 12.5l3.2 3.2L16.8 9"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---- One feature row ---- */
function Feature({ children }) {
  return (
    <div className="flex items-center gap-3">
      <CircledCheckIcon />
      <span className="text-gray-900 font-medium">{children}</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <Layout pageTitle="">
      <div className="w-full flex flex-col">
        {/* First Section: Hero / Carousel */}
        <Carousel />

        {/* Second Section: Text + Image */}
        <section className="w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Heading + Copy + Bullets */}
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                TRY OUR TEAM OF EXPERTS IN{" "}
                <span className="text-blue-600">LIVERPOOL</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
                Aliquam rhoncus ut urna ac vulputate. Aenean sit amet mauris
                tellus. Suspendisse a condimentum est. Nulla fringilla interdum
                velit quis vulputate. Quisque mattis, risus ut viverra
                molestie, ipsum lorem tincidunt ante, a tempor ipsum quam non
                odio.
              </p>

              {/* Bullets */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 text-base sm:text-lg">
                <Feature>Every Job Is Guaranteed</Feature>
                <Feature>Locally Based, Family Run Firm</Feature>
                <Feature>Only High Quality Materials</Feature>
                <Feature>Trusted 5 Star Rated Company</Feature>
                <Feature>Free Estimates For Any Job</Feature>
                <Feature>Insurance Work Undertaken</Feature>
              </div>
            </div>

            {/* Right: Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src="https://picsum.photos/800/1200?random=12"
                  alt="Modern building exterior"
                  className="w-full h-[340px] sm:h-[420px] lg:h-[520px] object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Third Section: Call to action */}
        <section className="w-full py-16 bg-blue-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              Contact us today for a free consultation.
            </p>
            <button className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition">
              Get In Touch
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
