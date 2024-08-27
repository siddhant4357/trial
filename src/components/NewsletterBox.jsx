import React, { useState } from 'react';

const NewsletterBox = () => {
  const [subscribed, setSubscribed] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
   
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Subscribe to Forever today to receive exclusive discounts and stay updated with our latest collections!
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' required />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
      {subscribed && <p className='text-green-500'>Thanks for subscribing!</p>}
      </div>
  );
};

export default NewsletterBox;
