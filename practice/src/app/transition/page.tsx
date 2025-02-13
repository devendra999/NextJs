"use client";

import React, { useState, useTransition } from "react";

function UseTranstion() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"]);
  const [isPending, startTransition] = useTransition({
    timeoutMs: 1500
  });

  const handleItemClick = (index) => {
    startTransition(() => {
      setItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems.splice(index, 1);
        return updatedItems;
      });
    });
  };

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => handleItemClick(index)}>
          {item}
        </li>
      ))}
      {isPending && <div>Loading....</div>}
    </ul>
  );
}

export default UseTranstion;