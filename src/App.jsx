
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"

import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Layout from './components/Layout'
import { useEffect, useState } from 'react'
import Loader from './components/Loader/Loader'
import GalleryDetail from './components/GalleryDetail'


function App() {


  const [loading, setLoading] = useState(false);

   useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)

  },[])


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, 
      children: [
        { index: true, element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/services', element: <Services /> },
        { path: '/services/product/:name', element: <GalleryDetail /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ])




  return (
      loading ?  <Loader /> : <RouterProvider router={router} />
  )
}

export default App
