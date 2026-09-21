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
      <>
      <div className='relative h-[calc(100vh-5rem)] w-full'>
        <div className='absolute inset-0 block w-full'> 
          <img  src={data.attributes.posterImage.original} className='w-full h-full object-contain  850:hidden right-0   ' />
          <img  src={data.attributes.coverImage.original} className='hidden 850:block w-full h-full object-cover animate-[fadeIn_0.8s_ease-in]' />

        </div>
        <div className='absolute inset-0 bg-linear-to-r from-black via-black/1 to-transparent'></div> 
        <div className='absolute inset-0 bg-linear-to-l from-black via-black/1 to-transparent'></div> 
      </div>

      <div className='flex flex-col mx-auto max-w-6xl px-5 py-10'>
        <p className='text-primary text-center text-2xl font-header mt-3 sm:text-3xl md:text-5xl'>{data.attributes.canonicalTitle}</p>
      <p className='text-center px-10 font-pop sm:font-medium md:font-bold mx-auto mt-5 max-w-4xl leading-7 text-white/70'>{data.attributes.synopsis}</p>
      </div>
      <div className='flex flex-wrap items-center gap-4 justify-center'>
        <span className='badge badge-primary font-pop'>{data.attributes.averageRating}</span>
        <span className='badge badge-primary font-pop'>{data.attributes.subtype}</span>
        <span className='badge badge-primary font-pop'>{data.attributes.episodeCount}</span>
        <span className='badge badge-primary font-pop'>{data.attributes.status}</span>
        <span className='badge badge-primary font-pop'>{data.attributes.startDate}</span>
        <span className='badge badge-primary font-pop'>{data.attributes.endDate}</span>
      </div>
      </>
      }

          </>
  )
}
