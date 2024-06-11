'use client';

import { useUserContext } from '@/context/userContext';

export default function Home() {
  const { users, isLoading, isError } = useUserContext();
  
  
  console.log(users)
  console.log(isLoading)
  console.log(isError)

  
  

  return (
    <>

      <h1>
        userReducer
      </h1>
      <span>check console</span>

    
    </>
  )
}
