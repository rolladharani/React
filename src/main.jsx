import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import CARDS from './Cards.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CARDS />
  </StrictMode>,
)
