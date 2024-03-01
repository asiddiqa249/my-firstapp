import React, { useReducer } from "react";
const ReducerFunc = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(ReducerFunc, {count: 0})
    const handleIncrement = () => {
        dispatch({type:"INCREMENT"})
    }
    const handleDecrement = () => {
      dispatch({ type: "DECREMENT" });
    };
    const handleReset = () => {
      dispatch({ type: "RESET" });
    };
    return (
        <>
            <h3>{state.count}</h3>
            <button onClick={handleIncrement}>Increment</button >
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )
}
export default UseReducer;