import React, { useEffect, useState } from 'react'
const url = `https://kitsu.io/api/edge/anime?page[limit]=20&sort=popularityRank`;
export default function Popular() {
  const [data , setData] = useState([]);
  const [loading , isLoading] = useState(true);
  const sendRequest =async ()=>{
    const request =  await fetch(url);
    const response = await request.json();
    setData(response.data);
    isLoading(false);
  }
  useEffect(()=>{
    sendRequest();
  },[])

  useEffect(()=>{
    console.log(data);
  },[data])

  return (
    <>
    {loading ? 
    <p>vahid yazdani</p>
    :
    <div className='flex flex-col mt-5'>
      <div className='flex  justify-between px-5'>
        <h2 className='text-base-content font-bold font-pop' >Popular</h2>
        <p className='font-semibold font-pop text-primary cursor-pointer hover:underline'>see more</p>
      </div>
       <div className='px-5 flex w-full  flex-nowrap gap-3 overflow-scroll'>
        {
          data.map((item)=>(
            <div className='flex flex-col py-5 w-[50%]  shrink-0 gap-2'>
              <img src={item.attributes.posterImage.original} className='w-full h-50' />
              <p className='text-base-content font-pop text-xs font-bold'>{item.attributes.titles.en}</p>
              <p className='font-pop text-[10px] text-neutral-content font-semibold'>{item.attributes.slug}</p>
            </div>
          ))
        }
       </div>

    </div>
}
    </>
  )
}
