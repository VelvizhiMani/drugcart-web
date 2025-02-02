'use client'
 
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

export function Search() {
    const searchParams = useSearchParams()
 
  const username = searchParams.get('username');
  const phone = searchParams.get('phone');
  console.log(username,phone,"SERACH")
  return (
    // You could have a loading skeleton as the `fallback` too
    <>
    <Suspense>
       <h2>Welcome Search Page</h2>
    </Suspense>
    </>
  )
}