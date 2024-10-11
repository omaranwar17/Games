import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import { useNavigate, useParams } from 'react-router-dom'


function Games() {
 const {id} =  useParams()
 console.log(id);
 const navget = useNavigate()
 
    const [data , setData ] = useState([])
    const [Lood , setLood ] = useState(false)
    const [remove , setRemove ] = useState(false)
async function getGames(id){
  setLood(true)
    const data = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game`,{
      params:{
id:id
      },
    
       headers:{
    'x-rapidapi-key': 'fdf592197fmsh49af612db81dfb4p1067f7jsn323c487becaa',
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
       }
    })
    console.log(data);
    setData(data.data)
    setLood(false)
}




useEffect(()=>{
getGames(id)
},[])

function roemove(){

  setLood(false)
  navget('/')

}



  return (
    <>
 {Lood? <Loading/> :    <div className="container flex py-12 md:py-0  gap-10 justify-center px-14 mx-auto w-full">

  
    <div  className="   w-1/3  ">

    <div className=" py-3 ">
    <p className=' text-gray-100 text-2xl '>Details Game</p>
  </div>
  <img className="object-cover w-full h-60    rounded-lg" src={data.thumbnail} alt />
 
</div>

<div className="    w-2/3 ">
<div className=" ps-40 lg:ps-96 md:ms-40   ">
<i onClick={()=>roemove()}  className="fa-solid fa-xmark cursor-pointer text-gray-100 p-8" />

</div>

    <h5 className="mb-2 text-2xl text-white  tracking-tight ">title:{data.title}</h5>
   <p className='mb-3'><span className="mb-2  text-white  tracking-tight ">Category: <span className='bg-sky-400  ms-1 px-2 py-1 rounded-lg'>{data.genre}</span></span></p>
   <p className='mb-3'><span className="mb-2  text-white  tracking-tight ">Platform: <span className='bg-sky-400 ms-1 px-2 py-1 rounded-lg'>{data.platform}</span></span></p>
   <p className='mb-3'><span className="mb-2  text-white  tracking-tight "> Status: <span className='bg-sky-400 ms-1 text-gray-100 px-2 py-1 rounded-lg'>{data.status}</span></span></p>
   <p className=' text-gray-400'>{data.description}</p>
<div className=" py-4">
<a className=' bg-transparent text-gray-50  hover:bg-yellow-500 border border-spacing-2 border-yellow-400 px-4 py-2 rounded-xl' href={data.freetogame_profile_url}>Show Game</a>
</div>


  </div>



    </div>}

    


    
    
    
    </>
  
  )
}

export default Games
