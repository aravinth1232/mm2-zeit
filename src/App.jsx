
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import About from "./pages/About"

import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Layout from './components/Layout'


function App() {

  const router = createBrowserRouter([

    {
      path:"/",
      element : <Layout><Home /> </Layout>,
    },
    {
      path:"/about",
      element : <Layout><About /></Layout>,
    },
    {
      path:"/services",
      element : <Layout><Services /></Layout>,
    },
    {
      path:"/contact",
      element : <Layout><Contact /></Layout>,
    }


  ])




  return (
    
    <>
    <RouterProvider router={router} />
    </>

  )
}

export default App
