import React from 'react';
import logo from "../assets/logo.jpg";
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import EmailSubscribe from './EmailSubscribe';

const Footer = () => {


    const footerLinks =[
    {id:1,path : "/", name:"Home"},
    // {id:2,path : "/about", name:"About",icon: LifeBuoy},
    {id:3,path : "/services", name:"Services"},
    {id:4,path : "/contact", name:"Contact"},
  ]

    const footerMedia =[
    {id:1,path : "#", name:"Home",icon : FaFacebookF},
    {id:2,path : "#", name:"About",icon: FaTwitter},
    {id:3,path : "#", name:"Services",icon:FaInstagram},
    {id:4,path : "#", name:"Contact",icon: FaLinkedinIn},
  ]

    const { pathname } = useLocation();
    const currentPath = pathname;

  return (
    <footer className=" bg-tertiary-900 font-primary
     pt-8 py-4 px-5 flex flex-col gap-6 md:gap-10  ">

    <div className='grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4  ' >  
            <Link 
            to="/"
            className='  md:justify-self-center  '>

               <img
                className='w-14 h-14 mx-auto rounded-[50%]'
                loading='lazy'
                src={logo} alt="logo" />
            </Link>

            <div className=" justify-self-stretch row-start-2 col-start-1 col-end-3 md:row-start-1  md:col-start-2  mx-auto ">
                <EmailSubscribe />
                
                
            </div>


            <div 
            className='md:col-start-3  md:col-end-4 flex flex-col gap-3   text-base justify-self-center font-karla'
            >
            { footerLinks.map(({id,name,path})=>(
            
            <Link
            
            className={` hover:scale-[1.1] transition-all duration-200 
              ${path===currentPath ? " font-medium text-tertiary-100 "  : "hover:text-tertiary-200 text-tertiary-300  "}
              `}
            key={id}
            to={path} >
              {name}
          
            </Link>


          ))
        }
            </div>
            
            
           
            <div className=" col-start-1 col-end-3 md:col-start-4 md:col-end-5  justify-self-center md:place-self-center  flex space-x-4  gap-4">
            {
                 footerMedia.map(({id,name,path,icon:Icon})=>(
            
            <a
            className='text-tertiary-300  hover:text-tertiary-100 hover:scale-[1.2] transition-all duration-200'
            key={id}
            href={path}
            target='_blank' >
              <Icon className='w-5 h-5' />
            </a>


          ))

            }
        
            </div>
    </div>
    <div className=" border-t border-tertiary-100 pt-4 text-center ">
          <p className="text-base text-tertiary-200">&copy; 2024 Motomod | Zeit | All rights reserved  </p>
        </div>
    </footer>
  );
};

export default Footer;





// <a href="#" className='text-tertiary-200  hover:text-tertiary-100'>
//                         <FaFacebookF className='w-5 h-5' />
//                     </a>
//                     <a href="#" className='text-tertiary-200 hover:text-tertiary-100y'>
//                         <FaTwitter className='w-5 h-5' />
//                     </a>
//                     <a href="#" className='text-tertiary-200  hover:text-tertiary-100'>
//                         <FaInstagram  className='w-5 h-5'/>
//                     </a>
//                     <a href="#" className='text-tertiary-200 hover:text-tertiary-100y'>
//                         <FaLinkedinIn  className='w-5 h-5'/>
//                     </a>