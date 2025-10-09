import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Hook1 from './Hook1.jsx'
import DynamicCard from './DynamicCard.jsx'
import Hook2 from './Hook2.jsx'
import SearchingCards from './SearchingCards.jsx'
import ToDo from './ToDo.jsx'
import Routing from './Routing.jsx'
import ProductCards from './ProductCards.jsx'
import Productinfo from './Productinfo.jsx'
import IMGPATHS from './IMGPATHS.jsx'
import IMGPATHS2 from './IMGPATHS2.jsx'
import { BrowserRouter } from 'react-router-dom'
// import CARDS from './Cards.jsx'
// import Comp1 from './Component1'
// import Comp2 from './Component2'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
