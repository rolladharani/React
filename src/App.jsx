import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstName from './FirstName'
import LastName from './LastName'
import Email from './Email'
import PhoneNumber from './PhoneNumber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FirstName />
      <LastName />
      <Email />
      <PhoneNumber   />
    </>
  )
}
export default App
