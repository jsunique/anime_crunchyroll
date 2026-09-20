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
        <div className='absolute inset-0'> 
          <img src={data[0].attributes.coverImage.original} className='w-full h-full object-cover bg-center' />
        </div>

        <div className='absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent'></div>
      </div>
      }
    </>
    )
}
