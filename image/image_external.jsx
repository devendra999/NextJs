import React from 'react'
// import image form next/images
import Image from 'next/image'

const image_external = () => {
  return (
    <>
        <h1>image_external</h1>
        <span>image external means call images from other domain we have define that domain in next.config.js file </span>
        <span>
            {`
                const nextConfig = {
                    reactStrictMode: true,
                    images: {
                        domains: ["images.pexels.com"],
                    }
                }

                module.exports = nextConfig
            `}
        </span>
        <Image
              src="https://images.pexels.com/photos/17217610/pexels-photo-17217610/free-photo-of-man-love-people-relaxation.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={500}
            height={500}
            alt="Picture of the author"
        />
    </>
  )
}

export default image_external