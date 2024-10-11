

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
function Pixel() {
  const [ data , setData] =  useState([])
  const [ Lood , setLood] =  useState(false)

  async  function getGames(){
setLood(true)
        const data = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games', {
            params:{
                 category: 'pixel'
            },
            headers:{
         'x-rapidapi-key': 'fdf592197fmsh49af612db81dfb4p1067f7jsn323c487becaa',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        })
        setData(data.data)
        console.log(data.data);
        setLood(false)
      
        
    }
    useEffect(()=>{
getGames()
    },[]) 


   


  return (
    <>
   {Lood?<Loading/> :  <div className="container mx-auto px-14">
    <div  className=" grid   xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2   mx-auto   sm:gap-4">
    {data?.map(( gam , id)=>{
        return(
            <>
          
            <Link to={`/games/${gam.id}`} key={id} className="max-w-sm  border p-3 box     border-gray-800 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700">
 
    <img className="rounded-t-lg" src={gam.thumbnail} alt={gam.thumbnail} />
  
  <div className="py-2 mx-2 flex items-center justify-between">
    <div className="">
    <p className="mb-3  text-white text-sm ">{gam.title}</p>
    </div>
    <div className="">
        <span className=' bg-gray-700 text-sm text-white py-1 px-3  rounded-md hover:bg-sky-700'>free</span>
    </div>
   
    
  </div>
  <div className=" text-center py-2">
    <p className=' text-gray-400 text-sm py-2'>{gam.developer}</p>
    <p className='text-gray-400 text-sm line-clamp-1 '>{gam.short_description}</p>
  </div>

  <div className="p-2 mx-2 flex items-center justify-between border border-spacing-1 border-gray-900">
    <div className="">
    <p className=" font-normal line-clamp-1 text-white bg-gray-700  px-3 text-sm  rounded-md ">{gam.genre}</p>
    </div>
    <div className="">
        <span className=' bg-gray-700 text-white  line-clamp-1 px-3 text-sm  rounded-md'>{gam.platform}</span>
    </div>
   
    
  </div>
</Link>

           
         




            
            
            
            </>
        )
    })}
   
    
    
   </div>
    </div>}
    
    </>
  
  )
}

export default Pixel