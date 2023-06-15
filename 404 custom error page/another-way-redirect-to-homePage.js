import { useRouter } from 'next/router'

const Error = () => {
  const router = useRouter();
  return (
    <>
        <h1>404</h1>
        <h5>Page Not Found</h5>
        
        <blockquote>
        <strong>Note: </strong> File name must be start with <strong>404.js</strong> is required
        </blockquote>

        <button onClick={() => router.push('/')}>Go back to Home page onclick Way</button>
    </>
  )
}

export default Error
