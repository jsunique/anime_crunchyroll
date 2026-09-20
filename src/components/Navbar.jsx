import React from 'react'
import logo from '../assets/images/logo.png'
import {Menu , Search , Palette , LogIn } from "lucide-react"
export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 h-20 w-full flex justify-between items-center bg-base-200 '>
      <div className='flex  items-center gap-5 px-4'>
        <Menu size={30} className='text-neutral-content hover:text-base-content cursor-pointer' />
        <img src={logo} className='w-10 h-10 cursor-pointer' />
      </div>

      <div className='flex items-center gap-6 px-4'>
        <Search size={30} className='text-neutral-content hover:text-base-content transition-colors cursor-pointer' />
        <LogIn size={30} className='text-neutral-content hover:text-base-content transition-colors cursor-pointer' />
        <Palette size={30} className='text-neutral-content hover:text-base-content transition-colors cursor-pointer' />
      </div>
    </nav>
  )
}
