import React, { useEffect, useState } from 'react'
const url = `https://kitsu.io/api/edge/anime?page[limit]=5&sort=-averageRating`

export default function Hero() {
  const [data , setDate] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    sendRequest();
  },[]);

  const sendRequest = async ()=>{
    const data = await fetch(url);
    const respose = await data.json();
    setDate(respose.data);
    setLoading(false);
  }


  return (
    <>
    {
      loading ? 
      <div className='h-[calc(100vh-5rem)] w-full'></div>
      :
      <div className='relative h-[calc(100vh-5rem)] w-full'>
{/* layeye aks */}
        <div className='absolute inset-0 flex justify-center items-center w-full'> 
          <img src={data[0].attributes.posterImage.original} className='w-full h-full object-contain  850:hidden right-0 ' />
          <img src={data[0].attributes.coverImage.original} className='hidden 850:block w-full h-full object-cover' />

        </div>
{/* layeye gradient */}
        <div className='absolute inset-0 bg-linear-to-r from-black via-black/10 to-transparent'></div> 
        <div className='absolute inset-0 bg-linear-to-l from-black via-black/10 to-transparent'></div> 

{/* layeye text */}
          <div className='absolute inset-0 z-10  flex justify-center'>
            <p className='absolute top-8 font-header text-2xl drop-shadow-2xl text-base-content bg-[#0f0f0fb2]  850:text-4xl'>{data[0].attributes.canonicalTitle}</p>
            <button className='absolute btn btn-primary bottom-10 cursor-pointer 850:p-5 850:text-xl font-pop'>watch now</button>
          </div>
      </div>
      }
    </>
    )
}
