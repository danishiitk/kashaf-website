import React from 'react';
import { personalInfo } from '../constants/personalInfo';

const Footer = () => {
  return (
    <footer className="bg-sky-950 mt-0 text-white py-2 md:py-4 sticky bottom-0 z-50">
      <div className="container mx-auto px-2 md:px-6 text-center">
        <p className="text-sm md:text-base mb-1">&copy; {new Date().getFullYear()} {personalInfo.nameTitle} {personalInfo.firstName} {personalInfo.middleName} {personalInfo.lastName}. All rights reserved.</p>
        <p className="text-xs md:text-sm">Designed with ❤️ by Danish Ahmad</p>
      </div>
    </footer>
  );
};

export default Footer;