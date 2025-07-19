import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import TeachingExperience from "./components/TeachingExperience";
import ResearchPublications from "./components/ResearchPublications";
import SkillsExpertise from "./components/SkillsExpertise";
import AwardsRecognition from "./components/AwardsRecognition";
import Contact from "./components/Contact";
import { personalInfo } from "./constants/personalInfo";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Hero /> },
        { path: "about", element: <About /> },
        { path: "education", element: <Education /> },
        { path: "teaching-experience", element: <TeachingExperience /> },
        { path: "research-publications", element: <ResearchPublications /> },
        { path: "skills-expertise", element: <SkillsExpertise /> },
        { path: "awards-recognition", element: <AwardsRecognition /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ],
  { basename: '/kashaf-website' }
);


document.title = personalInfo.nameTitle + " " + personalInfo.firstName + " " + personalInfo.middleName + " " + personalInfo.lastName;
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
