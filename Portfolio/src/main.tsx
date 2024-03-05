import React from 'react'
import ReactDOM from 'react-dom/client'
import Landing from './Landing.tsx'
import About from "./components/About.tsx"
import Contact from "./components/Contact.tsx"
import "./styles/styles.css"



function Main() {
  return (
    <div id="root">
      <Landing />
      <About />
      <Contact />
    </div>
  );
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Main/>
  </React.StrictMode>,
)
