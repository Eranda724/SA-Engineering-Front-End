import React from "react";
import { Layout } from "../common";
import sustainableImage from '../../assets/EngService/sustainable.jpg';
import { Link } from "react-router-dom"; // Import Link

const SustainablePage = () => {
  return (
    <Layout pageTitle="Sustainability">
      {/* HERO */}
      <section
        className="relative min-h-[80vh] grid place-items-center text-center"
        style={{
          backgroundImage: "url(" + sustainableImage + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Sustainable hero"
      >
        {/* green gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-700/90 via-emerald-700/75 to-emerald-800/60" />

        {/* content */}
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]">
            Sustainable
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-white/95 text-lg md:text-xl leading-relaxed font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] font-poppins">
            Our sustainable projects focus on eco-friendly design, energy
            efficiency, and long-lasting infrastructure. We integrate green
            building materials, renewable energy solutions, and modern
            engineering practices to minimize environmental impact. Every
            project is carefully planned to balance economic growth with
            environmental responsibility, ensuring a cleaner, safer future for
            communities.
          </p>

          {/* Corrected Link component for navigation */}
          <Link
            to="/construction-projects"  
            className="mt-10 inline-flex items-center justify-center px-8 py-3 rounded-full bg-emerald-400 hover:bg-emerald-300 active:bg-emerald-500 text-emerald-950 font-semibold shadow-lg transition"
          >
            Sustainable projects
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default SustainablePage;
