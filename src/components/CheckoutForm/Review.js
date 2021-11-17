import React from 'react';

const Review = ({ checkoutToken }) => {
    return (
        <>
            <div className="text-center mt-6">
              <p className="text-2xl tracking-widest">Podsumowanie zamówienia</p>
            </div>
            <div className="">
                {checkoutToken.live.line_items.map((product) => (
                    <div className="w-6/12 mx-auto mt-10 mb-6" key={product.id}>
                        <div className="my-2">
                            <p className="text-base tracking-widest">{`ilość: ${product.name}`}</p>
                        </div>
                        <div className="my-2">
                            <p className="text-base tracking-widest">{`ilość: ${product.quantity}`}</p>
                        </div>
                        <div className="my-2">
                            <p className="text-lg tracking-widest">{`${product.line_total.formatted} zł`}</p>
                        </div>
                    </div>
                ))}
                <div className="w-1/4 mx-auto mt-10 mb-6">
                    <p className="text-center text-lg tracking-widest">Suma</p>
                    <div className="text-center">
                        <p className="font-medium text-lg tracking-widest border-b-2 border-black">{`${checkoutToken.live.subtotal.formatted} zł`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review
