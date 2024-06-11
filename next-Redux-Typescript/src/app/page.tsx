import Link from "next/link";

export default function Home() {
  
  return (
    <>
      <h1>Welcome to home page</h1>
      <button><Link href={'/posts'}>Goto Redux page</Link></button>
    </>
  )
}
