import React from 'react'
import { Search as SearcIcon } from 'lucide-react'
export default function Search() {
  return (
      <>
      <div className='relative h-12 mt-8 w-[80%] max-w-90 mx-auto flex justify-center items-center px-5 rounded-2xl bg-[#92838375]'>
        <input type="text" className='border-none outline-none font-pop text-[18px]  h-full w-full  font-bold pr-10 ' placeholder='Search' />
        <SearcIcon size={25} className='absolute right-8 text-[#e0dbdb]' />
      </div>
      </>
  )
}
