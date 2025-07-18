import { personalInfo } from '../constants/personalInfo';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="hero" className="relative h-screen bg-sky-900 text-white flex items-center justify-center overflow-hidden">
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

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between z-10">
        {/* Left Section: Text Content */}
        <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            Dr. {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-200 mb-6 animate-fade-in-up animation-delay-200">
            {personalInfo.title}
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up animation-delay-400">
            "Empowering minds through knowledge and fostering a passion for lifelong learning."
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-600">
            <a href="/src/assets/cv.pdf" download={`${personalInfo.firstName}_${personalInfo.lastName}_CV.pdf`}>
              <button className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                Download CV
              </button>
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Section: Headshot Placeholder */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-right animation-delay-800">
          <img src="/src/assets/photo.jpeg" alt="Professional Headshot" className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-blue-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;