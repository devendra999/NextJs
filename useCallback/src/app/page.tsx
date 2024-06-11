'use client';

import Todos from "@/components/Todos";
import { useCallback, useState } from "react";

export default function Home() {

  const [normalCount, setNormalCount] = useState(0);
  const [count, setCount] = useState(0);

  
  const handleClick = useCallback(() => {
    console.log('callback function call')
    setCount(count + 1);
  }, [count]); 


  const handleClickNoraml = () => {
    setNormalCount(normalCount + 1);
  }
  
  return (
    <>
      <h2>useCallback</h2>
      <span>The React useCallback Hook returns a memoized callback function. The useCallback Hook only runs when one of its dependencies updated.</span>
      <span>Formulla : useCallback(fn, dependencies) </span>
      <hr />
      <hr />
      <br />
      

      <div>
      <p>Callback Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
    <hr />
      <div>
      <p>Normal Count: {normalCount}</p>
      <button onClick={handleClickNoraml}>Increment</button>
    </div>



    </>
  );
}
