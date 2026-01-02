    import React from 'react'
    import { useState } from 'react'
    import { useContext } from 'react'
    import "./TypingMaster.css"

    function TypingMaster() {
    return (
        <div>
            <h1 className="Headi">Typing Master</h1>
            <div className="Level">
                <button>Easy</button>
                <button>Intermediate</button>
                <button>Hard</button>
            </div>
        
        </div>
    )
    }

    export default TypingMaster
