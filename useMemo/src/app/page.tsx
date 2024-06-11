'use client';

import { useMemo, useState } from "react";

export default function Home() {
  const [normalNumber, setNormalNumber] = useState(0);
  const [number, setNumber] = useState(0);
    
  // Define a memoized value using useMemo
  const squaredNumber = useMemo(() => {
    console.log("Calculating squared number...");
    return number * number;
  }, [number]); // Recalculate only when 'number' changes
  
  return (
    <>
      <h2>memo</h2>
      <span>Memo lets you skip re-rendering a component when its props are unchanged.</span>
      <hr />
      <hr />
      <br />
      <br />

      <h2>useMemo hook </h2>
      <span>The React useMemo Hook returns a memoized value. The useMemo Hook only runs when one of its dependencies is updated.
</span>
      <hr />
      <br />
      <br />
      <br />
      <div>
        <h2>Normal Number: {normalNumber}</h2>
        <button onClick={() => setNormalNumber(prev => prev + 1)}>Increment Number</button>
        
      </div>

      <div>
        <h2>Number: {number}</h2>
        <button onClick={() => setNumber(prev => prev + 1)}>Increment Number</button>
        <h2>Squared Number: {squaredNumber}</h2>
      </div>
    </>
  );
}
