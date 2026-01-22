import React from "react";
import { certificates } from "../../constants"; // Import from your constants file

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative bg-[#050414]" 
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATES</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          achievements and certifications
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="relative group rounded-2xl overflow-hidden border border-gray-800 shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-purple-500/30"
          >
            {/* Image Container */}
            <div className="w-full h-full aspect-[4/3] bg-gray-900">
              <img
                src={cert.image}
                alt={cert.title || `Certificate ${cert.id}`}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;