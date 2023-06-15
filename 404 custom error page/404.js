import Link from 'next/link'
import React from 'react'

const Error = () => {
  return (
    <>
        <h1>404</h1>
        <h5>Page Not Found</h5>
        
        <blockquote>
        <strong>Note: </strong> File name must be start with <strong>404.js</strong> is required
        </blockquote>

        <Link href="/">Go back to Home page</Link>
    </>
  )
}

export default Error