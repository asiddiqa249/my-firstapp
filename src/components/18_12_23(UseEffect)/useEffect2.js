import { useEffect, useState } from "react"

const UseEffect2 = () => {
    const [title,setTitle]=useState(0)
    useEffect(() => {
        document.title=`current title ${title}`
     }, [title])
    const handleTitle = () => {
        setTitle(title+1)
    }
    return (
        <>
            <h1>UseEffect2 DOM manipulation</h1>
            <h4>Current title {title}</h4>
            <button onClick={handleTitle}>Update Title</button>
        </>
    )
}
export default UseEffect2