import React from "react";

const ShoppingPopup = () => {
  return (
    <div className='fixed left-0 bottom-0 flex justify-center w-full'>
       <div className='bg-black mx-2 sm:mx-10 md:mx-0 mb-2 w-full md:w-max text-center tracking-widest font-light text-white p-4'>
          Produkt został dodany do koszyka !
       </div>
    </div>
  );
};

export default ShoppingPopup;
