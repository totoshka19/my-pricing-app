"use client";

import React, { useState, useEffect } from 'react';
import StarIcon from './StarIcon';

const Header = () => {
    const [timeLeft, setTimeLeft] = useState(120);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timerId = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, [timeLeft]);

    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');

    let colorClass = 'text-accent-yellow';
    if (timeLeft <= 30 && timeLeft > 0) {
        colorClass = 'text-brand-red animate-pulse';
    } else if (timeLeft === 0) {
        colorClass = 'text-white';
    }

    return (
        <header className="fixed top-0 left-0 w-full bg-brand-green pt-2 z-10">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <p className="text-[24px]">Успейте открыть пробную неделю</p>

                <div className="flex items-center gap-3">
                    <StarIcon className={`w-3.5 h-3.5 ${colorClass}`} />

                    <div className={`text-[40px] font-bold transition-colors duration-300 font-raleway tabular-nums flex items-center gap-2 ${colorClass}`}>
                        <span>{minutes}</span>
                        <span>:</span>
                        <span>{seconds}</span>
                    </div>

                    <StarIcon className={`w-3.5 h-3.5 ${colorClass}`} />
                </div>
            </div>
        </header>
    );
};

export default Header;
