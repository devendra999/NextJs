"use client";

import React, { useRef, useEffect, useState } from "react";

const page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    const stickyTop = stickyRef?.current?.offsetTop;
    const containerTop = containerRef?.current?.offsetTop;
    
    const handleScroll = (e) => {
      const stickyTop = stickyRef?.current?.offsetTop;
      const containerTop = containerRef?.current?.offsetTop;
      let actualScroll = stickyTop - containerTop;
      if (e?.target?.scrollTop >= actualScroll) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll(); // Initialize the sticky state

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }

  }, []);

  return (
    <div className="container">
      <h2>Inside div sticky</h2>

      <div
        style={{ width: "100%", height: "700px", background: "#f2f2f2" }}
      ></div>
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "500px",
          background: "#1cb8ff",
          position: 'relative',
          overflow: "auto",
        }}
      >
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div style={{ position: 'relative' }} ref={stickyRef}>
        <div className={isSticky ? 'header-sticky' : ''}>
          <h3>header sticky</h3>
        </div>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
        <div>
          <h3>header</h3>
        </div>
      </div>
      <div
        style={{ width: "100%", height: "700px", background: "#f2f2f2" }}
      ></div>
      <div
        style={{ width: "100%", height: "700px", background: "#f2f2f2" }}
      ></div>
      <div
        style={{ width: "100%", height: "700px", background: "#f2f2f2" }}
      ></div>
      <div
        style={{ width: "100%", height: "700px", background: "#f2f2f2" }}
      ></div>
    </div>
  );
};

export default page;
