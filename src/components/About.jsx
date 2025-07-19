import React from 'react';
import { personalInfo } from '../constants/personalInfo';
import photo from '../assets/photo.jpeg';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white text-gray-800 h-full">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Left Section: Professional Photo Placeholder */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
            <img src={photo} alt="Professional Photo" className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover shadow-xl border-4 border-blue-200" />
          </div>

          {/* Right Section: Content */}
          <div className="lg:w-2/3 text-lg leading-relaxed">
            <p className="mb-6">
              {personalInfo.about.aboutMe}
            </p>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Teaching Philosophy & Approach</h3>
            <p className="mb-6">
              {personalInfo.about.teachingPhilosophy}
            </p>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Academic Journey & Interests</h3>
            <p className="mb-6">
              {personalInfo.about.academicJourney}
            </p>
            <p>
              {personalInfo.about.professionalDevelopment}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;