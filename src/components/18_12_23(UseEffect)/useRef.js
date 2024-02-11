import { useEffect, useRef } from "react"

const UseRef = () => {
    const inputFocus = useRef()
    useEffect(() => {
        handleFocus()
    },[])
    const handleFocus = () => {
        inputFocus.current.focus()
    }
    return (
      <>
        <p>UseRef example</p>
        <input type="text" ref={inputFocus} />
        <button onClick={handleFocus}>Click</button>
      </>
    );
}
export default UseRef