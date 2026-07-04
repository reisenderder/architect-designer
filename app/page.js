import React from "react";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Архитектурные проекты",
      description: "Наше портфолио готовых и индивидуальных проектов. Посмотрите планировки, характеристики и минималистичные 3D рендеры фасадов.",
      link: "/projects",
      linkLabel: "Смотреть проекты",
      bgPattern: (
        <svg className="absolute bottom-0 right-0 w-24 h-24 text-emerald-800/5 group-hover:scale-110 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Мусульманское зонирование",
      description: "Особенности планировок: деление на мужскую и женскую половины (маджлис и приватная зона), защита двора и окон от посторонних глаз.",
      link: "/zoning",
      linkLabel: "Изучить концепцию",
      bgPattern: (
        <svg className="absolute bottom-0 right-0 w-24 h-24 text-emerald-800/5 group-hover:scale-110 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Инженерия и расчеты",
      description: "Конструктивная безопасность: расчет фундаментов, узлов примыкания, теплотехнические вычисления и разводка коммуникаций.",
      link: "/engineering",
      linkLabel: "Посмотреть инженерные решения",
      bgPattern: (
        <svg className="absolute bottom-0 right-0 w-24 h-24 text-emerald-800/5 group-hover:scale-110 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      )
    },
    {
      title: "Калькулятор стоимости",
      description: "Пройдите интерактивный конфигуратор параметров дома, чтобы сразу рассчитать смету на индивидуальное проектирование.",
      link: "/quiz",
      linkLabel: "Запустить калькулятор",
      bgPattern: (
        <svg className="absolute bottom-0 right-0 w-24 h-24 text-emerald-800/5 group-hover:scale-110 transition-transform duration-300 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 00-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Sections Teaser Grid */}
      <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <div className="text-xs uppercase tracking-wider text-emerald-800 font-bold">Разделы проекта</div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Индивидуальный подход к каждому этапу
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Мы разделили наш сайт на тематические разделы, чтобы вы могли глубже изучить принципы зонирования, наши инженерные стандарты и рассчитать бюджет.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feat) => (
              <div 
                key={feat.link} 
                className="group relative bg-white border border-slate-200/60 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[220px]"
              >
                {feat.bgPattern}
                <div className="space-y-4 relative z-10">
                  <h3 className="text-lg font-bold text-slate-950">{feat.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-md">{feat.description}</p>
                </div>
                <div className="pt-6 relative z-10">
                  <Link 
                    href={feat.link} 
                    className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 group/link"
                  >
                    <span>{feat.linkLabel}</span>
                    <svg className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
