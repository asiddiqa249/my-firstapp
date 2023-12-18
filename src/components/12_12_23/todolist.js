import { useState } from "react"

const Todo = () => {
    const [list, setList] = useState([])
    const [input,setInput]=useState("")
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const newList = [...list, `${input} ${list.length+1}`]
        setList(newList)
        setInput("")
        console.log(newList);
    }
    const removeAll = () => {
        setList([])
    }
    const removeItem = (ind) => {
        const newList = list.filter((item, i) => i!= ind)
        setList(newList)
    }
    return (
      <>
        <h2>Todo Listing</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleChange}/>
          <button type="Submit">Submit</button>
        </form>
        <button onClick={removeAll}>Remove All</button>
        {
                list.length > 0 ? list.map((e, ind) =>
                    <>
                        <ul key={ind}>
                            <li>{e}</li>
                        </ul>
                        <button onClick={()=>removeItem(ind)}>Remove item</button>
                    </>) : <h2>no todos</h2>
        }
      </>
    );
}
export default Todo