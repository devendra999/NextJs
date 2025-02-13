import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <>
        <Link href={'/hoc'}><button>HOC</button></Link>
        <Link href={'/scroll'}><button>Scroll</button></Link> 
        <Link href={'/sticky'}><button>sticky</button></Link> 
        <Link href={'/tabs'}><button>tabs</button></Link> 
        <Link href={'/accordion'}><button>accordion</button></Link> 
        <Link href={'/carousel'}><button>carousel</button></Link> 
        <Link href={'/collapse'}><button>collapse</button></Link> 
        <Link href={'/dropdown'}><button>dropdown</button></Link> 
        <Link href={'/scrollspy'}><button>scrollspy</button></Link> 
        <Link href={'/transition'}><button>transition</button></Link> 
        <Link href={'/ssg'}><button>SSG</button></Link> 
        <Link href={'/ssr'}><button>SSR</button></Link> 
        <Link href={'/uselayout'}><button>uselayout</button></Link> 
        <Link href={'/js-cookies'}><button>js-cookies</button></Link> 
        <Link href={'/interview1'}><button>list Select all</button></Link> 
        <Link href={'/interview2'}><button>list Select all-INT</button></Link> 
        <Link href={'/interview3DependDropdown'}><button>DependDropdown-INT</button></Link> 
        <Link href={'/category-change'}><button>Trello Category Change-INT</button></Link> 
    </>
  )
}

export default page