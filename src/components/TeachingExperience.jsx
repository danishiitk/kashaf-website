import React from 'react';
import { personalInfo } from '../constants/personalInfo';

const TeachingExperience = () => {
  const teachingPositions = personalInfo.professionalExperience;

  return (
    <section id="teaching" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Teaching Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {teachingPositions.map((position, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">{position.position}</h3>
              <p className="text-xl font-medium text-gray-700 mb-2">{position.institution}</p>
              <p className="text-md text-gray-600 mb-4">{position.period}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Professional Development in Education</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Actively engaged in workshops and seminars on modern pedagogical techniques, educational technology integration, and inclusive teaching practices to continuously enhance teaching effectiveness and student engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeachingExperience;