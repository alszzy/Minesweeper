import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Game from './Game.jsx'
import Header from './Header.jsx'
import Rule from './Rules.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Header />
    },
    {
        path:'/game/easy',
        element:<Game rows={8} cols={8} mines={10}/>
    },
    {
        path:'/game/medium',
        element:<Game rows={16} cols={16} mines={50}/>
    },
    {
        path:'/game/hard',
        element:<Game rows={30} cols={30} mines={99}/>
    },
    {
        path:'/rules',
        element:<Rule />
    }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
