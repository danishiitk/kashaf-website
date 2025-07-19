import { Link } from 'react-router-dom';
import { useState } from 'react';
import { personalInfo } from '../constants/personalInfo';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-sky-950 text-white p-3 md:p-5 shadow-md sticky top-0 z-50">
            <nav className="container flex justify-between items-center">
                <Link to="/" className="text-normal font-bold text-lg md:text-xl">{personalInfo.nameTitle}  {personalInfo.firstName} {personalInfo.middleName} {personalInfo.lastName}</Link>

                {/* Hamburger menu button for mobile */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop navigation */}
                <ul className="hidden md:flex space-x-4 flex-grow justify-end">
                    <li><Link to='/' className='hover:text-gray-300'>Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-300">About Me</Link></li>
                    <li><Link to="/education" className="hover:text-gray-300">Education</Link></li>
                    <li><Link to="/teaching-experience" className="hover:text-gray-300">Teaching Experience</Link></li>
                    <li><Link to="/research-publications" className="hover:text-gray-300">Research & Publications</Link></li>      
                    <li><Link to="/skills-expertise" className="hover:text-gray-300">Skills & Expertise</Link></li>
                    <li><Link to="/awards-recognition" className="hover:text-gray-300">Awards & Recognition</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-300">Contact Me</Link></li>
                </ul>
            </nav>

            {/* Mobile navigation (conditionally rendered) */}
            {isOpen && (
                <div className="md:hidden bg-sky-950">
                    <ul className="flex flex-col items-center space-y-2">
                        <li><Link to='/' onClick={toggleMenu} className='block px-4 py-2 hover:bg-sky-800 w-full text-center'>Home</Link></li>
                        <li><Link to="/about" onClick={toggleMenu} className="block px-4 py-2 hover:bg-sky-800 w-full text-center">About Me</Link></li>
                        <li><Link to="/education" onClick={toggleMenu} className="block px-4 py-2 hover:bg-sky-800 w-full text-center">Education</Link></li>
                        <li><Link to="/teaching-experience" onClick={toggleMenu} className="block px-4 py-2 hover:bg-sky-800 w-full text-center">Teaching Experience</Link></li>
                        <li><Link to="/research-publications" onClick={toggleMenu} className="block px-4 py-2 hover:bg-sky-800 w-full text-center">Research & Publications</Link></li>      
                        <li><Link to="/skills-expertise" onClick={toggleMenu} className="block px-4 py-2 hover:bg-sky-800 w-full text-center">Skills & Expertise</Link></li>
                        <li><Link to="/awards-recognition" onClick={toggleMenu} className="block px-4 py-2 hover:bg-sky-800 w-full text-center">Awards & Recognition</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu} className="block px-4 py-2 hover:bg-sky-800 w-full text-center">Contact Me</Link></li>
                    </ul>
                </div>
            )}
        </header>
    );
}
export default Header;