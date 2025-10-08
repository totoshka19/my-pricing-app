import React from 'react';

type PriceDisplayProps = {
    price: number;
    full_price: number;
    color?: 'white' | 'yellow';
};

const PriceDisplay = ({ price, full_price, color = 'white' }: PriceDisplayProps) => {
    const priceColorClass = color === 'yellow' ? 'text-brand-yellow' : 'text-white';

    return (
        <div className="mb-2">
            <p className={`text-[50px] font-semibold leading-none ${priceColorClass}`}>
                {price} ₽
            </p>

            <p className="text-gray-400 line-through text-[24px] -mt-2 text-right">
                {full_price} ₽
            </p>
        </div>
    );
};

export default PriceDisplay;
