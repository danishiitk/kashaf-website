import React from 'react';

import { personalInfo } from '../constants/personalInfo';

const Education = () => {
  const educationDetails = personalInfo.education;

  // Placeholder for academic achievements and coursework, as they are not in the provided CV data
  // You would need to manually add these if they are to be displayed.
  // For example, you could extend the education objects in personalInfo.js with these fields.
  // For now, they are omitted to reflect the provided data accurately.



  return (
    <section id="education" className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Education</h2>
        <div className="relative border-l-4 border-blue-500 ml-4 md:ml-12">
          {educationDetails.map((edu, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-8 top-1 border-2 border-white"></div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{edu.degree}</h3>
              <p className="text-xl font-medium text-gray-700">{edu.institution}, {edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;