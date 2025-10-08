import React from "react";
import { Layout } from "../common";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ConstructionProjectsPage = () => {
  const projectsData = [
    {
      title: "Colombo Smart City Project",
      date: "October 2025",
      description:
        "A modern urban infrastructure project aimed at transforming Colombo into a smart city with IoT-based traffic management, waste handling, and sustainable housing developments. SA Engineering is handling the civil and systems integration aspects with eco-friendly materials and smart sensors.",
      images: [
        "/images/project/project1_1.jpg",
        "/images/project/project1_2.jpg",
        "/images/project/project1_3.jpg",
      ],
    },
    {
      title: "Northern Highway Expansion",
      date: "September 2025",
      description:
        "SA Engineering is leading the expansion of the northern expressway network to improve connectivity between major provinces. This project focuses on reducing travel time by up to 40% while maintaining high safety and quality standards across all segments.",
      images: [
        "/images/project/project2_1.jpg",
        "/images/project/project2_2.jpg",
        "/images/project/project2_3.jpg",
      ],
    },
    {
      title: "Hydroelectric Power Plant Upgrade",
      date: "August 2025",
      description:
        "Upgrading the Mahaweli hydro plant with next-generation turbines and real-time monitoring systems to enhance efficiency and reduce environmental impact. The upgraded facility will provide more sustainable power to the national grid.",
      images: [
        "/images/project/project3_1.jpg",
        "/images/project/project3_2.jpg",
        "/images/project/project3_3.jpg",
      ],
    },
  ];

  return (
    <Layout pageTitle="Construction Projects">
      {/* Banner Section */}
      <div className="flex items-center justify-center h-64 bg-gradient-to-r from-orange-700 to-yellow-500 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Construction Projects</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 space-y-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Ongoing & Completed Projects
        </h2>

        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
          >
            {/* Image Slider Section */}
            <div className="md:w-1/2 w-full">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="w-full h-72 md:h-96"
              >
                {project.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      //alt={`Slide ${idx}`}
                      className="w-full h-72 md:h-96 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 w-full p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{project.date}</p>
              <p className="text-gray-600 text-justify leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ConstructionProjectsPage;
