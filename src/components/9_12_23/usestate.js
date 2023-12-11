import { useState } from "react";
import "./usestate.css"
const UseState = () => {
    const [circle, setCircle] = useState([])

    const handleClick = () => {
        const newCircle = {
            color:"red"
        }
        setCircle([...circle,newCircle])
    }

    const handleColor = (index) => {
      const newColor = handleRandom();
        setCircle((prevCircle) => {
            prevCircle[index].color=newColor
        return [...prevCircle]});
        
    };

    const handleRandom = () => {
        const letters = "0123456789ABCDEF"
        let color = "#"
        for (let i = 0; i < 6; i++) {
            color+=letters[Math.floor(Math.random()*16)]
            
        }
        return color
    }
    return (
      <>
        {
            circle.map((val,index)=>{
                return (
                    <div key={index} className="circle" onClick={()=>handleColor(index)} style={{backgroundColor:val.color}}></div>
                )
            })
        }
        <button onClick={handleClick}>Click Here</button>
      </>
    );
}
export default UseState;