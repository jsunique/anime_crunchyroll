import React, { useEffect, useState } from 'react'
export default function AnimeRow({title,url}) {
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
  },[url])

  return (
    <>
    {loading ? 
    <p>vahid yazdani</p>
    :
    <div className='flex flex-col mt-5'>
      <div className='flex  justify-between px-5'>
        <h2 className='text-base-content font-bold font-pop text-2xl' >{title}</h2>
        <p className='font-semibold font-pop text-primary cursor-pointer hover:underline text-2xl'>see more</p>
      </div>
       <div className='px-5 flex w-full  flex-nowrap gap-3 overflow-scroll no-scrollbar'>
        {
          data.map((item)=>(
            <div key={item.id} className='flex flex-col py-5 w-[50%] max-w-52 shrink-0 gap-2 h-100'>
              <img src={item.attributes.posterImage.original} className='w-full h-[70%] max-h-70' />
              <p className='text-base-content font-pop text-xs font-bold sm:text-[16px] sm:font-medium'>{item.attributes.titles.en}</p>
              <p className='font-pop text-[10px] text-neutral-content font-semibold sm:text-[14px]'>{item.attributes.slug}</p>
            </div>
          ))
        }
       </div>

    </div>
}
    </>
  )
}
