import React from 'react'

export default function Login() {
  return (
    <>
    <div className='w-full flex flex-col justify-center  h-[calc(100vh-5rem)] relative'>
      <div className='w-[80%] max-w-100 mx-auto h-100 rounded-4xl flex-col flex absolute left-1/2 -translate-x-1/2  z-10 bg-white/10 backdrop-blur-2xl border border-white/20 items-center gap-5'>
      <p className='mt-10 font-header text-black text-2xl'>Login form</p>
      <input type="text" placeholder='username' className='text-black w-[90%] max-w-60 h-10 mt-5 px-3 mx-5 border-2 bg-black placeholder:text-white focus:border-none focus:outline-none font-pop  focus:text-white border-primary rounded-2xl' />
      <input type="text" placeholder='password' className='text-black w-[90%] max-w-60 font-pop   h-10 mt-5 px-3 mx-5 border-2 bg-black placeholder:text-white focus:border-none focus:outline-none focus:text-white border-primary rounded-2xl' />
      <button className='btn btn-primary'>REGISTER</button>
      </div>
      <img src='https://media.kitsu.app/anime/50629/cover_image/dda13e3cca39ac4340d15933ae9cb7f7.jpg'
      className='w-full h-30 bg-center object-cover object-bottom ' />
      <img src='https://media.kitsu.app/anime/49240/cover_image/b3d01e59bb588122c6c8691880aa3b1b.jpg'
      className='w-full h-40 bg-center object-cover object-center' />
      <img src='https://media.kitsu.app/anime/46474/cover_image/883c308356a4db76a9c0af900ada96ed.jpg'
      className='w-full h-40 bg-center object-cover object-center' />
    </div>
    </>

    )
}
