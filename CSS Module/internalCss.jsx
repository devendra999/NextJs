import React from 'react'

const internalCss = () => {
  return (
    <>
        {/* internal css - work only this components */}

        <h1>hello World</h1>
        <style jsx>
          {`
            h1 { color: red; }
          `}
        </style>
        

    </>
  )
}

export default internalCss
