import { personalInfo } from '../constants/personalInfo';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="hero" className="relative bg-sky-800 text-white flex items-center justify-center overflow-hidden flex-grow h-full md:py-12">
      {/* Subtle background animation/pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        {/* Placeholder for a subtle SVG pattern or animation */}
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="rgba(255,255,255,0.2)" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center z-10 h-full">
        {/* Left Section: Text Content */}
        <div className="text-center lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3 animate-fade-in-up">
            {personalInfo.nameTitle} {personalInfo.firstName} {personalInfo.middleName} {personalInfo.lastName}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-4 animate-fade-in-up animation-delay-200">
            {personalInfo.title}
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-lg mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
            {personalInfo.introduction}
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-3 animate-fade-in-up animation-delay-600">
            <a href="/src/assets/cv.pdf" download={`${personalInfo.firstName}_${personalInfo.lastName}_CV.pdf`}>
              <button className="bg-white text-blue-800 hover:bg-blue-100 px-6 py-2 rounded-full text-base font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
                Download CV
              </button>
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 px-6 py-2 rounded-full text-base font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Section: Headshot Placeholder */}
        <div className="mb-0 lg:w-1/2 flex justify-center lg:justify-center animate-fade-in-right animation-delay-800">
          <img src="/src/assets/photo.jpeg" alt="Professional Headshot" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-blue-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;