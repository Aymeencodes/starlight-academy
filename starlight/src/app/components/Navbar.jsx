"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState , useEffect, useContext } from 'react'
import { Dropdown } from "flowbite-react";
import { UserContext } from '../context/userContext';
import axios from 'axios';

function Navbar() {
  const {currentUser} = useContext(UserContext)
  const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
      const fetchuser = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/users/${currentUser?.id}`)
          setIsAdmin(response.data.isAdmin)
        } catch (err) {
          console.log(err)
        }

      }
      fetchuser()
    }, [])

  
  return (
    <nav className='  flex items-center justify-between max-container padding-container container relative  z-30 py-5'>
        <Link href={"/"}>
            <Image  src="/images/starlight.png" alt="logo" width={98} height={1} />            
        </Link>
{  currentUser?.id &&   <ul className=' hidden h-full gap-12 lg:flex '>
                <li>
                    <a className=' regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold' href="/#home">Home</a>
                </li>
                <li>
                    <a className=' regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold' href="/#about">About</a>
                </li>
                <li>
                    <a className=' regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold' href="/#services">Services</a>
                </li>
                <li>
                    <a className=' regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold' href="/#reviews">Reviews</a>
                </li>
                <li>
                <Dropdown label="Blog" inline>
      <Dropdown.Item href='/blog' className='regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>Blog</Dropdown.Item>
      <Dropdown.Item href='/logout' className='regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>log out</Dropdown.Item>
{  isAdmin ?   <Dropdown.Item href='/create' className='regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>create Post</Dropdown.Item> : <></>
}
    </Dropdown>
    </li>
            </ul>}
            {  !currentUser?.id &&   <ul className=' hidden h-full gap-12 lg:flex '>
                <li>
                    <a className=' regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold' href="/#home">Home</a>
                </li>
                <li>
                    <a className=' regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold' href="/#about">About</a>
                </li>
                <li>
                    <a className=' regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold' href="/#services">Services</a>
                </li>
                <li>
                    <a className=' regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold' href="/#reviews">Reviews</a>
                </li>
                <li>
                <Dropdown label="Blog" inline>
      <Dropdown.Item href='/blog' className='regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>Blog</Dropdown.Item>
      <Dropdown.Item href='/signIn' className='regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>Sign up</Dropdown.Item>
      <Dropdown.Item href='/login' className='regular-16 text-blue-800 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>Login</Dropdown.Item>
</Dropdown>
    </li>
            </ul>}
            <div className=' lg:flexCenter hidden'>
                <a href='#contact' className=' flexCenter gap-3 rounded-full border btn_dark_green'>Contact now</a>
            </div>
            <label className="  lg:hidden  swap swap-rotate">
  <div className=' drawer'>
  {/* this hidden checkbox controls the state */}
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />

    <div className=' drawer-content'>
  {/* hamburger icon */}
  <label htmlFor="my-drawer" className=" drawer-button">
  <svg   className=" fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    {currentUser?.id &&  <ul className="menu  p-4 pt-12 w-80 min-h-full bg-purple-900 text-white">
      {/* Sidebar content here */}
      <li><a href='/#home'>Home</a></li>
      <li><a href='/#about'>About</a></li>
      <li><a href='/#services'>Services</a></li>
      <li><a href='/#reviews'>Reviews</a></li>
      <li><a href='/#contact'>Contact</a></li>
      <li>
                <Dropdown label="Blog" inline>
      <Dropdown.Item href='/blog' className='regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>Blog</Dropdown.Item>
      <Dropdown.Item href='/logout' className='regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>log out</Dropdown.Item>
{   isAdmin ?    <Dropdown.Item href='/create' className='regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>create Post</Dropdown.Item> : <></>
}  
    </Dropdown>
    </li>      
    </ul>}
    {!currentUser?.id &&  <ul className="menu  p-4 pt-12 w-80 min-h-full bg-purple-900 text-white">
      {/* Sidebar content here */}
      <li><a href='/#home'>Home</a></li>
      <li><a href='/#about'>About</a></li>
      <li><a href='/#services'>Services</a></li>
      <li><a href='/#reviews'>Reviews</a></li>
      <li><a href='/#contact'>Contact</a></li>
      
      <li>
                <Dropdown label="Blog" inline>
      <Dropdown.Item href='/blog' className='regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>Blog</Dropdown.Item>
      <Dropdown.Item href='/signIn' className='regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>Sign up</Dropdown.Item>
      <Dropdown.Item href='/login' className='regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>Login</Dropdown.Item>
    </Dropdown>
    </li>      
    </ul>}
    
  </div>
  </div>
  {/* close icon */}
  
</label>
    </nav>
  )
}

export default Navbar
