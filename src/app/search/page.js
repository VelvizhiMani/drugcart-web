'use client'
 
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
 
function Search() {
 const searchParams = useSearchParams()
 
  const username = searchParams.get('username');
  const phone = searchParams.get('phone');
  console.log(username,phone,"SERACH")
  return <input placeholder="Search..." />
}
 
export function Searchbar() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Search />
    </Suspense>
  )
}