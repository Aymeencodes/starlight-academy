"use client"
import React , {useContext,useEffect} from 'react'
import { UserContext } from '../context/userContext'
import { useRouter } from 'next/navigation';
function Page() {
    const router = useRouter();

const {setcurrentUser} = useContext(UserContext)
setcurrentUser(null)
router.push('/login')
  return (
    <>
    </>
  )
}

export default Page
