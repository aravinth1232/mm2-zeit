import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import EmailSubscribe from './EmailSubscribe';

const Footer = () => {
  return (
    <footer className=" bg-tertiary-900 font-primary
     pt-8 py-4 px-5 flex flex-col gap-6 md:gap-10  ">

    <div className='grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4  ' >  
            <div className='  md:justify-self-center  '>

                <h1 
                className='text-2xl lg:text-xl text-tertiary-200 font-karla'
                >Motomod</h1>
            </div>

            <div className=" justify-self-stretch row-start-2 col-start-1 col-end-3 md:row-start-1  md:col-start-2  mx-auto ">
                <EmailSubscribe />
                
                {/* Other footer content like links, social icons, etc. */}
            </div>


            <div 
            className='md:col-start-3  md:col-end-4 flex flex-col gap-3   text-base justify-self-center font-karla'
            >
            <Link to="/" className='text-tertiary-200 hover:text-tertiary-100 '>Home</Link>
            <Link to="/services" className='text-tertiary-200 hov hover:text-tertiary-100'>Services</Link>
            <Link to="/contact" className='text-tertiary-200 hov hover:text-tertiary-100' >Contact</Link> 
            </div>
            
            
           
            <div className=" col-start-1 col-end-3 md:col-start-4 md:col-end-5  justify-self-center md:place-self-center  flex space-x-4  gap-4">
                    <a href="#" className='text-tertiary-200  hover:text-tertiary-100'>
                        <FaFacebookF className='w-5 h-5' />
                    </a>
                    <a href="#" className='text-tertiary-200 hover:text-tertiary-100y'>
                        <FaTwitter className='w-5 h-5' />
                    </a>
                    <a href="#" className='text-tertiary-200  hover:text-tertiary-100'>
                        <FaInstagram  className='w-5 h-5'/>
                    </a>
                    <a href="#" className='text-tertiary-200 hover:text-tertiary-100y'>
                        <FaLinkedinIn  className='w-5 h-5'/>
                    </a>
         
            </div>
    </div>
    <div className=" border-t border-tertiary-100 pt-4 text-center ">
          <p className="text-base text-tertiary-200">&copy; 2024 Motomod | Zeit | All rights reserved  </p>
        </div>
    </footer>
  );
};

export default Footer;