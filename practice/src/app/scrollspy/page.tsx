// pages/index.js
"use client";

import React, { useEffect } from 'react';

const page = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav a');

      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop - 50 && window.pageYOffset < sectionTop + sectionHeight - 50) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to highlight the section on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav>
        <ul>
          <li><a href="#section1">Section 1</a></li>
          <li><a href="#section2">Section 2</a></li>
          <li><a href="#section3">Section 3</a></li>
        </ul>
      </nav>

      {/* Sections */}
      <section id="section1" className="section  bg-red-200">
        <h1>Section 1</h1>
        <p>This is section 1.</p>
      </section>
      <section id="section2" className="section bg-blue-200">
        <h1>Section 2</h1>
        <p>This is section 2.</p>
      </section>
      <section id="section3" className="section bg-yellow-100">
        <h1>Section 3</h1>
        <p>This is section 3.</p>
      </section>
    </div>
  );
}


export default page