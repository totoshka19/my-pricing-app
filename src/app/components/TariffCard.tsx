import React from 'react';

type TariffCardProps = {
    period: string;
    price: number;
    full_price: number;
    text: string;
    discount: number;
    isBest?: boolean;
    isSelected?: boolean;
};

const TariffCard = ({
                        period,
                        price,
                        full_price,
                        text,
                        discount,
                        isBest = false,
                        isSelected = false
                    }: TariffCardProps) => {

    const borderColor = isSelected ? 'border-brand-yellow' : 'border-brand-gray';

    return (
        <div className={`relative bg-brand-gray p-6 rounded-2xl border-2 ${borderColor} flex flex-col`}>
            {/* Метка со скидкой */}
            <div className="absolute top-4 left-4 bg-brand-red text-white text-sm font-bold px-3 py-1 rounded-full font-gilroy">
                -{discount}%
            </div>

            {/* Метка "ХИТ!" */}
            {isBest && (
                <div className="absolute top-4 right-4 bg-brand-yellow text-brand-dark text-sm font-bold px-3 py-1 rounded-full">
                    ХИТ!
                </div>
            )}

            <div className="mt-8">
                <h3 className="text-2xl font-bold mb-2">{period}</h3>
                <div className="flex items-end gap-2 mb-2">
                    <p className="text-4xl font-bold">{price.toLocaleString('ru-RU')} ₽</p>
                    <p className="text-gray-400 line-through text-lg">{full_price.toLocaleString('ru-RU')} ₽</p>
                </div>
                <p className="text-gray-300 min-h-[40px]">{text}</p>
            </div>
        </div>
    );
};

export default TariffCard;
