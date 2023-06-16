import React from 'react'

const internalCss = () => {
  return (
    <>
        {/* internal css - work only this components */}

        <h1>hello World</h1>
        <p className='channel'>subscribe to my channel</p>
        <style jsx>
          {`
            h1 { color: red; }
            .channel { color: green; }
          `}
        </style>
        

    </>
  )
}

export default internalCss
