import React from 'react';
import PriceDisplay from './PriceDisplay';

type TariffCardProps = {
    period: string;
    price: number;
    full_price: number;
    text: string;
    discount: number;
    is_best: boolean;
    isSelected: boolean;
    onClick: () => void;
};

const TariffCard = ({
                        period,
                        price,
                        full_price,
                        text,
                        discount,
                        is_best: isBest = false,
                        isSelected = false,
                        onClick
                    }: TariffCardProps) => {

    const borderColor = isSelected ? 'border-brand-yellow' : 'border-brand-gray';

    return (
        <div className={`relative bg-brand-gray p-6 rounded-[40px] border-2 ${borderColor} flex flex-col cursor-pointer transition-colors duration-300 hover:border-[#FFC55A]`}
             onClick={onClick}
        >
            <div className="absolute top-0 left-12 bg-brand-red text-white font-gilroy flex items-center justify-center rounded-b-[8px] text-[22px] leading-[26px] px-[8px] py-[5px]">
                -{discount}%
            </div>

            {isBest && (
                <div className="absolute top-4 right-4 text-brand-yellow text-[22px] px-3 py-1">
                    хит!
                </div>
            )}

            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-2">{period}</h3>

                <PriceDisplay
                    price={price}
                    full_price={full_price}
                    color={isBest ? 'yellow' : 'white'}
                />
                <p className="text-gray-300 min-h-[40px]">{text}</p>
            </div>
        </div>
    );
};

export default TariffCard;
