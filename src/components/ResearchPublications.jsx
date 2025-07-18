import React from 'react';

const ResearchPublications = () => {
  const publications = [
    {
      title: 'Published Paper Title 1: [Academic Journal]',
      authors: 'Siddiqui, K. N., et al.',
      journal: '[Journal Name]',
      year: 'YYYY',
      link: '#',
    },
    {
      title: 'Published Paper Title 2: [Academic Journal]',
      authors: 'Siddiqui, K. N., et al.',
      journal: '[Journal Name]',
      year: 'YYYY',
      link: '#',
    },
  ];

  const conferences = [
    {
      title: 'Conference Presentation Title 1',
      conference: '[Conference Name]',
      year: 'YYYY',
      location: '[City, Country]',
    },
    {
      title: 'Conference Presentation Title 2',
      conference: '[Conference Name]',
      year: 'YYYY',
      location: '[City, Country]',
    },
  ];

  return (
    <section id="research-publications" className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">Research & Publications</h2>

        {/* PhD Research Summary */}
        <div className="mb-12 p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">PhD Research Summary</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            My doctoral research at <span className="font-semibold">[University]</span> focused on <span className="font-semibold">[Academic Area]</span>, exploring <span className="italic">[brief description of research problem/question]</span>. This involved <span className="italic">[mention key methodologies, e.g., extensive qualitative analysis, quantitative modeling, experimental design]</span>, leading to significant contributions in <span className="font-semibold">[specific field/sub-field]</span>. The findings provided novel insights into <span className="italic">[briefly state impact or key discovery]</span>.
          </p>
        </div>

        {/* Published Papers */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Published Papers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{pub.title}</h4>
                <p className="text-md text-gray-700 mb-1">{pub.authors}</p>
                <p className="text-md text-gray-600 mb-3"><em>{pub.journal}</em>, {pub.year}</p>
                <a href={pub.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                  View Publication &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Presentations */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6">Conference Presentations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {conferences.map((conf, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{conf.title}</h4>
                <p className="text-md text-gray-700 mb-1">{conf.conference}</p>
                <p className="text-md text-gray-600">{conf.year}, {conf.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Interests & Future Directions */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Research Interests & Future Directions</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            My primary research interests lie in <span className="font-semibold">[Area 1]</span>, <span className="font-semibold">[Area 2]</span>, and <span className="font-semibold">[Area 3]</span>. I am particularly keen on interdisciplinary approaches that bridge <span className="italic">[Field A]</span> and <span className="italic">[Field B]</span>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            In the future, I aim to expand my research into <span className="font-semibold">[New Area/Topic]</span>, focusing on <span className="italic">[specific goals or questions]</span>, and collaborating with scholars to address pressing challenges in academia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchPublications;