import React from 'react'

const Contact = () => {

return (
  <>
    <div className="mt-6 mx-6">
      <p className="text-xl sm:text-2xl md:text-3xl tracking-widest">Kontakt</p>
      <div className="mt-6">
        <p className="text-sm font-light uppercase text-justify md:text-base mx tracking-widest">Telefon:</p>
        <a className="block text-sm font-light border-b w-max border-black md:text-base mx tracking-widest" href="tel:+48111111111">+48 111 111 111</a>
      </div>
      <div className="mt-6">
        <p className="text-sm font-light uppercase text-justify md:text-base mx tracking-widest">Napisz do nas:</p>
        <a className="block text-sm font-light border-b w-max border-black md:text-base mx tracking-widest" href="mailto:kontakt@kangurmakescandles.pl">kontakt@kangurmakescandles.pl</a>
      </div>
    </div>
    <div className="statute mt-24 mx-6">
      <p className="text-xl uppercase sm:text-2xl md:text-3xl mb-6 tracking-widest">regulaminy</p>
      <p className="text-sm uppercase mb-3 tracking-widest">regulamin</p>
      <p className="text-sm uppercase mb-3 tracking-widest">polityka prywatności</p>
      <p className="text-sm uppercase mb-3 tracking-widest">zwroty</p>
      <p className="text-sm uppercase mb-3 tracking-widest">reklamacje</p>
    </div>   
  </>  
  )
}

export default Contact
