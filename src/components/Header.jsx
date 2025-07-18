import { Link } from 'react-router-dom'
const Header = ()=>{
    return (
        <header className="bg-sky-950 text-white p-4 shadow-md sticky top-0 z-50 text-auto">
            <nav className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-normal font-bold">Dr. Kashaf Nasreen Siddiqui</Link>
                <ul className="flex space-x-4">
                    <li><Link to='/' className='hover:text-gray-300'>Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
                    <li><Link to="/education" className="hover:text-gray-300">Education</Link></li>
                    <li><Link to="/teaching-experience" className="hover:text-gray-300">Teaching Experience</Link></li>
                    <li><Link to="/research-publications" className="hover:text-gray-300">Research & Publications</Link></li>      
                    <li><Link to="/skills-expertise" className="hover:text-gray-300">Skills & Expertise</Link></li>
                    <li><Link to="/awards-recognition" className="hover:text-gray-300">Awards & Recognition</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;