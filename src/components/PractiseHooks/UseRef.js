import { useEffect, useRef } from "react"

const UseRef = () => {
    const inputFocus = useRef()
    useEffect(() => {
        handleFocus()
    }, [])
    const handleFocus = () => {
        inputFocus.current.focus()
    }
    return (
        <>
            <input type="text" ref={inputFocus}/>
        </>
    )
}
export default UseRef;