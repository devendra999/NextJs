import React from 'react'
import style from '../components/about.module.css';

const home = () => {
  return (
    <>
        {/* use for single classname */}
        <header className={style.header}>
            <div className={style.brand_box}>
                <Navbar />
            </div>
            <div className={style.text_box}>
                <div className={style.heading_primary}>
                    Welcome to the next js
                </div>
                {/* use for multiple classnames */}
                  <a href="#" className={`${style.btn} ${style.btn_white} ${style.btn_animated}`}>Thapa Tech</a>
            </div>
        </header>
    </>
  )
}

export default home