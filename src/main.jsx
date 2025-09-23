import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Hook1 from './Hook1.jsx'
import DynamicCard from './DynamicCard.jsx'
import Hook2 from './Hook2.jsx'
// import CARDS from './Cards.jsx'
// import Comp1 from './Component1'
// import Comp2 from './Component2'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hook2 />
  </StrictMode>,
)
