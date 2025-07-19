
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../constants/personalInfo';
import { emailJsData } from './api/emailJs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      emailjs.sendForm(emailJsData.serviceId, emailJsData.templateId, e.target, emailJsData.publicKey)
        .then((result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.');
        });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Contact Information</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Get in Touch</h3>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Email:</span> <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">{personalInfo.email}</a>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Phone:</span> <a href={`tel:${personalInfo.phone}`} className="text-blue-600 hover:underline">{personalInfo.phone}</a>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">LinkedIn:</span> <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{personalInfo.linkedinUrl.split('/').slice(-2, -1)[0] || personalInfo.linkedinUrl}</a>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">ResearchGate:</span> <a href={personalInfo.researchGateUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Research Gate</a>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Location:</span> <a href={`https://www.google.com/maps/search/?api=1&query=${personalInfo.latitude},${personalInfo.longitude}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{personalInfo.address}</a>
            </p>
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-semibold">Office Hours:</span> {personalInfo.officeHours}
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Send a Message</h3>
            {isSubmitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline"> Your message has been sent.</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-800 transition duration-300 ease-in-out shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;