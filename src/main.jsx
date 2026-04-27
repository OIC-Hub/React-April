import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FashionHub from './FashionHub.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
    <FashionHub />
    </BrowserRouter>
  // </StrictMode>,
)
