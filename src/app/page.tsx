"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import TariffCard from "@/app/components/TariffCard";
import Image from "next/image";

export default function Home() {
  // Статичные данные для верстки, позже их будем получать с сервера
  const tariffsData = [
    { id: 1, period: "Навсегда", price: 5990, full_price: 18990, text: "Для тех, кто хочет всегда быть в форме и поддерживать здоровье", is_best: true, discount: 70 },
    { id: 2, period: "3 месяца", price: 1990, full_price: 3990, text: "Привести тело в порядок", is_best: false, discount: 50 },
    { id: 3, period: "1 месяц", price: 990, full_price: 1690, text: "Чтобы получить первые результаты", is_best: false, discount: 40 },
    { id: 4, period: "1 неделя", price: 690, full_price: 990, text: "Чтобы просто начать", is_best: false, discount: 30 },
  ];

  const [selectedId, setSelectedId] = useState(tariffsData[0].id);

  return (
      <>
        <Header />
        <main className="flex min-h-screen flex-col items-center p-6 pt-36">
          <div className="w-full max-w-[1216px]">
            <h1 className="text-[40px] font-bold mb-27">
              Выбери подходящий для себя <span className="text-brand-yellow">тариф</span>
            </h1>

            <div className="flex flex-col lg:flex-row items-center lg:items-center gap-22">
              <div className="w-full lg:max-w-[380px] flex-shrink-0">
                <Image
                    src="/man.png"
                    alt="Fit person"
                    width={480}
                    height={720}
                    className="w-full h-auto object-contain"
                />
              </div>

              <div className="w-full flex flex-col gap-3">
                <TariffCard
                    {...tariffsData[0]}
                    is_best={tariffsData[0].is_best}
                    isSelected={tariffsData[0].id === selectedId}
                    onClick={() => setSelectedId(tariffsData[0].id)}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {tariffsData.slice(1).map(tariff => (
                      <TariffCard
                          key={tariff.id}
                          {...tariff}
                          is_best={tariff.is_best}
                          isSelected={tariff.id === selectedId}
                          onClick={() => setSelectedId(tariff.id)}
                      />
                  ))}
                </div>

                <div className="bg-brand-gray p-6 rounded-2xl mt-2">
                  <p className="mb-4 text-sm">
                    <span className="text-brand-yellow font-bold">!</span> Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
                  </p>

                  <div className="flex items-center mb-6">
                    <input id="agreement" type="checkbox" className="w-5 h-5 accent-brand-yellow bg-gray-700 border-gray-600 rounded focus:ring-brand-yellow" />
                    <label htmlFor="agreement" className="ml-2 text-sm text-gray-300">
                      Я согласен с <a href="#" className="underline">офертой рекуррентных платежей</a> и <a href="#" className="underline">Политикой конфиденциальности</a>
                    </label>
                  </div>

                  <button className="w-full bg-brand-yellow text-brand-dark font-bold py-4 rounded-lg text-lg hover:bg-yellow-400 transition-colors animate-pulse">
                    Купить
                  </button>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-2 border-brand-green p-6 rounded-2xl text-center">
              <h2 className="text-xl font-bold mb-4">Гарантия возврата 30 дней</h2>
              <p className="text-gray-300">
                Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не получишь видимых результатов.
              </p>
            </div>
          </div>
        </main>
      </>
  );
}
