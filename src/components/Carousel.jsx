// Custom Carousel Component
import React, { useState, useEffect } from "react";

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1497436072909-f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      title: "Engineering Excellence",
      description: "We provide world-class engineering solutions with innovative approaches and cutting-edge technology to meet your project needs.",
      buttonText: "Learn More"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1506748686214-5e2b7ec8422f?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5MnwwfDF8c2VhcmNofDk1fHxmb3Jlc3R8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&q=80&w=1080",
      title: "Sustainable Solutions",
      description: "Committed to environmental responsibility and sustainable engineering practices for a better tomorrow.",
      buttonText: "Our Services"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      title: "Expert Team",
      description: "Our experienced professionals bring decades of expertise to deliver exceptional results for every project.",
      buttonText: "Meet Our Team"
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleImageError = (slideId) => {
    setImageErrors(prev => ({ ...prev, [slideId]: true }));
  };

  return (
    <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
      {/* Slides Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {imageErrors[slide.id] ? (
              <div className="h-full w-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🏗️</div>
                  <h3 className="text-2xl font-bold">{slide.title}</h3>
                </div>
              </div>
            ) : (
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
                onError={() => handleImageError(slide.id)}
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                  {slide.description}
                </p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all z-10 border-2 border-white border-opacity-30 hover:border-opacity-60"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all z-10 border-2 border-white border-opacity-30 hover:border-opacity-60"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all border-2 ${
              index === currentSlide 
                ? 'bg-white border-white shadow-lg' 
                : 'bg-transparent border-white border-opacity-60 hover:border-opacity-80 hover:bg-white hover:bg-opacity-20'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
