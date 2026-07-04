import React, { useState } from "react";

export default function Zoning() {
  const [activeTab, setActiveTab] = useState("family");

  return (
    <section id="zoning" className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs uppercase tracking-wider text-emerald-800 font-bold">
            Философия пространства
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Уважение к приватности: разделение потоков и защита от внешнего обзора
          </h2>
          <p className="text-slate-600 leading-relaxed">
            В проектировании мы руководствуемся правилом отсутствия излишеств и защитой границ семьи. Планировка дома разрабатывается так, чтобы семейный быт оставался закрытым от гостей и посторонних глаз.
          </p>
        </div>

        {/* Tabbed Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Columns - Text content & switcher */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex flex-col gap-2 bg-white p-2 border border-slate-100 rounded-lg">
              <button
                onClick={() => setActiveTab("family")}
                className={`text-left px-4 py-3 rounded text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === "family"
                    ? "bg-emerald-800 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                Семейное зонирование
              </button>
              <button
                onClick={() => setActiveTab("guest")}
                className={`text-left px-4 py-3 rounded text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === "guest"
                    ? "bg-emerald-800 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                Гостевые потоки (Маджлис)
              </button>
              <button
                onClick={() => setActiveTab("windows")}
                className={`text-left px-4 py-3 rounded text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === "windows"
                    ? "bg-emerald-800 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                Защита окон от обзора
              </button>
            </div>

            <div className="space-y-6">
              {activeTab === "family" && (
                <>
                  <h3 className="text-xl font-bold text-slate-900">Закрытая внутренняя зона для домочадцев</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Кухня, спальные комнаты и детские зоны полностью изолированы. При открытии входной двери или нахождении гостей в гостиной, приватная часть дома остается абсолютно невидимой. Женщина может комфортно перемещаться по семейной половине без необходимости надевать покрывало.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 mt-2"></span>
                      Кухня имеет отдельный рабочий вход или полностью изолирована от гостиной.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 mt-2"></span>
                      Личные коридоры и санузлы не пересекаются с транзитными путями гостей.
                    </li>
                  </ul>
                </>
              )}

              {activeTab === "guest" && (
                <>
                  <h3 className="text-xl font-bold text-slate-900">Маджлис — автономная гостевая зона</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Комната приема гостей имеет свой независимый вход и санузел. Гостевой поток полностью локализован в передней части дома. Это позволяет принимать друзей и родственников в любое время, сохраняя покой и быт семьи на жилой половине.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 mt-2"></span>
                      Отдельный тамбур для гостей, препятствующий сквознякам и обзору.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 mt-2"></span>
                      Шумоизоляция между гостевой зоной и спальнями более 55 дБ.
                    </li>
                  </ul>
                </>
              )}

              {activeTab === "windows" && (
                <>
                  <h3 className="text-xl font-bold text-slate-900">Инженерный расчет углов видимости</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Мы рассчитываем высоту подоконников, углы наклона стекол и направление проемов относительно соседних участков и заборов. Это позволяет наполнить дом солнечным светом (инсоляция по ГОСТ), полностью исключая обзор комнат с улицы.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 mt-2"></span>
                      Приоритет окон спален во внутренний двор или сад.
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 mt-2"></span>
                      Использование архитектурных выступов, эркеров и ламелей для защиты приватности.
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Right Columns - Visual representation of zoning */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 p-6 md:p-8 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Схема планировки первого этажа (AD-210)
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-50 border border-slate-100 rounded text-slate-600">
                Площадь: 210 м²
              </span>
            </div>

            <div className="relative aspect-[16/10] bg-slate-50 border border-slate-100 rounded flex items-center justify-center p-4">
              {/* Dynamic zoning plan highlighting based on active tab */}
              <svg viewBox="0 0 400 240" fill="none" className="w-full h-full text-slate-300" stroke="currentColor" strokeWidth="1">
                {/* External Walls */}
                <rect x="20" y="20" width="360" height="200" stroke="rgb(15, 23, 42)" strokeWidth="2.5" fill="none" />
                
                {/* Inside Wall Layout */}
                {/* Separating wall between family and guest zones */}
                <line x1="180" y1="20" x2="180" y2="220" stroke="rgb(15, 23, 42)" strokeWidth="2" />
                
                {/* Guest divisions */}
                <line x1="20" y1="120" x2="180" y2="120" stroke="rgb(15, 23, 42)" strokeWidth="1.5" />
                <line x1="100" y1="120" x2="100" y2="220" stroke="rgb(15, 23, 42)" strokeWidth="1.5" />

                {/* Family divisions */}
                <line x1="180" y1="100" x2="380" y2="100" stroke="rgb(15, 23, 42)" strokeWidth="1.5" />
                <line x1="280" y1="100" x2="280" y2="220" stroke="rgb(15, 23, 42)" strokeWidth="1.5" />

                {/* Door symbols */}
                {/* Main entrance to guest */}
                <path d="M 60 220 A 20 20 0 0 1 80 200" stroke="rgb(15, 23, 42)" strokeWidth="1.5" strokeDasharray="1.5" />
                <line x1="60" y1="200" x2="80" y2="200" stroke="rgb(15, 23, 42)" strokeWidth="1.5" />

                {/* Entrance to family */}
                <path d="M 330 220 A 20 20 0 0 1 350 200" stroke="rgb(15, 23, 42)" strokeWidth="1.5" strokeDasharray="1.5" />
                <line x1="330" y1="200" x2="350" y2="200" stroke="rgb(15, 23, 42)" strokeWidth="1.5" />
                
                {/* Zoning Color Highlight Masks */}
                {activeTab === "family" && (
                  <rect x="181" y="21" width="198" height="198" fill="rgba(6, 95, 70, 0.08)" stroke="rgb(6, 95, 70)" strokeWidth="1.5" />
                )}
                {activeTab === "guest" && (
                  <rect x="21" y="21" width="158" height="198" fill="rgba(6, 95, 70, 0.08)" stroke="rgb(6, 95, 70)" strokeWidth="1.5" />
                )}
                {activeTab === "windows" && (
                  <>
                    {/* Highlight window vectors */}
                    <path d="M 280 20 L 280 0 M 340 20 L 340 0" stroke="rgb(6, 95, 70)" strokeWidth="2.5" />
                    <polygon points="260,-10 300,-10 280,20" fill="rgba(6, 95, 70, 0.15)" stroke="none" />
                    <polygon points="320,-10 360,-10 340,20" fill="rgba(6, 95, 70, 0.15)" stroke="none" />
                    <text x="250" y="-12" className="text-[7px] font-mono fill-emerald-800 font-bold" stroke="none">Ограничение видимости</text>
                  </>
                )}

                {/* Labels */}
                <text x="35" y="60" className="text-[10px] font-sans font-bold fill-slate-800" stroke="none">Маджлис (Мужской)</text>
                <text x="35" y="150" className="text-[10px] font-sans font-bold fill-slate-800" stroke="none">Маджлис (Женский)</text>
                <text x="115" y="150" className="text-[9px] font-sans fill-slate-500" stroke="none">Тамбур / С/У</text>
                
                <text x="220" y="60" className="text-[10px] font-sans font-bold fill-slate-800" stroke="none">Семейная гостиная</text>
                <text x="200" y="145" className="text-[10px] font-sans font-bold fill-slate-800" stroke="none">Кухня</text>
                <text x="305" y="145" className="text-[10px] font-sans font-bold fill-slate-800" stroke="none">Спальни</text>
              </svg>
            </div>
            
            <div className="mt-4 flex gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-emerald-800/10 border border-emerald-800/30 rounded"></span>
                <span>Выделенная зона на плане</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-[2px] bg-slate-900"></span>
                <span>Капитальные несущие стены (звукоизоляция)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
