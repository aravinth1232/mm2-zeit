import React, { useEffect } from 'react'
import Location from '../components/Location'
import Faq from '../components/Faq'
import Form from '../components/Form'
import Footer from '../components/Footer'

const Contact = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);



  return (
    <>
    <main className='max-w-screen-2xl mx-auto bg-siteewhite'>
    
    <div className=''>
    <Location />
    </div>

    <div className=''>
      <Faq />
    </div>

    <div className=''>
      <Form />
    </div>


    <div>
      <Footer />
    </div>

    </main>
    
    </>
  )
}

export default Contact
