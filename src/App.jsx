
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Games from './components/Games/Games'

import LayOut from './components/LayOut/LayOut'
import Mmorpg from './components/Mmorpg/Mmorpg'
import Shooter from './components/Shooter/Shooter'
import Sailing from './components/Sailing/Sailing'
import Pixel from './components/Pixel/Pixel'
import Superhero from './components/Superhero/Superhero'
import Permadeath from './components/Permadeath/Permadeath'
import NotFoud from './components/NotFoud/NotFoud'

function App() {
  
const x = createBrowserRouter([
{path:'' , element:<LayOut/> , children:[
  {path:'/', element:<Mmorpg/>},
  {path:'/shooter', element:<Shooter/>},
  {path:'/sailing', element:<Sailing/>},
  {path:'/superhero', element:<Superhero/>},
  {path:'/permadeath', element:<Permadeath/>},
  
  {path:"/pixel", element:<Pixel/>},
  {path:"/games/:id", element:<Games/>},
  {path:"*", element:<NotFoud/>},
 
]}

])
  return (
    <>
    <RouterProvider router={x}>

    </RouterProvider>
    
    </>
  )
}

export default App
