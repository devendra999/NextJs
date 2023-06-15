import { useRouter } from 'next/router'
import React from 'react'

const pageNo = () => {

    // use useRouter for dynamic nested page
    const router = useRouter();
    const pageNumber = router.query.pageNo;

  return (
      <h1>My blog no is : {pageNumber}</h1>
  )
}

export default pageNo