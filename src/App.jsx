    import { useState } from 'react'
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    // import './App.css'
    import './Cards.css'
    import FirstName from './FirstName'
    import LastName from './LastName'
    import Email from './Email'
    import PhoneNumber from './PhoneNumber'
    import DOB from './DOB'
    import Gender from './Gender'
    import Comp1 from './Component1'
    import Comp2 from './Component2'

    function App() {
      const [count, setCount] = useState(0)
      var data=[
        {
          "name":"THUB",
          varient:"green"
        },
        {
          "name":"aditya",
          varient:"red"
        },
        {
          "name":"Pragati",
          varient:"red"
        }
      ];
    
        return(
          <>
            <div className="parent">
        {
        data.map((ele) => (
          <div className={ele.varient == "green" ? "card bg-green" : "card bg-red"}>
            {ele.name}
          </div>
        ))
        }
      </div>

          </>
        )
    }
    export default App
