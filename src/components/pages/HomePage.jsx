// src/pages/HomePage.jsx
import { Carousel } from "../ui";
import { Layout } from "../common";

/* ---- Icons ---- */
function CircledCheckIcon({ className = "h-5 w-5 text-amber-500" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M7.5 12.5l3.2 3.2L16.8 9" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
const ArrowUpRight = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Simple inline service icons (lightweight placeholders) */
const RoofIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12l9-7 9 7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 10v10h14V10" />
  </svg>
);
const GutterIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6h18v4H3z" />
    <path d="M6 10v8a3 3 0 0 0 3 3h6" strokeLinecap="round" />
  </svg>
);
const SidingIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="round" />
  </svg>
);
const WindowIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="5" y="5" width="14" height="14" rx="1" />
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const PaintIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 13h10a2 2 0 0 0 2-2V5H6a2 2 0 0 0-2 2v6z" />
    <path d="M14 5v4a2 2 0 0 0 2 2h4" />
    <path d="M14 13v7" />
  </svg>
);
const InsulationIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 20V4M16 20V4" />
  </svg>
);

/* ---- Reusable pieces ---- */
function Feature({ children }) {
  return (
    <div className="flex items-center gap-3">
      <CircledCheckIcon />
      <span className="text-gray-900">{children}</span>
    </div>
  );
}

const ServiceCard = ({ icon, label, highlight = false }) => (
  <button
    className={[
      "group flex items-center gap-3 rounded-xl px-5 py-4 font-semibold shadow-sm transition",
      highlight
        ? "bg-amber-500 text-white hover:bg-amber-600"
        : "bg-blue-900 text-white hover:bg-blue-800",
    ].join(" ")}
    type="button"
  >
    <span className="rounded-lg bg-white/10 p-2">
      {icon}
    </span>
    <span>{label}</span>
  </button>
);

export default function HomePage() {
  return (
    <Layout pageTitle="">
      <div className="w-full flex flex-col">
        {/* First Section: Hero / Carousel */}
        <Carousel />

        {/* Second Section: Text + Image */}
        <section className="w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                TRY OUR TEAM OF EXPERTS IN <span className="text-blue-600">LIVERPOOL</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
                Aliquam rhoncus ut urna ac vulputate. Aenean sit amet mauris tellus.
                Suspendisse a condimentum est. Nulla fringilla interdum velit quis
                vulputate. Quisque mattis, risus ut viverra molestie, ipsum lorem
                tincidunt ante, a tempor ipsum quam non odio.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 text-base sm:text-lg">
                <Feature>Every Job Is Guaranteed</Feature>
                <Feature>Locally Based, Family Run Firm</Feature>
                <Feature>Only High Quality Materials</Feature>
                <Feature>Trusted 5 Star Rated Company</Feature>
                <Feature>Free Estimates For Any Job</Feature>
                <Feature>Insurance Work Undertaken</Feature>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img
                src="https://picsum.photos/800/1200?random=12"
                alt="Modern building exterior"
                className="w-full h-[340px] sm:h-[420px] lg:h-[520px] object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Third Section: Call to action (kept) */}
        {/* <section className="w-full py-16 bg-blue-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Ready to Get Started?</h2>
            <p className="mt-3 text-lg text-gray-600">Contact us today for a free consultation.</p>
            <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition">
              Get In Touch <ArrowUpRight />
            </button>
          </div>
        </section> */}

        {/* ---- Final Two Sections (combined “Services” area) ---- */}
        <section className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            {/* Header */}
            <p className="text-amber-400 font-bold tracking-wide uppercase">Our Services</p>
            <h3 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">
              ALL UNDER ONE <br className="hidden sm:block" /> GONE GOOD ROOF
            </h3>
            <p className="mt-4 max-w-2xl text-gray-300">
              Our roots have always been in roofing, but over the years we&apos;ve evolved
              into a comprehensive home services provider.
            </p>

            {/* Service "tabs" */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <ServiceCard label="Roofing" icon={<RoofIcon className="h-6 w-6 text-white" />} />
              <ServiceCard label="Gutters" icon={<GutterIcon className="h-6 w-6 text-white" />} />
              <ServiceCard label="Siding" icon={<SidingIcon className="h-6 w-6 text-white" />} />
              <ServiceCard label="Windows" icon={<WindowIcon className="h-6 w-6 text-white" />} />
              <ServiceCard label="Painting" icon={<PaintIcon className="h-6 w-6 text-white" />} />
              <ServiceCard label="Insulation" icon={<InsulationIcon className="h-6 w-6 text-white" />} />
            </div>
          </div>

          {/* Light card that sits under the dark band */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden -mt-2">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left content */}
                <div className="p-6 sm:p-10">
                  <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-900">ROOF REPAIR WORKS</h4>
                  <p className="mt-4 text-gray-600">
                    Aliquam rhoncus ut urna ac vulputate. Aenean sit amet mauris tellus.
                    Suspendisse a condimentum est. Nulla fringilla interdum velit quis
                    vulputate.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CircledCheckIcon className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span className="text-gray-800">Aliquam rhoncus ut urna ac vulputate.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CircledCheckIcon className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span className="text-gray-800">Nulla fringilla interdum velit quis vulputate.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CircledCheckIcon className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span className="text-gray-800">Quisque mattis, risus ut viverra molestie.</span>
                    </li>
                  </ul>

                  <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 transition">
                    Get a Free Quote <ArrowUpRight />
                  </button>
                </div>

                {/* Right image */}
                <div className="relative">
                  <img
                    src="src\assets\home\home_roof.jpg"
                    alt="Roof detail"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ---- /Final Two Sections ---- */}
      </div>
    </Layout>
  );
}
