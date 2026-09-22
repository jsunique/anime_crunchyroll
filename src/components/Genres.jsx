import React,{useState , useEffect} from 'react'
import { useParams } from 'react-router'
import {Link } from 'react-router'

export default function Genres() {
  const {genresName} = useParams();
  const [data , setData] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const [page , setPage] = useState(1);
  const url = `https://kitsu.io/api/edge/anime?filter[categories]=${genresName}&page[limit]=20&page[offset]=${page * 20}&sort=-averageRating`;
    useEffect(()=>{
      sendRequest();
    },[page]);
    const sendRequest = async()=>{
      const request = await fetch(url);
      const response = await request.json();
      setData(response.data);
      setIsLoading(false);
    }
  
    const handleIncrease = ()=>{
      setPage(prev=>prev+1)
    }
    const handleDecrease = ()=>{
      setPage(prev=>Math.max(prev-1 , 1))
    }


  return (
    <>
    {
      isLoading ? 
      <p>vhaid yazdani</p>
      :
      <>
            <div className='relative h-[calc(100vh-5rem)] w-full '>
        <div className='absolute inset-0 block w-full opacity-40'> 
          <img  src={data[0].attributes.posterImage.original} className='w-full h-full object-contain  850:hidden right-0 ' />
          <img  src={data[0].attributes.coverImage.original} className='hidden 850:block w-full h-full object-cover animate-[fadeIn_0.8s_ease-in]' />

        </div>
        <div className='absolute inset-0 bg-linear-to-r from-black via-black/1 to-transparent'></div> 
        <div className='absolute inset-0 bg-linear-to-l from-black via-black/1 to-transparent'></div>



      <div className='absolute flex flex-col mx-auto w-full top-1'>
        <p className='text-primary text-center text-2xl font-header mt-3 sm:text-3xl md:text-5xl'>{data[0].attributes.canonicalTitle}</p>
      <p className='text-center px-10 font-pop text-xs sm:font-medium md:font-bold mx-auto mt-5 h-56.5 overflow-hidden '>{data[0].attributes.synopsis}</p>
      </div>
      <div className='bottom-5  absolute flex flex-wrap gap-4 w-full justify-center '>
        <span className='badge badge-primary font-pop'>{data[0].attributes.averageRating}</span>
        <span className='badge badge-primary font-pop'>{data[0].attributes.subtype}</span>
        <span className='badge badge-primary font-pop'>{data[0].attributes.episodeCount}</span>
        <span className='badge badge-primary font-pop'>{data[0].attributes.status}</span>
        <span className='badge badge-primary font-pop'>{data[0].attributes.startDate}</span>
        <span className='badge badge-primary font-pop'>{data[0].attributes.endDate}</span>
      </div>
      </div>

      <div className='flex mt-8 gap-3  flex-col mb-25'>
        <p className='text-center text-primary font-pop sm:text-xl  md:text-2xl  '>MORE POPULAR ANIME</p>
              <div className='grid grid-cols-2 sm:grid-cols-4  lg:grid-cols-5  h-auto'>
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
      <div className='flex w-full justify-center items-center gap-3'>
        <button onClick={handleDecrease} className='btn rounded-[100%] h-10 w-10 font-pop text-[23px] bg-primary text-base-100 hover:bg-[#e2b626]'>-</button>
        <p className='text-2xl font-pop'>{page}</p>
        <button onClick={handleIncrease} className='btn rounded-[100%] h-10 w-10 font-pop text-[23px] bg-primary text-base-100 hover:bg-[#e2b626]'>+</button>
      </div>
      </div>
      </>
    }
    </>
  )
}
