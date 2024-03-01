import { useCallback, useState } from "react"

const UseCallback = () => {
    const [age, setAge] = useState(10)
    const Increment = useCallback(() => {
        setAge(age + 5);
    }, [age])
    return (
        <>
            <h2>Age: {age}</h2>
            <button onClick={Increment}>Increment</button>
        </>
    )
}
export default UseCallback;
