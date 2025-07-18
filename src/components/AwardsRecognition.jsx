import React from 'react';
import { personalInfo } from '../constants/personalInfo';

const AwardsRecognition = () => {
  const { awards, memberships, certifications } = personalInfo.awardsRecognition;

  return (
    <section id="awards" className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Awards & Recognition</h2>

        {/* Awards and Scholarships */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Academic Awards & Scholarships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{award.name}</h4>
                <p className="text-md text-gray-700 mb-1">{award.year}</p>
                <p className="text-md text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Memberships */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Professional Memberships</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {memberships.map((membership, index) => (
              <li key={index}>{membership}</li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Certifications</h3>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;