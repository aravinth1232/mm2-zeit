import React, { useState } from 'react'

import logo from "../assets/logo2.png";
import { Home,Handshake,LifeBuoy, Contact,CircleChevronRight,RefreshCcwDot, Disc, Ellipsis, EllipsisVertical, EllipsisVerticalIcon, CircleEllipsis, RedoDot, MapPinCheck, Dot,X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const Navbar = () => {

  const links =[
    {id:1,path : "/", name:"Home",icon : Home},
    // {id:2,path : "/about", name:"About",icon: LifeBuoy},
    {id:3,path : "/services", name:"Services",icon:Handshake},
    {id:4,path : "/contact", name:"Contact",icon: Contact},
  ]

  // const { pathname } = useLocation();
  // const currentPath = pathname;
  
  const location = useLocation()
  const currentPath = "/" + location.pathname.split("/")[1];
  
  

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


  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    
    
     
     
    
    <header className={`bg-sitewhite my-4 z-50 lg:w-1/2  shadow-lg py-6 lg:py-2   mx-auto flex justify-between  px-6  items-center transition-all duration-150 ease-linear  sticky top-4 border-2 
    rounded-full   
    `}>
      <Link
      to="/"
      className={` transition-all duration-300 ease-linear 
        ${scrolled  ? "    " : " " }
        `}>
        <img
        className='w-10 h-10 mx-auto '
        loading='lazy'
        src={logo} alt="logo" />
      </Link>
      
      
      <div className="hidden   lg:flex items-center justify-center  gap-3"  >
      <nav className=' flex self-end gap-6 px-4     '>
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
        
        <div className="relative z-50">
        <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className={` text-sm  font-medium font-primary bg-gradient2 px-4 py-2 rounded-[999px] text-tertiary-100  `}>
          Get in Touch
        </motion.button>

        {/* modal start */}
         <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-siteblack bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal content */}
            <motion.div
              className="bg-sitewhite px-6 py-8 rounded-2xl shadow-xl max-w-md w-full font-primary relative "
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="flex flex-col justify-between gap-2">
                <h2 className="text-lg font-semibold">Got a question,or want to chat?</h2>
                 <p className="text-sm text-tertiary-600 mb-4">
                We'd love to hear from you. Please fill out the form below.
              </p>
                
              </div>
             
              <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full text-sm bg-sitewhite border-2 focus:border-2 focus:border-tertiary-800 p-2 rounded outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full text-sm bg-sitewhite border-2 focus:border-2 focus:border-tertiary-800 p-2 rounded outline-none"
              />
              <textarea
                placeholder="Your Message"
               className="w-full text-sm bg-sitewhite border-2 focus:border-2 focus:border-tertiary-700 p-2 rounded outline-none"
              />
              </div>
              <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className={`mt-4 text-sm  font-medium font-primary bg-gradient2 px-4 py-2 rounded-[999px] text-tertiary-100  `}>
          Submit
        </motion.button>

            <button
           
                  onClick={() => setIsModalOpen(false)}
                  className="absolute -top-7 left-1/2 transform -translate-x-1/2  bg-tertiary-800 rounded-full text-tertiary-100 px-2 py-2 hover:text-tertiary-300 duration-300 transition-all hover:scale-110"
                >
                  <X />
                </button> 

            </motion.div>


          </motion.div>
        )}
      </AnimatePresence>

        </div>

        </div>
        
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
            ? "font-semibold text-tertiary-200 "
            : "hover:text-tertiary-200 text-tertiary-300 "
        }`}
      >
       
        {/* {path === currentPath && <Icon className="w-6 h-6" />} */}
   
        <h1 className="text-base font-primary">{name}</h1>
        {path === currentPath &&  <Dot className="w-10 h-10"  /> }  
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
   

  )
}

export default Navbar




{/* <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <X />
                </button> */}