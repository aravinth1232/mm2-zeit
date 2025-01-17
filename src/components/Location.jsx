import React from 'react'

const Location = () => {
  return (
    <div>
      <section className="px-4 py-8  flex flex-col gap-8 justify-start items-start ">

      <h2 className=" text-2xl font-semibold  text-tertiary-900 pt-4 font-primary  ">
            Reach us at
      </h2>   

        <div className="w-full ">
        <iframe 
        className='w-full mx-auto px-2 lg:px-8 h-48 lg:h-96'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.367191691152!2d80.1804614732782!3d13.075899487249119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261b47de0971b%3A0x199885c89b448ccf!2smotomod!5e0!3m2!1sen!2sin!4v1729046432782!5m2!1sen!2sin"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      
    </section>
    </div>
  )
}

export default Location