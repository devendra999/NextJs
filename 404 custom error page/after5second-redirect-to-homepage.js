import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useEffect} from 'react'

const Error = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')    
        }, 5000);
    }, [])
    

    return (
        <>
            <h1>404</h1>
            <h5>Page Not Found</h5>
            <blockquote>
                <strong>Notes: </strong>File name must be 404.js is required. and after 5 second automatic redirect to home page
            </blockquote>
            
            
        </>
    )
}

export default Error
