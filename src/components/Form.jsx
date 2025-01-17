import React from 'react';
import image from "../assets/one.png"
// import img1 from "../assets/homeimage.jpg"






const Form = () => {  
    
   


  return (
  
  <section id="contact " 
  
  className="px-4 py-8 bg-[url('/src/asset')] bg-no-repeat bg-cover font-primary  flex flex-col items-center justify-center gap-3" data-aos="fade-up">
    <h1 className='self-start text-2xl font-semibold  text-tertiary-900 '>
    Contact Us
    </h1>
    <div className="backdrop-opacity-30 p-8 my-auto rounded-lg shadow-xl w-full max-w-lg">
      {/* <h2 className="text-3xl font-bold font-karla text-center mb-6 formcolor">Get in touch
      </h2> */}

    
        <>
        <form 
        
        className="space-y-4 font-inconsolata">
          <div>
            {/* <label htmlFor="name" className="block text-sm font-medium formcolor">
              Name
            </label> */}
            <input
              type="text"
              name="name"
              id="name"
              placeholder='Name'
            
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg   "
            />
          </div>

          <div>
            {/* <label htmlFor="phone" className="block text-sm font-medium formcolor">
              Phone Number
            </label> */}
            <input
              type="tel"
              name="phone"
              placeholder='Mobile'
              id="phone"
              
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            {/* <label htmlFor="email" className="block text-sm font-medium formcolor">
              Email
            </label> */}
            <input
              type="email"
              name="email"
              placeholder='Email-id'
              id="email"
             
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg font-karla"
            />
          </div>

          <div>
            {/* <label htmlFor="message" className="block text-sm font-medium formcolor">
              Message
            </label> */}
            <textarea
            placeholder='Drop us a Message'
              name="message"
              id="message"
             
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg "
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-tertiary-900 text-tertiary-100 font-bold py-2 px-4 rounded-lg hover:bg-tertiary transition duration-300"
            
            >
              Send Message
            </button>
          </div>
        </form>
       </>
     
    </div>
  </section>
  );
};

export default Form;