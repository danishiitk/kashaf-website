import React from 'react';
import { personalInfo } from '../constants/personalInfo';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">About Me</h2>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Left Section: Professional Photo Placeholder */}
          <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
            <img src="/src/assets/photo.jpeg" alt="Professional Photo" className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover shadow-xl border-4 border-blue-200" />
          </div>

          {/* Right Section: Content */}
          <div className="lg:w-2/3 text-lg leading-relaxed">
            <p className="mb-6">
              As a <span className="font-semibold text-blue-700">PhD holder in English from {personalInfo.university}</span>, I bring a rigorous academic background and a passion for education to the forefront. My doctoral research focused on <span className="font-semibold text-blue-700">Indian literature</span>, equipping me with advanced analytical and critical thinking skills.
            </p>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Teaching Philosophy & Approach</h3>
            <p className="mb-6">
              My teaching philosophy centers on fostering an interactive and inclusive learning environment. I believe in empowering students to become independent thinkers and problem-solvers. I utilize a blend of theoretical knowledge and practical application, encouraging active participation and critical discourse in the classroom.
            </p>
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Academic Journey & Interests</h3>
            <p className="mb-6">
              My academic journey has been driven by a deep curiosity and commitment to scholarly excellence. Beyond my core research, I am keenly interested in <span className="font-semibold text-blue-700">reading novels</span> and <span className="font-semibold text-blue-700">public speaking</span>, which enrich my perspective and inform my teaching.
            </p>
            <p>
              I am dedicated to continuous professional development and staying abreast of the latest pedagogical advancements to ensure my students receive the most current and effective education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;