"use client";
import React, { useState, useEffect, useRef } from 'react';

const page = () => {
  const [activeSection, setActiveSection] = useState('');

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    contact: useRef(null),
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport
    for (const section in sectionRefs) {
      if (
        sectionRefs[section].current &&
        sectionRefs[section].current.offsetTop < scrollPosition &&
        sectionRefs[section].current.offsetTop + sectionRefs[section].current.clientHeight > scrollPosition
      ) {
        setActiveSection(section);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='container'>
      <nav className='fixed'>
        <ul>
          <li className={activeSection === 'home' ? 'active' : ''}>
            <a href="#home">Home</a>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a href="#about">About</a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
        <div style={{ width: '100%', height: '700px', display: 'block' }}></div>
      <section id="home" ref={sectionRefs.home}>
        <h1>Home Section</h1>
      </section>
      <section id="about" ref={sectionRefs.about}>
        <h1>About Section</h1>
      </section>
      <section id="contact" ref={sectionRefs.contact}>
        <h1>Contact Section</h1>
      </section>
    </div>
  );
};

export default page;
