import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import "./styles/landingstyle.css"
import Fullpage from "./Fullpage.tsx"




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Fullpage/>
    </BrowserRouter>
  </React.StrictMode>,
)
