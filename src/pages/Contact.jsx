import React, { useEffect } from 'react'
import Location from '../components/Location'
import Faq from '../components/Faq'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

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
    
    <Hero
    title="Have an Idea? Let's Bring It to Life."
    description="Great partnerships start with a conversation. Whether you're looking for expert help, custom solutions, or just curious about what we can do, we'd love to hear your story. No pressure — just honest, friendly communication."
    />

    <div className=''>
    <Location />
    </div>

    <div className=''>
      <Faq />
    </div>

    <div className=''>
      <Form />
    </div>


    {/* <div>
      <Footer />
    </div> */}

    </main>
    
    </>
  )
}

export default Contact
