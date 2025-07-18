import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      degree: 'PhD in [Subject]',
      institution: '[University]',
      year: '[Year]',
      dissertation: '[Dissertation Title Placeholder]',
      achievements: [
        'Academic Achievement 1',
        'Academic Achievement 2',
      ],
      coursework: [
        'Relevant Coursework 1',
        'Relevant Coursework 2',
      ],
    },
    {
      degree: 'Masters in [Subject]',
      institution: '[University]',
      year: '[Year]',
      achievements: [
        'Academic Achievement 3',
      ],
    },
    {
      degree: 'Bachelors in [Subject]',
      institution: '[University]',
      year: '[Year]',
      achievements: [
        'Academic Achievement 4',
      ],
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Education</h2>
        <div className="relative border-l-4 border-blue-500 ml-4 md:ml-12">
          {educationDetails.map((edu, index) => (
            <div key={index} className="mb-10 ml-6 relative">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-8 top-1 border-2 border-white"></div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{edu.degree}</h3>
              <p className="text-xl font-medium text-gray-700">{edu.institution}, {edu.year}</p>
              {edu.dissertation && (
                <p className="text-md text-gray-600 mt-1">Dissertation: <span className="italic">{edu.dissertation}</span></p>
              )}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-lg font-semibold text-gray-700">Achievements & Honors:</h4>
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    {edu.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-lg font-semibold text-gray-700">Relevant Coursework:</h4>
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    {edu.coursework.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;