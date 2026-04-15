import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FashionHub from './FashionHub.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FashionHub />
  </StrictMode>,
)
