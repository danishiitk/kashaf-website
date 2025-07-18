import React from 'react';

const SkillBar = ({ skill, percentage }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-lg font-medium text-gray-700">{skill}</span>
      <span className="text-md font-medium text-gray-600">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

const SkillsExpertise = () => {
  const subjectSkills = [
    { name: '[Subject Area 1]', level: 95 },
    { name: '[Subject Area 2]', level: 90 },
    { name: '[Subject Area 3]', level: 85 },
  ];

  const teachingTechSkills = [
    { name: 'Learning Management Systems (LMS)', level: 90 },
    { name: 'Online Collaboration Tools', level: 85 },
    { name: 'Presentation Software', level: 95 },
  ];

  const researchMethodologySkills = [
    { name: 'Qualitative Research', level: 90 },
    { name: 'Quantitative Research', level: 85 },
    { name: 'Data Analysis & Interpretation', level: 88 },
  ];

  const languageSkills = [
    { name: 'English', level: 100 },
    { name: 'Urdu', level: 90 },
    { name: 'Arabic', level: 70 },
  ];

  const technicalSkills = [
    { name: 'Microsoft Office Suite', level: 95 },
    { name: 'Statistical Software (e.g., SPSS, R)', level: 80 },
    { name: 'Academic Databases', level: 90 },
  ];

  return (
    <section id="skills-expertise" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Subject Matter Expertise */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Subject Matter Expertise</h3>
            {subjectSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} percentage={skill.level} />
            ))}
          </div>

          {/* Teaching Technologies & Tools */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Teaching Technologies & Tools</h3>
            {teachingTechSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} percentage={skill.level} />
            ))}
          </div>

          {/* Research Methodologies */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Research Methodologies</h3>
            {researchMethodologySkills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} percentage={skill.level} />
            ))}
          </div>

          {/* Languages Spoken */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Languages Spoken</h3>
            {languageSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} percentage={skill.level} />
            ))}
          </div>

          {/* Technical Skills */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} percentage={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExpertise;