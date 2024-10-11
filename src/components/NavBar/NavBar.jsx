import React from 'react'
import imge1 from '../../assets/imge/logo-sm.png'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className=' imge'>
    <div className=" container p-0 mx-auto px-14 z-50  w-full    fixed top-0">

 




    <div className=" md:flex px-10 justify-between  py-2 rounded-md md:rounded-full bg-gray-950 items-center">
           <div className=" logo flex items-center ">
           <img className=' w-14 ' src={imge1} alt="" />

<p className=' text-white text-2xl '>Game Reviews</p>
           </div>
           
<div className=" md:flex items-center ">
<ul>
            <NavLink  className={' text-white py-2 px-4 md:py-0 block md:inline-block'} to={'/'}>mmorpg</NavLink>
                <NavLink   className={' text-white px-4 py-2 md:py-0 block md:inline-block'} to={'/shooter'}>Shooter</NavLink>
                <NavLink  className={' text-white px-4 py-2 md:py-0 block md:inline-block '} to={'/sailing'}>Sailing</NavLink>
                <NavLink  className={' text-white px-4  block py-2 md:py-0 md:inline-block'} to={'/permadeath'}>Permadeath</NavLink>
                <NavLink  className={' text-white px-4 block py-2 md:py-0 md:inline-block '} to={'/Superhero'}>Superhero</NavLink>
                <NavLink  className={' text-white px-4 block py-2 md:py-0 md:inline-block '} to={'/Pixel'}>  Pixel</NavLink>
            </ul>
          
</div>

        </div>
    </div>

      
  
    </div>








  )
}








