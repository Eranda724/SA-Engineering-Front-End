// Simple image test component to verify image loading
import React from 'react';

const ImageTest = () => {
  const testImages = [
    "https://picsum.photos/1600/900?random=1",
    "https://picsum.photos/1600/900?random=2", 
    "https://picsum.photos/1600/900?random=3"
  ];

  return (
    <div className="w-full p-4">
      <h3 className="text-xl font-bold mb-4">Image Loading Test</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testImages.map((src, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <img 
              src={src} 
              alt={`Test image ${index + 1}`}
              className="w-full h-48 object-cover"
              onLoad={() => console.log(`Image ${index + 1} loaded successfully`)}
              onError={(e) => console.error(`Image ${index + 1} failed to load:`, e)}
            />
            <p className="p-2 text-sm">Image {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageTest;
