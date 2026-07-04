import React from "react";

export default function Engineering() {
  return (
    <section id="engineering" className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs uppercase tracking-wider text-emerald-800 font-bold">
            Инженерная этика
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Инженерный расчет как основа безопасности вашего дома
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm">
            Мы не предлагаем абстрактных красивых образов без расчетов. Каждое планировочное и фасадное решение обосновано теплотехническими, конструктивными и гидравлическими вычислениями.
          </p>
        </div>

        {/* Grid cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Soil Mechanics */}
          <div className="bg-white border border-slate-200/60 p-8 rounded-lg space-y-6 shadow-sm">
            <div className="w-10 h-10 bg-emerald-800/5 rounded flex items-center justify-center text-emerald-800">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900">Конструктивная прочность</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Проектируем железобетонные и деревянные элементы перекрытий на основе локальных геологических изысканий грунта. Рассчитываем нагрузки снегового покрова и просадок, защищая стены от трещин на 50 лет вперед.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-400 border-t border-slate-100 pt-4">
              Точность расчетов: &lt; 0.1 мм прогиба плиты
            </div>
          </div>

          {/* Card 2: Microclimate & Air Quality */}
          <div className="bg-white border border-slate-200/60 p-8 rounded-lg space-y-6 shadow-sm">
            <div className="w-10 h-10 bg-emerald-800/5 rounded flex items-center justify-center text-emerald-800">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900">Управляемый микроклимат</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Рассчитываем объем приточно-вытяжной вентиляции с рекуперацией тепла. На каждого человека проектируется подача 60 м³ свежего очищенного воздуха в час. Никаких сквозняков, духоты или повышенной влажности.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-400 border-t border-slate-100 pt-4">
              Воздухообмен: 60 м³/час на человека
            </div>
          </div>

          {/* Card 3: Energy Efficiency */}
          <div className="bg-white border border-slate-200/60 p-8 rounded-lg space-y-6 shadow-sm">
            <div className="w-10 h-10 bg-emerald-800/5 rounded flex items-center justify-center text-emerald-800">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900">Теплотехническое моделирование</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Выполняем расчет тепловых мостов (мостиков холода) в узлах сопряжения фундамента, оконных рам и кровли. Это снижает расходы на отопление здания до 35% и полностью исключает образование плесени или конденсата.
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-400 border-t border-slate-100 pt-4">
              Класс энергоэффективности: А+ (высокий)
            </div>
          </div>

        </div>

        {/* Focus Statement block */}
        <div className="mt-16 p-6 md:p-8 bg-white border border-slate-200 rounded-lg flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900">Инженерный аудит существующего участка</h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
              Перед началом чертежей мы анализируем рельеф, уровень грунтовых вод и трассировку внешних электросетей, чтобы проект дома был изначально адаптирован под условия вашей земли.
            </p>
          </div>
          <a
            href="#quiz"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded cursor-pointer whitespace-nowrap text-center transition-all duration-300"
          >
            Получить техническую консультацию
          </a>
        </div>

      </div>
    </section>
  );
}
