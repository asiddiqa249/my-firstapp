import axios from "axios";
import { useEffect, useState} from "react"

const UseEffect1 = () => {
    const [data, setData] = useState([]);
    const [count,setCount]=useState(0)
    useEffect(() => {
        console.log("useEffect")
        handleLoad()
    }, [])
    
    const handleLoad = () => {
      // api
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => setData(response.data));
    };
    const handleCount = () => {
        setCount(count+1)
    }
    return (
        <>
            <h3>hello UseEffect1</h3>
            <h4>current count{count}</h4>
            <button onClick={handleCount}>Increment</button>
        </>
    )
}
export default UseEffect1