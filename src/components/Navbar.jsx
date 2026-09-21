import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.png'
import {Menu , Search , Palette , LogIn  , X} from "lucide-react"
import {Link} from "react-router"



export default function Navbar() {

  const [hamburgerMenu , setHamburgerMenu] = useState(false);
  const handleClick = ()=>{
    setHamburgerMenu(!hamburgerMenu);
  }
  useEffect(()=>{
    document.body.style.overflow = hamburgerMenu ? "hidden" : "auto";
    return ()=>{
      document.body.style.overflow = "auto";
    }
  },[hamburgerMenu])
  return (


<>
    <nav className='sticky top-0 z-50 h-20 w-full flex justify-between items-center bg-base-200 '>
      <div className='flex  items-center gap-5 px-4  sm:hidden'>
        {
          hamburgerMenu ? 
          <>
            <X onClick={handleClick} size={33} className='text-neutral-content hover:text-base-content cursor-pointer' />
            <div className='flex flex-col absolute top-20 w-[50%] h-[calc(100vh-5rem)] bg-base-200 left-0'>
              <Link to='/all' className='text-base-content font-pop font-semibold text-xl px-4 py-4 hover:text-primary'>Anime</Link>
              <Link to='/toprated' className='text-base-content font-pop font-semibold text-xl px-4 py-4 hover:text-primary'>Top rated</Link>
              <Link to='/genres' className='text-base-content font-pop font-semibold text-xl px-4 py-4 hover:text-primary'>Genres</Link>
            </div>
          </>
          :
            <Menu onClick={handleClick} size={33} className='text-neutral-content hover:text-base-content cursor-pointer' />
        }
        <Link to='/'>
        <img src={logo} className='w-10 h-10 cursor-pointer' />
        </Link>
      </div>
      <div className='hidden  items-center gap-5 px-4  sm:flex'>
        <div className='flex items-center gap-2'>
          <Link to='/'>
          <img src={logo} className='w-10 h-10 cursor-pointer' />
          </Link>
          <Link to="/all" className='text-base-content font-pop font-semibold text-xl px-4 py-4 hover:text-primary'>Anime</Link>
          <Link to="/toprated" className='text-base-content font-pop font-semibold text-xl px-4 py-4 hover:text-primary'>Top rated</Link>
          <Link to="/genres" className='text-base-content font-pop font-semibold text-xl px-4 py-4 hover:text-primary'>Genres</Link>
        </div>
      </div>
      <div className='flex items-center gap-6 px-4  sm:gap-10 md:gap-15'>
        <Link to='/login'>
        <LogIn size={33} className='text-primary hover:text-base-content transition-colors cursor-pointer' />
        </Link>
        <Link to="/search">
        <Search size={33} className='text-neutral-content hover:text-base-content transition-colors cursor-pointer' />
        </Link>
        <Palette size={33} className='text-neutral-content hover:text-base-content transition-colors cursor-pointer' />
      </div>
    </nav>
</>

  )
}
