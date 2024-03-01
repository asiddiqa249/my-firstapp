import React, { useMemo } from "react";
import { useState } from "react";

const UseMemo = () => {
    const [count, setCount] = useState(0)
    const squaredValue = useMemo(() => {
        console.log("squared value is");
        return count * count;
    }, [count])
    return (
        <>
            <p>count: {count}</p>
            <p>{squaredValue}</p>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </>
    )
}
export default UseMemo;