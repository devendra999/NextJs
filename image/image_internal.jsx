import React from 'react'
// import image form next/images
import Image from 'next/image'

const image_internal = () => {

    

  return (
    <>
        <h1>image_internal</h1>
        <span>image interanl we can put images in public folder simple</span>
        <Image
            src="/profile.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
        />
    </>
  )
}

export default image_internal