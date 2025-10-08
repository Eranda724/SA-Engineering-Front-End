// src/pages/HomePage.jsx
import { useState } from "react";
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

const ServiceCard = ({ icon, label, onClick, highlight = false }) => (
  <button
    className={[
      "group flex items-center gap-3 rounded-xl px-5 py-4 font-semibold shadow-sm transition",
      highlight
        ? "bg-amber-500 text-white hover:bg-amber-600"
        : "bg-blue-900 text-white hover:bg-blue-800",
    ].join(" ")}
    onClick={onClick}
    type="button"
  >
    <span className="rounded-lg bg-white/10 p-2">{icon}</span>
    <span>{label}</span>
  </button>
);

export default function HomePage() {
  const [selectedService, setSelectedService] = useState(null);

  const serviceDetails = {
    Boiler: {
      title: "Boiler Systems",
      description:
        "We offer comprehensive services for steam boilers, thermic heaters, pre-fabricated chimneys, and hot water generators. Our installation and maintenance services ensure efficiency and sustainability.",
      image: "src/assets/home/home_dy1.jpg",
    },
    "Water Treatment": {
      title: "Water Treatment Plants",
      description:
        "Our expertise includes softeners, reverse osmosis, desalination, and brackish water filtration. We design, install, and maintain efficient water treatment systems.",
      image: "src/assets/home/home_dy2.jpg",
    },
    "Swimming Pools": {
      title: "Swimming Pools & Spas",
      description:
        "We design and install swimming pools and spas, including pool filters, chemical treatments, and full maintenance services for residential and commercial properties.",
      image: "src/assets/home/home_dy3.jpg",
    },
    "Waste-Water Treatment": {
      title: "Waste-Water Treatment",
      description:
        "Effluent and sewage treatment plants, zero discharge solutions, and chemical treatments. We design and implement sustainable water treatment systems.",
      image: "src/assets/home/home_dy4.jpg",
    },
    "Machinery Automation": {
      title: "Machinery Automation",
      description:
        "We offer solutions for control panels, PLCs, PCBs, pneumatic and hydraulic control panels, as well as machine manufacturing and modifications.",
      image: "src/assets/home/home_dy5.jpg",
    },
    "Industrial Equipment": {
      title: "Industrial Equipment & Machineries",
      description:
        "We supply and install electrical and mechanical equipment, lubricants, and chemicals. Our team also provides equipment assembly, modifications, and consulting services.",
      image: "src/assets/home/home_dy6.jpg",
    },
  };

  const handleServiceClick = (service) => {
    setSelectedService(serviceDetails[service]);
  };

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
                EXPERT ENGINEERING SERVICES IN <span className="text-blue-600">SRI LANKA</span>
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl">
                Savinda Echo Holdings provides a range of engineering solutions. Explore our services
                for boilers, water treatment, swimming pools, and more.
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

        {/* Services Section with dynamic content */}
        <section className="w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <p className="text-amber-400 font-bold tracking-wide uppercase">Our Services</p>
            <h3 className="mt-2 text-4xl sm:text-5xl font-extrabold leading-tight">Explore Our Expertise</h3>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.keys(serviceDetails).map((service) => (
                <ServiceCard
                  key={service}
                  label={service}
                  icon={<BoilerIcon className="h-6 w-6 text-white" />}
                  onClick={() => handleServiceClick(service)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Display Service Details Dynamically */}
        {selectedService && (
          <section className="w-full py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Service description */}
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                  <p className="mt-4 text-gray-600">{selectedService.description}</p>
                </div>

                {/* Right: Service Image */}
                <div>
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-[340px] sm:h-[420px] lg:h-[520px] object-cover rounded-3xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
