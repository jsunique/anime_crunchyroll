import React, { useEffect, useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import {Link} from 'react-router'
export default function Search() {
  const [input , setInput] = useState('');
  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);

  const url = `https://kitsu.io/api/edge/anime?filter[text]=${input}&page[limit]=20`;
  const sendRequest = async ()=>{
    const request = await fetch(url);
    const response = await request.json();
    setData(response.data);
    setLoading(false)
  }

  useEffect(()=>{
    if(input===''){
      setData([]);
      return
    }else{
      sendRequest();
    }
  },[input])
  return (
      <>
      
      <div className='relative h-12 mt-8 w-[80%] max-w-90 mx-auto flex justify-center items-center px-5 rounded-2xl bg-[#92838375]'>
        <input onChange={(e)=>setInput(e.target.value)} type="text" className='border-none outline-none font-pop text-[18px]  h-full w-full  font-bold pr-10 ' placeholder='Search' />
        <SearchIcon size={25} className='absolute right-8 text-[#e0dbdb]' />
      </div>
                 <div className='grid grid-cols-2 sm:grid-cols-4 mt-10 lg:grid-cols-5  h-auto'>
              {
                data.slice(1).map(item=>(
              <Link to={`/anime/${item.id}`}  key={item.id} className='flex  w-full flex-col px-3'>
                <img src={item.attributes.posterImage.original} className='w-full aspect-2/3 object-cover' />
                <p className='text-base-content font-pop text-xs font-bold sm:text-[16px] sm:font-medium'>{item.attributes.titles.en}</p>
                <p className='font-pop text-[10px] text-neutral-content font-semibold sm:text-[14px]'>{item.attributes.slug}</p>
              </Link>
                ))
              }
            </div>
      </>
  )
}
