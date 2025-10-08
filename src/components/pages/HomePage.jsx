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
const BoilerIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 12l9-7 9 7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 10v10h14V10" />
  </svg>
);

const WaterTreatmentIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 6h16v2H4z" />
    <path d="M6 10v10h12V10" strokeLinecap="round" />
  </svg>
);

const SwimmingPoolIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 7h16v2H4z" />
    <path d="M4 11h16v2H4z" />
    <path d="M4 15h16v2H4z" />
  </svg>
);

const WasteWaterIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 10h14v8H5z" />
    <path d="M12 2v6m0 0l3-3m-3 3L9 5" strokeLinecap="round" />
  </svg>
);

const MachineriesIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 7h16v2H4z" />
    <path d="M6 10v10h12V10" strokeLinecap="round" />
  </svg>
);

const IndustrialIcon = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6h18v2H3z" />
    <path d="M6 10v10h12V10" strokeLinecap="round" />
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
    <Layout pageTitle="Savinda Echo Holdings">
      <div className="w-full flex flex-col">
        {/* First Section: Hero / Carousel */}
        <Carousel />

        {/* Second Section: Text + Image */}
        <section className="w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
                TRY OUR TEAM OF EXPERTS IN <span className="text-blue-600">SRI LANKA</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
                With years of experience in various engineering fields, Savinda Echo Holdings
                offers innovative solutions in boiler systems, water treatment plants, and more.
                We strive for sustainability and excellence in every project.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 text-base sm:text-lg">
                <Feature>Reliable Engineering Service</Feature>
                <Feature>Expertise in Energy Solutions</Feature>
                <Feature>Innovative System Design</Feature>
                <Feature>Highly Skilled Professionals</Feature>
                <Feature>Modern Engineering Practices</Feature>
                <Feature>Committed to Client Satisfaction</Feature>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img
                src="src/assets/home/home_cas_4.jpg"
                alt="Engineering Solutions"
                className="w-full h-[340px] sm:h-[420px] lg:h-[520px] object-cover rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Third Section: Call to action (kept) */}
        <section className="w-full py-16 bg-blue-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Ready to Get Started?</h2>
            <p className="mt-3 text-lg text-gray-600">Contact us today for a free consultation.</p>
            <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-3 text-white font-semibold hover:bg-blue-700 transition">
              Get In Touch <ArrowUpRight />
            </button>
          </div>
        </section>

        {/* ---- Final Two Sections (combined “Services” area) ---- */}
        <section className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            {/* Header */}
            <p className="text-amber-400 font-bold tracking-wide uppercase">Our Services</p>
            <h3 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">
              ALL UNDER ONE <br className="hidden sm:block" /> GONE GOOD ROOF
            </h3>
            <p className="mt-4 max-w-2xl text-gray-300">
              Savinda Echo Holdings offers a variety of essential engineering services, including
              boilers, water treatment, swimming pools, waste-water systems, industrial equipment,
              and more.
            </p>

            {/* Service "tabs" */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <ServiceCard label="Boilers" icon={<BoilerIcon className="h-6 w-6 text-white" />} />
              <ServiceCard label="Water Treatment" icon={<WaterTreatmentIcon className="h-6 w-6 text-white" />} />
              <ServiceCard label="Swimming Pools" icon={<SwimmingPoolIcon className="h-6 w-6 text-white" />} />
              <ServiceCard label="Waste-Water Treatment" icon={<WasteWaterIcon className="h-6 w-6 text-white" />} />
              <ServiceCard label="Machinery Automation" icon={<MachineriesIcon className="h-6 w-6 text-white" />} />
              <ServiceCard label="Industrial Equipment" icon={<IndustrialIcon className="h-6 w-6 text-white" />} />
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
                    We provide professional roof repair works, ensuring quality and longevity for
                    every client.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-start gap-3">
                      <CircledCheckIcon className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span className="text-gray-800">High-quality materials used for repairs.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CircledCheckIcon className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span className="text-gray-800">Expert technicians with years of experience.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CircledCheckIcon className="h-5 w-5 text-amber-500 mt-0.5" />
                      <span className="text-gray-800">Sustainable, long-lasting roof solutions.</span>
                    </li>
                  </ul>

                  <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 transition">
                    Get a Free Quote <ArrowUpRight />
                  </button>
                </div>

                {/* Right image */}
                <div className="relative">
                  <img
                    src="src/assets/home/home_cas_2.jpg"
                    alt="Roof repair detail"
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
