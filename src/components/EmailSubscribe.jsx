import React, { useState } from 'react';




const EmailSubscribe = () => {
  const [email, setEmail] = useState('');


  const handleSubscribe = (e) => {
    e.preventDefault();
    // Logic for handling subscription (e.g., send email to API)
    console.log('Subscribed with email:', email);
    // setIsSubmitting(true);
    
    setEmail(''); // Clear input field after subscription
  };

  return (
    <div className="  rounded-lg max-w-md mx-auto flex flex-col gap-4 font-primary">
      <h2 className="text-center text-xl font-semibold text-tertiary-200  ">Subscribe to our Newsletter</h2>
      <form onSubmit={handleSubscribe} className="flex   sm:flex-row items-center gap-0">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-tertiary  px-2 font-primary py-2 text-parimary border-2 border-primary  focus:outline-none  focus:ring-tertiary-200 "
        />
        <button
          type="submit"
          className="w-1/3 sm:w-auto px-6 py-2 font-karla bg-tertiary-200 text-primary font-medium  hover:bg-tertiary transition duration-200"
        
        >
         Subscribe
        </button>
      </form>
    </div>
  );
};

export default EmailSubscribe;