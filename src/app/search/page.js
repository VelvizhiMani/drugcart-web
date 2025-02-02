'use client';
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const Search = () => {
    const searchParams = useSearchParams()
 
    const username = searchParams.get('username');
    const phone = searchParams.get('phone');
    console.log(username,phone,"SERACH")
  return (
    <>
    <Suspense>
       <h2>Welcome Search Page</h2>
    </Suspense>
    </>
  )
}

export default Search