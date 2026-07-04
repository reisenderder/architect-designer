"use client";
import React, { useState } from "react";

export default function Quiz() {
  const [step, setStep] = useState(1);
  
  // Selection States
  const [area, setArea] = useState("medium"); // small, medium, large
  const [stories, setStories] = useState("1"); // 1, 2
  const [privacyOptions, setPrivacyOptions] = useState({
    separateGuestEntrance: false,
    closedCourtyard: false,
    soundIsolation: false,
  });
  const [engineering, setEngineering] = useState("standard"); // standard, advanced, premium
  const [tariff, setTariff] = useState("optimal"); // concept, optimal, full

  // Calculation Logic (Estimated cost based on realistic parameters)
  const calculatePrice = () => {
    let basePricePerSqm = 800; // base price in rubles per sqm for design
    let areaMultiplier = area === "small" ? 120 : area === "medium" ? 200 : 320;
    
    // Base cost
    let cost = basePricePerSqm * areaMultiplier;
    
    // Story multiplier
    if (stories === "2") cost *= 1.15;
    
    // Privacy options additions
    if (privacyOptions.separateGuestEntrance) cost += 25000;
    if (privacyOptions.closedCourtyard) cost += 40000;
    if (privacyOptions.soundIsolation) cost += 15000;
    
    // Engineering system options
    if (engineering === "advanced") cost += 30000;
    if (engineering === "premium") cost += 60000;
    
    // Tariff multiplier
    if (tariff === "concept") cost *= 0.6; // 40% discount for conceptual sketches
    if (tariff === "full") cost *= 1.4;    // 40% premium for detailed construction specs
    
    return Math.round(cost);
  };

  const calculateDuration = () => {
    let baseDays = 30;
    if (area === "medium") baseDays += 10;
    if (area === "large") baseDays += 20;
    if (stories === "2") baseDays += 5;
    if (tariff === "concept") baseDays -= 10;
    if (tariff === "full") baseDays += 15;
    return baseDays;
  };

  // Form submission state
  const [submitted, setSubmitted] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const handleCheckboxChange = (key) => {
    setPrivacyOptions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (contactName && contactPhone) {
      setSubmitted(true);
    }
  };

  return (
    <section id="quiz" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-12">
          <div className="text-xs uppercase tracking-wider text-emerald-800 font-bold">Интерактивный расчет</div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Конфигуратор стоимости проекта</h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Ответьте на несколько ключевых вопросов, чтобы определить архитектурный объем и получить прозрачный расчет сметы проектирования.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-lg p-6 md:p-10 shadow-sm min-h-[400px] flex flex-col justify-between">
          
          {/* Top Progress bar */}
          {!submitted && (
            <div className="w-full flex items-center justify-between mb-8 text-xs font-mono text-slate-400">
              <span className="font-bold text-emerald-800">Шаг {step} из 4</span>
              <div className="flex gap-1 h-1.5 w-32 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="bg-emerald-800 transition-all duration-300 rounded-full" 
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Steps Content */}
          {!submitted && (
            <div className="flex-1 mb-8">
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-slate-950">1. Площадь здания и этажность</h3>
                  
                  <div className="space-y-4">
                    <label className="text-sm font-semibold text-slate-700 block">Ориентировочная площадь:</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        onClick={() => setArea("small")}
                        className={`p-4 border text-left rounded transition-all cursor-pointer ${
                          area === "small"
                            ? "border-emerald-800 bg-emerald-800/5 text-slate-950 font-semibold"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <span className="block text-sm">До 150 м²</span>
                        <span className="text-[11px] text-slate-400 block mt-1 font-mono">Компактный дом</span>
                      </button>
                      <button
                        onClick={() => setArea("medium")}
                        className={`p-4 border text-left rounded transition-all cursor-pointer ${
                          area === "medium"
                            ? "border-emerald-800 bg-emerald-800/5 text-slate-950 font-semibold"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <span className="block text-sm">150 – 250 м²</span>
                        <span className="text-[11px] text-slate-400 block mt-1 font-mono">Оптимальный для семьи</span>
                      </button>
                      <button
                        onClick={() => setArea("large")}
                        className={`p-4 border text-left rounded transition-all cursor-pointer ${
                          area === "large"
                            ? "border-emerald-800 bg-emerald-800/5 text-slate-950 font-semibold"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <span className="block text-sm">Свыше 250 м²</span>
                        <span className="text-[11px] text-slate-400 block mt-1 font-mono">Просторный дом</span>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4 pt-2">
                    <label className="text-sm font-semibold text-slate-700 block">Количество жилых этажей:</label>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setStories("1")}
                        className={`px-6 py-3 border rounded text-sm transition-all cursor-pointer ${
                          stories === "1"
                            ? "border-emerald-800 bg-emerald-800/5 text-slate-950 font-semibold"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        1 этаж
                      </button>
                      <button
                        onClick={() => setStories("2")}
                        className={`px-6 py-3 border rounded text-sm transition-all cursor-pointer ${
                          stories === "2"
                            ? "border-emerald-800 bg-emerald-800/5 text-slate-950 font-semibold"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        2 этажа
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-slate-950">2. Особенности приватности и зонирования</h3>
                  
                  <div className="space-y-4">
                    <p className="text-xs text-slate-500">
                      Отметьте архитектурные решения, которые необходимо внедрить для зонирования:
                    </p>

                    <div className="space-y-3">
                      <label className="flex items-start gap-3 p-4 border border-slate-200 bg-white rounded cursor-pointer hover:border-slate-300 select-none">
                        <input
                          type="checkbox"
                          checked={privacyOptions.separateGuestEntrance}
                          onChange={() => handleCheckboxChange("separateGuestEntrance")}
                          className="mt-1 accent-emerald-800"
                        />
                        <div>
                          <span className="block text-sm font-semibold text-slate-800">Автономный вход в Маджлис</span>
                          <span className="block text-[11px] text-slate-500 mt-0.5">Отдельная гостевая комната со своим тамбуром и с/у.</span>
                        </div>
                      </label>

                      <label className="flex items-start gap-3 p-4 border border-slate-200 bg-white rounded cursor-pointer hover:border-slate-300 select-none">
                        <input
                          type="checkbox"
                          checked={privacyOptions.closedCourtyard}
                          onChange={() => handleCheckboxChange("closedCourtyard")}
                          className="mt-1 accent-emerald-800"
                        />
                        <div>
                          <span className="block text-sm font-semibold text-slate-800">Закрытый внутренний дворик (Патио)</span>
                          <span className="block text-[11px] text-slate-500 mt-0.5">Зона отдыха на улице, защищенная от посторонних взглядов забором и фасадами.</span>
                        </div>
                      </label>

                      <label className="flex items-start gap-3 p-4 border border-slate-200 bg-white rounded cursor-pointer hover:border-slate-300 select-none">
                        <input
                          type="checkbox"
                          checked={privacyOptions.soundIsolation}
                          onChange={() => handleCheckboxChange("soundIsolation")}
                          className="mt-1 accent-emerald-800"
                        />
                        <div>
                          <span className="block text-sm font-semibold text-slate-800">Усиленная звукоизоляция комнат</span>
                          <span className="block text-[11px] text-slate-500 mt-0.5">Увеличение толщины перегородок между гостевой и семейной частью.</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-slate-950">3. Инженерные коммуникации</h3>
                  
                  <div className="space-y-4">
                    <label className="text-sm font-semibold text-slate-700 block">Тип систем отопления и вентиляции:</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        onClick={() => setEngineering("standard")}
                        className={`p-4 border text-left rounded transition-all cursor-pointer ${
                          engineering === "standard"
                            ? "border-emerald-800 bg-emerald-800/5 text-slate-950 font-semibold"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <span className="block text-sm">Базовый стандарт</span>
                        <span className="text-[11px] text-slate-400 block mt-1 font-mono">Естественная вентиляция, радиаторы.</span>
                      </button>
                      <button
                        onClick={() => setEngineering("advanced")}
                        className={`p-4 border text-left rounded transition-all cursor-pointer ${
                          engineering === "advanced"
                            ? "border-emerald-800 bg-emerald-800/5 text-slate-950 font-semibold"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <span className="block text-sm">Комфорт Плюс</span>
                        <span className="text-[11px] text-slate-400 block mt-1 font-mono">Приточно-вытяжная вентиляция с фильтрами, теплые полы.</span>
                      </button>
                      <button
                        onClick={() => setEngineering("premium")}
                        className={`p-4 border text-left rounded transition-all cursor-pointer ${
                          engineering === "premium"
                            ? "border-emerald-800 bg-emerald-800/5 text-slate-950 font-semibold"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <span className="block text-sm">Энергоэффективный</span>
                        <span className="text-[11px] text-slate-400 block mt-1 font-mono">Рекуперация тепла, автономный котел, геотермальный контур.</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-slate-950">4. Выбор пакета чертежей</h3>
                  
                  <div className="space-y-4">
                    <label className="text-sm font-semibold text-slate-700 block">Объем проектной документации:</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        onClick={() => setTariff("concept")}
                        className={`p-4 border text-left rounded transition-all cursor-pointer ${
                          tariff === "concept"
                            ? "border-emerald-800 bg-emerald-800/5 text-slate-950 font-semibold"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <span className="block text-sm">Эскизный проект</span>
                        <span className="text-[11px] text-slate-400 block mt-1 font-mono">Планировки, фасады, 3D эскиз.</span>
                      </button>
                      <button
                        onClick={() => setTariff("optimal")}
                        className={`p-4 border text-left rounded transition-all cursor-pointer ${
                          tariff === "optimal"
                            ? "border-emerald-800 bg-emerald-800/5 text-slate-950 font-semibold"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <span className="block text-sm">Рабочий проект</span>
                        <span className="text-[11px] text-slate-400 block mt-1 font-mono">Конструкции, узлы, материалы.</span>
                      </button>
                      <button
                        onClick={() => setTariff("full")}
                        className={`p-4 border text-left rounded transition-all cursor-pointer ${
                          tariff === "full"
                            ? "border-emerald-800 bg-emerald-800/5 text-slate-950 font-semibold"
                            : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <span className="block text-sm">Полный Инженерный</span>
                        <span className="text-[11px] text-slate-400 block mt-1 font-mono">Разделы ОВ, ВК, ЭО, расчет сетей.</span>
                      </button>
                    </div>
                  </div>

                  {/* Summary Live Calculation preview */}
                  <div className="mt-8 p-4 bg-emerald-800/5 border border-emerald-800/20 rounded flex justify-between items-center">
                    <div>
                      <span className="text-xs uppercase font-bold text-slate-500 tracking-wider">Предварительный расчет:</span>
                      <div className="text-xl font-bold text-emerald-800 font-mono mt-0.5">
                        {calculatePrice().toLocaleString("ru-RU")} руб.
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500">Ориентировочный срок:</span>
                      <div className="text-sm font-semibold text-slate-800 mt-0.5">~{calculateDuration()} дней</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Submitted Lead Form State */}
          {submitted && (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-8">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Смета и расчет сформированы</h3>
              <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                Спасибо за доверие. Мы подготовили подробный PDF-файл с расчетом материалов и планом зонирования для площади 
                {" "}{area === "small" ? "до 150" : area === "medium" ? "150-250" : "свыше 250"} м². Архитектор свяжется с вами по номеру <strong className="text-slate-800 font-mono">{contactPhone}</strong> в течение часа.
              </p>
              <div className="text-xs text-slate-400">
                Смета отправлена на обработку конструкторского бюро.
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          {!submitted && (
            <div className="border-t border-slate-200/60 pt-6 flex justify-between items-center">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-5 py-2 border border-slate-200 hover:border-slate-300 text-slate-600 text-xs font-semibold rounded cursor-pointer bg-white"
                >
                  Назад
                </button>
              ) : (
                <div></div>
              )}

              {step < 4 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded cursor-pointer border-none"
                >
                  Далее
                </button>
              ) : (
                <form onSubmit={handleFormSubmit} className="flex flex-col md:flex-row items-stretch gap-2 w-full md:w-auto">
                  <input
                    type="text"
                    required
                    placeholder="Ваше имя"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="px-4 py-2 border border-slate-200 rounded text-xs focus:border-emerald-800 focus:outline-none bg-white"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Номер телефона"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="px-4 py-2 border border-slate-200 rounded text-xs focus:border-emerald-800 focus:outline-none bg-white font-mono"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded cursor-pointer border-none whitespace-nowrap"
                  >
                    Получить расчет в PDF
                  </button>
                </form>
              )}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
