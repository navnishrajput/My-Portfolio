import React from "react";
import { experiences } from "../../constants"; 

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[5vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my project experience and the roles I have taken in various projects
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical central line */}
        <div className="absolute left-8 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-center mb-16 w-full ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Blank space for one half on desktop to center the timeline */}
            <div className="hidden sm:block sm:w-1/2"></div>

            {/* Timeline Circle */}
            <div className="absolute left-8 sm:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 shadow-lg">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div 
              className={`w-full sm:w-1/2 pl-20 pr-4 sm:px-0 ${
                index % 2 === 0 ? "sm:pr-12 sm:pl-4" : "sm:pl-12 sm:pr-4"
              }`}
            >
              <div className="w-full p-6 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105">
                
                {/* Flex container for image and text */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 space-y-4 sm:space-y-0">
                  {/* Company Logo/Image */}
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden shrink-0">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Role, Company Name, and Date */}
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                  </div>
                </div>
                
                <p className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed">
                  {experience.desc}
                </p>
                
                <div className="mt-4">
                  <h5 className="font-medium text-white mb-2">Skills:</h5>
                  <ul className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-white px-3 py-1 text-xs sm:text-sm font-semibold rounded-lg border border-purple-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;