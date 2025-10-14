    import React from 'react'
    import CountUp from 'react-countup'
    import Tilty from 'react-tilty'
    import IMG from './assets/react.svg'
    import Confetti from 'react-confetti'
    // import BouncingBoxes from 'bouncing-boxes-react';

    function Addon() {
    return (
    //   <CountUp  />
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', fontsize:'40px' }}>
    {/* <CountUp style={{ color: 'red', fontSize: '40px', fontWeight: 'bold' }} end={3000} duration={5} /> */}
      <Tilty>
        <img src={IMG} alt='React-IMG' height={400} ></img>
    </Tilty>
    <Confetti numberOfPieces={100}
    // gravity={10}
    />
    </div>
  

    )
    }

    export default Addon
