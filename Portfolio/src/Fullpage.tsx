import Fullpages, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';
import About from "./components/About";
import Contact from "./components/Contact.tsx"
import Landing from "./Landing.tsx"
import "./styles/styles.css"
import styled from 'styled-components';

export default function Fullpage() {








  return (
    <div>
     
      <Fullpages>
    <FullpageNavigation />
     <FullPageSections>


      
       <FullpageSection>
         <Landing/>
      
       </FullpageSection>

       <FullpageSection>
         <About/>
       </FullpageSection>

       <FullpageSection>
         <Contact/>
       </FullpageSection>

     

</FullPageSections>


      </Fullpages>

      
    </div>
  )
}
