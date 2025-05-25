import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader/Loader';
import Footer from './Footer';


const Layout = () => {

  const navigation = useNavigation();
  const isRouteLoading = navigation.state === 'loading';
  const [loader, setLoader] = useState(false);
  

  useEffect(()=>{
    let timer;
    if(isRouteLoading){
      setLoader(true)
    }
    else {
      timer = setTimeout(()=>{
              setLoader(false)
            },1000)
    }
    
    return ()=> clearTimeout(timer)
  },[isRouteLoading])

  return (
    

     loader ?  <Loader /> :
     
    
    <>
    <div className=''>
    <Navbar />
    <main><Outlet /></main>
     </div>
    </>
     
    
    )
}

export default Layout
