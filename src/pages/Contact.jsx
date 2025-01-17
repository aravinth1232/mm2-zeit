import React from 'react'
import Location from '../components/Location'
import Faq from '../components/Faq'
import Form from '../components/Form'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
    <main className=' bg-tertiary-100'>
    
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
