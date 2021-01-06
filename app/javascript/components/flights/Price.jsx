import React from "react";

const Price = ({price}) => {
    const {currency, total, base, fees, grandTotal} = price;
    return (
            <div className="m-auto">
                <h6>Price</h6>
                <h6>{total} {currency}</h6>
            </div>
    )
}

export default Price;
