import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <ul>
        <li>
            <Link href="/home">
                  Home
            </Link>
        </li>
        <li>
            <Link href="/about">
                  About
            </Link>
        </li>
        <li>
            <Link href="/contact">
                  Contact
            </Link>
        </li>
        <li>
            <Link href="/product">
                  Product
            </Link>
        </li>
    </ul>
  )
}

export default Navbar