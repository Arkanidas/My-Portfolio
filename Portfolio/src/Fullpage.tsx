import Fullpages, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';
import About from "./components/About";
import Contact from "./components/Contact.tsx"
import Landing from "./Landing.tsx"
import "./styles/styles.css"


export default function Fullpage() {




  return (
    <div className="scrollable-section">
     
      <Fullpages>
    <FullpageNavigation/>
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
