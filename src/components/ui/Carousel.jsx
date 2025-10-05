// Custom Carousel Component
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const slides = [
    {
      id: 1,
      image: "https://picsum.photos/1600/900?random=1",
      title: "Engineering Excellence",
      description: "We provide world-class engineering solutions with innovative approaches and cutting-edge technology to meet your project needs.",
      buttonText: "Learn More"
    },
    {
      id: 2,
      image: "https://picsum.photos/1600/900?random=2",
      title: "Sustainable Solutions",
      description: "Committed to environmental responsibility and sustainable engineering practices for a better tomorrow.",
      buttonText: "Our Services"
    },
    {
      id: 3,
      image: "https://picsum.photos/1600/900?random=3",
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

  const handleImageError = (slideId, imageSrc) => {
    console.log(`Error loading image for slide ${slideId}: ${imageSrc}`);
    setImageErrors(prev => ({ ...prev, [slideId]: true }));
  };

  const handleImageLoad = (slideId) => {
    console.log(`Successfully loaded image for slide ${slideId}`);
    setImageErrors(prev => ({ ...prev, [slideId]: false }));
  };

  return (
    <div className="relative w-full h-[700px] rounded-xl overflow-hidden">
      {/* Slides Container */}
      
      <div className="relative h-full ">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 border-2 border-red-500 ${
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
                onError={() => handleImageError(slide.id, slide.image)}
                onLoad={() => handleImageLoad(slide.id)}
                loading="eager"
              />
            )}
            {/* Temporarily commented out overlay to test image visibility */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
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
            </div> */}
          </div>
        ))}
      </div>
      {/* Test image - uncomment to test if images load outside carousel */}
      {/* <img src="https://picsum.photos/1600/900?random=1" alt="Test image" className="w-full h-32 object-cover" /> */}
      

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

export default Carousel;
