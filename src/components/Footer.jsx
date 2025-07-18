import React from 'react';
import { personalInfo } from '../constants/personalInfo';

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white py-8 sticky bottom-0 z-50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg mb-2">&copy; {new Date().getFullYear()} Dr. {personalInfo.firstName} {personalInfo.lastName}. All rights reserved.</p>
        <p className="text-md">Designed with ❤️ by Danish Ahmad</p>
      </div>
    </footer>
  );
};

export default Footer;