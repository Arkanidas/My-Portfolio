import { Routes, Route } from 'react-router-dom';
import Fullpages, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import About from "./components/About";
import Contact from "./components/Contact.tsx";
import Landing from "./Landing.tsx";
import Projects from './components/Projects.tsx';
import "./styles/landingstyle.css";



export default function Fullpage() {
  return (
    <div className="scrollable-section">
      <Fullpages>
        <FullpageNavigation />
        <FullPageSections>

          {/* Landing Section */}
          <FullpageSection>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </FullpageSection>

          {/* About Section */}
          <FullpageSection>
            <About />
          </FullpageSection>

          {/* Contact Section */}
          <FullpageSection>
            <Contact />
          </FullpageSection>

        </FullPageSections>
      </Fullpages>
    </div>
  );
}