"use client";

import React, { useState, useLayoutEffect, useEffect } from "react";

const LayoutEffect = () => {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    if (num === 0) setNum(5 + Math.random() * 50);
  }, [num]);
  console.log("🚀 ~ file: LayoutEffect.jsx ~ line 9 ~ LayoutEffect ~ num", num);

  return (
    <>
      <h2>{num}</h2>
      <button onClick={() => setNum(0)}>check</button>
    </>
  );
};

export default LayoutEffect;