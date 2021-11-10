import React from 'react';

const Review = ({ checkoutToken }) => {
    return (
        <>
            <div variant='h6' gutterBottom>Podsumowanie zamówienia</div>
            <div disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <div className="" key={product.id}>
                        <div>{`ilość: ${product.name}`}</div>
                        <div>{`ilość: ${product.quantity}`}</div>
                        <div>{`${product.line_total.formatted} zł`}</div>
                    </div>
                ))}
                <div style={{ padding: '10px 0' }}>
                    <div primary='Suma' />
                    <div variant='subtitle2' style={{ fontWeight: '700' }}>
                        {`${checkoutToken.live.subtotal.formatted} zł`}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review
