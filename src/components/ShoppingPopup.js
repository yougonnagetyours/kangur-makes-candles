import React from "react";

const ShoppingPopup = () => {
  return (
    <div className='fixed left-0 bottom-0 flex justify-center w-full'>
       <div className='bg-black mx-2 mb-2 w-full text-center tracking-widest font-light text-white p-4'>
          Produkt został dodany do koszyka !
       </div>
    </div>
  );
};

export default ShoppingPopup;
