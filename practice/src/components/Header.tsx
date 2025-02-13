import React, { useEffect, useRef, useState } from 'react'

const Header = ({isSticky, setHeaderPosition}) => {
  const [headerHeight, setheaderHeight] = useState(0);
  const headerRef = useRef();

 
  useEffect(() => {
    setheaderHeight(headerRef.current.offsetHeight);
    setHeaderPosition(headerRef.current.offsetTop);
  }, [])





  

  return (
    <>
        <div className="wrapped-div" style={{ height: `${headerHeight}px` }}>
          <div ref={headerRef} className={`header ${isSticky ? 'sticky' : ''}`}>
              <ul>
                  <li><a href="#">home</a></li>
                  <li><a href="#">about</a></li>
                  <li><a href="#">products</a></li>
                  <li><a href="#">inquiry</a></li>
                  <li><a href="#">contact</a></li>
              </ul>
          </div>
        </div>
    </>
  )
}

export default Header