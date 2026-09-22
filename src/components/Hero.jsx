import React, { useEffect, useState } from 'react'
import {ArrowRight , ArrowLeft} from 'lucide-react'
import {Link} from 'react-router'
const url = `https://kitsu.io/api/edge/anime?page[limit]=5&sort=-averageRating`

export default function Hero() {
  const [data , setDate] = useState([]);
  const [loading , setLoading] = useState(true);
  const [currentSlider , setCurrentSlider] = useState(0);

  useEffect(()=>{
    sendRequest();
  },[]);

  
  useEffect(()=>{
   const timer =  setInterval(() => {
      setCurrentSlider(prev =>{
        if(prev === data.length-1){
          return 0
        }
        return prev + 1 
      });
    }, 5000);
      return()=> clearInterval(timer)

  },[data.length])

  const sendRequest = async ()=>{
    const data = await fetch(url);
    const respose = await data.json();
    setDate(respose.data);
    setLoading(false);
  }
  const nextSlider = ()=>{
    if(currentSlider < data.length-1){
      setCurrentSlider(prev=> prev + 1)
    }else {
    setCurrentSlider(0);
    }
  }

  const prevSlider = ()=>{
    if(currentSlider > 0){
      setCurrentSlider(prev=> prev-1)
    }
    else {
    setCurrentSlider(data.length-1);
    }
  }


  return (
    <>
    {
      loading ?       
      <div className='flex justify-center h-screen w-full items-center'> 
        <span className="loading loading-spinner loading-lg "></span>
      </div>
      :
      <div className='relative h-[calc(100vh-5rem)] w-full'>
{/* layeye aks */}
        <div className='absolute inset-0 block w-full'> 
          <img  src={data[currentSlider].attributes.posterImage.original} className='w-full h-full object-contain  850:hidden right-0   ' />
          <img  src={data[currentSlider].attributes.coverImage.original} className='hidden 850:block w-full h-full object-cover animate-[fadeIn_0.8s_ease-in]' />

        </div>
{/* layeye gradient */}
        <div className='absolute inset-0 bg-linear-to-r from-black via-black/1 to-transparent'></div> 
        <div className='absolute inset-0 bg-linear-to-l from-black via-black/1 to-transparent'></div> 

{/* layeye text */}
          <div className='absolute inset-0 z-10  flex justify-center '>
            <p className='absolute top-8 font-header text-xl drop-shadow-2xl text-base-content bg-[#0f0f0fb2]  850:text-4xl'>{data[currentSlider].attributes.canonicalTitle}</p>
            <Link to={`anime/${data[currentSlider].id}`}>
            <button className='absolute left-1/2 -translate-x-1/2 btn btn-primary bottom-10 cursor-pointer 850:p-5 850:text-xl font-pop'>watch now</button>
            </Link>
            <button onClick={nextSlider} className='absolute  p-2 bg-white/10 rounded-[100%] right-10 top-1/2 backdrop-blur-xl border border-white/20 cursor-pointer'>
              <ArrowRight strokeWidth={3} size={25} className='text-white font-bold' /></button>
            <button onClick={prevSlider} className='absolute  p-2 bg-white/10 rounded-[100%] left-10 top-1/2 backdrop-blur-xl border border-white/20 cursor-pointer'><ArrowLeft strokeWidth={3} size={25} className='text-white font-bold' /></button>
          </div>
      </div>
      }
    </>
    )
}
