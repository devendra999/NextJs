"use client";

import Header from "@/components/Header";
import React, { useEffect, useState } from "react";

const page = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [headerPosition, setHeaderPosition] = useState(null);

  const handleScroll = () => {
    // Check if the page has been scrolled past the top of the navbar
    if (window.scrollY >= headerPosition) { // Adjust this value based on your needs
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };


  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }; 
  }, [headerPosition]);

  

  return (
    <>
      <div className="container">
        <h2>sticky</h2>

        <div style={{ width: '100%', height: '700px', background: "#f2f2f2" }}></div>
        <Header isSticky={isSticky} setHeaderPosition={setHeaderPosition} />
        <div style={{ width: '100%', height: '700px', background: "#f2f2f2" }}></div>
        <div style={{ width: '100%', height: '700px', background: "#f2f2f2" }}></div>
        <div style={{ width: '100%', height: '700px', background: "#f2f2f2" }}></div>
        <div style={{ width: '100%', height: '700px', background: "#f2f2f2" }}></div>
        <div style={{ width: '100%', height: '700px', background: "#f2f2f2" }}></div>

      </div>
    </>
  );
};

export default page;
