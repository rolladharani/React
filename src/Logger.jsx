    import React, { useState, useEffect } from "react";

    function Logger() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    return (
        <>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    );
    }

    export default Logger;
