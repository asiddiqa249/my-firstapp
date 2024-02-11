import { useEffect, useState } from "react"

const UseEffect3 = () => {
    const [xPosition, setXposition] = useState(0)
    const [yPosition, setYposition] = useState(0);
    useEffect(() => {
        document.addEventListener("mousemove",mouseMoveTrack)
        return () => {
            document.removeEventListener("mousemove", mouseMoveTrack)
        }
    }, [])
    const mouseMoveTrack = (e) => {
        setXposition(e.clientX)
        setYposition(e.clientY);
    }
    return (
      <>
        <h4>UseEffect3 Event Listeners</h4>
        <h5>X position-{xPosition}</h5>
        <h5>Y position-{yPosition}</h5>
      </>
    );
}
export default UseEffect3