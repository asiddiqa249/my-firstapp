import { useState } from "react";
import { useEffect } from "react";

const useCustom = (count) => {
  useEffect(() => {
    document.title = `count : ${count}`;
  }, [count]);
};
export const CustomHook = () => {
    const [count, setCount] = useState(0);
    useCustom(count)
    return (
        <>
            <button onClick={() => { setCount(count + 1) }}>count { count}</button>
        </>
    )
}