import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import TeachingExperience from './components/TeachingExperience';
import ResearchPublications from './components/ResearchPublications';
import SkillsExpertise from './components/SkillsExpertise';
import AwardsRecognition from './components/AwardsRecognition';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Hero />
      <About />
      <Education />
      <TeachingExperience />
      <ResearchPublications />
      <SkillsExpertise />
      <AwardsRecognition />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
