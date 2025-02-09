import { Routes, Route } from 'react-router-dom';
import Fullpages, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import About from "./components/About";
import Contact from "./components/Contact.tsx";
import Landing from "./Landing.tsx";
import Projects from './components/Projects.tsx';
import "./styles/landingstyle.css";



export default function Fullpage() {




  return (
    <Routes>
      {/* FullPage Sections */}
      <Route path="/" element={
          <div className="scrollable-section">
            <Fullpages>
              <FullpageNavigation />
               <FullPageSections>

               {/* Landing Section */}
                <FullpageSection>
                  <Landing />
                </FullpageSection>

               {/* About Section */}
                <FullpageSection>
                  <About />
                </FullpageSection>

               {/* About Section */}    
                <FullpageSection>
                  <Contact />
                </FullpageSection>

              </FullPageSections>
            </Fullpages>
          </div>
        }
      />
      
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}