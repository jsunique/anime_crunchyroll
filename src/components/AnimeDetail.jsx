import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
export default function AnimeDetail() {
  const {animeId} = useParams();
  const [data, setData] = useState(null);
  const [isLoading , setIsloading] = useState(true);

  const url = `https://kitsu.io/api/edge/anime/${animeId}`

  const sendRequest = async ()=>{
    const request = await fetch(url);
    const response = await request.json();
    setData(response.data);
    setIsloading(false);
  }
  useEffect(()=>{
    sendRequest();
  },[animeId])


  return (
    <>{
      isLoading ? 
      <p>vahdi yazdani</p>
      :
      <div className='relative h-[calc(100vh-5rem)] w-full'>
{/* layeye aks */}
        <div className='absolute inset-0 block w-full'> 
          <img  src={data.attributes.posterImage.original} className='w-full h-full object-contain  850:hidden right-0   ' />
          <img  src={data.attributes.coverImage.original} className='hidden 850:block w-full h-full object-cover animate-[fadeIn_0.8s_ease-in]' />

        </div>
{/* layeye gradient */}
        <div className='absolute inset-0 bg-linear-to-r from-black via-black/1 to-transparent'></div> 
        <div className='absolute inset-0 bg-linear-to-l from-black via-black/1 to-transparent'></div> 

{/* layeye text */}
      </div>
      }
          </>
  )
}
