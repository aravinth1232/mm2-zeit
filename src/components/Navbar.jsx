import React, { useState } from 'react'

import logo from "../assets/logo2.png";
import { Home,Handshake,LifeBuoy, Contact,CircleChevronRight,RefreshCcwDot, Disc, Ellipsis, EllipsisVertical, EllipsisVerticalIcon, CircleEllipsis, RedoDot, MapPinCheck, Dot } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Navbar = () => {

  const links =[
    {id:1,path : "/", name:"Home",icon : Home},
    // {id:2,path : "/about", name:"About",icon: LifeBuoy},
    {id:3,path : "/services", name:"Services",icon:Handshake},
    {id:4,path : "/contact", name:"Contact",icon: Contact},
  ]
  const { pathname } = useLocation();
  const currentPath = pathname;
  

  const [open,setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topBars = [
    // {id:1, name:"Redesign. Rebuild. Ride.",icon : RedoDot},
    {id:1, name:"Revamp Your Wheels",icon : RedoDot},
    {id:2, name:"Thoothukdi,TN",icon : MapPinCheck},
  ]


  const border = "rounded-[50px]"

  return (
    <>
    <section className=' overscroll-none px-6 py-2  bg-gradient flex flex-row justify-between   '>

    {
      topBars.map(({id,name,icon:Icon} )=>(

        <div
        key= {id}
        className=' flex flex-row gap-2 items-center font-primary'>
        <Icon className='w-5 h-5  '  />
        <h1 className={`
        text-sm text-tertiary-800
        ${id ===1  ? "hidden lg:flex " : "flex" }

        `}
         >{name}</h1>
       </div>

      ))
    }

   
     


    </section>
     
     
    
    <header className={` z-50 w-full   flex   px-6  items-center transition-all duration-150 ease-linear  
      ${scrolled ? "fixed top-0 py-5 lg:py-2 shadow-lg  justify-end bg-tertiary-50" : "sticky top-0 py-6 lg:py-4 justify-end bg-gradient " }
    `}>
      <div className={`absolute transition-all duration-300 ease-linear 
        ${scrolled  ? " -bottom-3 left-7    " : "bottom-1 lg:bottom-3 left-7 " }
        `}>
        <img
        className='w-14 h-14 mx-auto '
        loading='lazy'
        src={logo} alt="logo" />
      </div>

      <nav className='hidden   lg:flex self-end gap-6 px-4     '>
        {
          links.map(({id,name,path,icon:Icon})=>(
            
            <Link
            
            className={`w-full flex flex-row-reverse px-4 py-3 justify-center items-center  gap  rounded-full font-medium group hover:scale-[1.2] transition-all duration-200 
              ${path===currentPath ? " font-semibold text-tertiary-300 "  : "hover:text-tertiary-200 text-tertiary-100  "}
              `}
            key={id}
            to={path} >
              {/* <Icon className={`w-6 h-6 `} /> */}
              <h1 className={`relative text-tertiary-900  font-primary transition-all duration-200 
              
                ${path ===currentPath  ? "font-semibold text-tertiary-900 text-base" : "text-sm hover:text-tertiary-500 text-tertiary-100  "}` }>{name}
                
                <span
                className='absolute  top-1 left-1/2 -translate-x-1/2 translate-y-1/2  '
                >{path === currentPath && <Dot className={`  w-6 h-6 

                      ${scrolled ? "text-tertiary-900" : " text-tertiary-700" } `} />   }  </span>


                </h1>
            </Link>


          ))
        }

      </nav>
        {/* <Link 
        className='hidden lg:flex'
        to="/services">
        <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={` text-sm lg:text-lg font-bold font-primary bg-gradient2 px-4 py-2 ${border} text-tertiary-100  `}>
          Customize Bike
        </motion.button>
        </Link> */}
        
        
        <button
  onClick={() => {
    setOpen(!open);
  }}
  disabled= {open}
  className={`flex flex-col items-start gap-[6px] cursor-pointer group  lg:hidden
    ${open ? " opacity-0 " : "opacity-100 "}`

  }
>
  

  <span
    className={`block h-[2px] bg-black transition-all duration-300 ${
      open ? "w-5" : "w-2"
    } lg:group-hover:w-5`}
  ></span>
  <span
    className={`block h-[2px] bg-black transition-all duration-300 ${
      open ? "w-8" : "w-4"
    } lg:group-hover:w-8`}
  ></span>
  <span
    className={`block h-[2px] bg-black transition-all duration-300 ${
      open ? "w-5" : "w-6"
    } lg:group-hover:w-5`}
  ></span>
</button>

        


<aside
  className={`fixed top-0 inset-0 left-0 w-3/4 h-screen bg-primary flex flex-col   transition-all duration-300 ease-in-out transform rounded-md ${
    open ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-full"
  }`}
>
  {/* Navigation Links */}
  <nav className="relative flex flex-col gap-4 w-full px-4 py-4 lg:hidden translate-y-20">
    {links.map(({ id, name, path, icon: Icon }) => (
      <Link
      onClick={() => {
        setOpen(!open);
      }}
        key={id}
        to={path}
        className={`w-full flex items-center justify-between px-4 py-3 gap-2 rounded font-medium group active:scale-95 transition-all duration-200  ${
          path === currentPath
            ? "font-semibold text-tertiary-200 border-b"
            : "hover:text-tertiary-200 text-tertiary-300 border-b"
        }`}
      >
       
        {/* {path === currentPath && <Icon className="w-6 h-6" />} */}
   
        <h1 className="text-base font-primary">{name}</h1>
        {path === currentPath &&  <Dot className="w-6 h-6"  /> }  
      </Link>
    ))}
  </nav>  

    
    

  {/* Close Button */}
  <motion.button
   whileTap={{ scale: 0.95 }}
    onClick={() => setOpen(!open)}
    className="absolute top-5 right-6 cursor-pointer group"
  >
    <div className="relative w-5 h-5">
      <span className="block absolute w-5 h-[3px] bg-white rotate-45 top-1/2 left-0 transform -translate-y-1/2"></span>
      <span className="block absolute w-5 h-[3px] bg-white -rotate-45 top-1/2 left-0 transform -translate-y-1/2"></span>
    </div>
  </motion.button>
</aside>


    </header>
   
    </>

  )
}

export default Navbar
