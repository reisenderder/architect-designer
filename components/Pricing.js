import React from "react";

export default function Pricing() {
  const plans = [
    {
      title: "Эскизный проект",
      subtitle: "Концепция и зонирование",
      price: "1 000",
      description: "Подходит для предварительного согласования и определения общей архитектурной концепции дома.",
      features: [
        "Обмеры участка и посадка дома на генплан",
        "Архитектурно-планировочные решения (халяль-зонирование)",
        "3D визуализация фасадов (минималистичные рендеры)",
        "Расстановка мебели и сантехники",
        "Предварительная смета материалов"
      ],
      isPopular: false,
      ctaText: "Выбрать Эскизный"
    },
    {
      title: "Архитектурно-Строительный",
      subtitle: "Рабочий проект под ключ",
      price: "1 800",
      description: "Полный комплект документации, необходимый для строительной бригады и заливки фундамента.",
      features: [
        "Все опции эскизного проекта",
        "Конструктивные чертежи (фундамент, стены, перекрытия)",
        "Узлы примыканий и спецификации арматуры/бетона",
        "Архитектурные разрезы стен и кровли",
        "Шумоизоляционный расчет перегородок",
        "План благоустройства двора"
      ],
      isPopular: true,
      ctaText: "Выбрать Рабочий"
    },
    {
      title: "Полный рабочий + Сети",
      subtitle: "Инженерная безопасность",
      price: "2 800",
      description: "Максимальный пакет чертежей с расчетом всех коммуникаций и систем энергоэффективности.",
      features: [
        "Все опции рабочего проекта",
        "Схемы отопления и разводки труб (ВК)",
        "Проект приточно-вытяжной вентиляции (ОВ)",
        "План слаботочных систем и электрики",
        "Теплотехническая карта мостиков холода",
        "Авторский надзор на этапе старта фундамента"
      ],
      isPopular: false,
      ctaText: "Выбрать Инженерный"
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="text-xs uppercase tracking-wider text-emerald-800 font-bold">Ценообразование</div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Прозрачная стоимость проектирования</h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Никаких скрытых платежей или необоснованного роста сметы. Цены зафиксированы в договоре и рассчитываются за квадратный метр площади дома.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white border rounded-lg p-8 flex flex-col justify-between shadow-sm relative transition-all duration-300 hover:shadow-md ${
                plan.isPopular 
                  ? "border-emerald-800 ring-2 ring-emerald-800/10 scale-105 z-10" 
                  : "border-slate-200/80"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-800 text-white text-[9px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                  Рекомендуемый объем
                </span>
              )}

              <div className="space-y-6">
                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-slate-950">{plan.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 border-b border-slate-100 pb-6">
                  <span className="text-3xl font-extrabold text-slate-950 font-mono">{plan.price}</span>
                  <span className="text-sm font-semibold text-slate-500">руб / м²</span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-3.5 text-xs text-slate-700">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-slate-50 mt-8">
                <a
                  href="#quiz"
                  className={`w-full inline-block text-center py-3 text-xs font-semibold rounded transition-all duration-200 cursor-pointer ${
                    plan.isPopular
                      ? "bg-emerald-800 hover:bg-emerald-900 text-white shadow-sm"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
