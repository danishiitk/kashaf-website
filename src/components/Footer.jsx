import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg mb-2">&copy; {new Date().getFullYear()} Dr. Kashaf Nasreen Siddiqui. All rights reserved.</p>
        <p className="text-md">Designed with ❤️ and built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;