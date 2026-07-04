import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white border-b border-slate-100 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main Hero Body */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded text-xs font-semibold text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
            Инженерная точность и уважение традиций
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] max-w-2xl">
            Проектируем дома для жизни и приватности вашей семьи. <span className="text-emerald-800">С точностью до миллиметра.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            Создаем архитектурные решения с разделением гостевых и жилых зон. Рассчитываем инсоляцию, углы обзора из окон и нагрузки инженерных сетей до начала строительства.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/quiz"
              className="px-8 py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-sm tracking-wide transition-all duration-300 rounded shadow-sm hover:shadow shadow-emerald-800/10 text-center font-sans"
            >
              Рассчитать стоимость проекта
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm tracking-wide transition-all duration-300 rounded text-center font-sans"
            >
              Смотреть проекты
            </Link>
          </div>
        </div>

        {/* Visual Graphic Representation */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="w-full max-w-[420px] aspect-[4/5] bg-slate-50 border border-slate-200/60 p-8 rounded-lg shadow-xl shadow-slate-100 relative overflow-hidden flex flex-col justify-between">
            {/* Minimal architectural floor plan mockup SVG */}
            <div className="absolute top-0 right-0 w-32 h-32 text-slate-200 pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                <circle cx="100" cy="0" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="100" cy="0" r="100" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">Concept Sketch</div>
              <div className="h-px bg-slate-200 w-1/3"></div>
            </div>

            {/* Simulated blueprint drawing */}
            <div className="my-auto py-8">
              <svg viewBox="0 0 200 150" fill="none" className="w-full text-slate-800 opacity-80" stroke="currentColor" strokeWidth="1.5">
                {/* External walls */}
                <rect x="10" y="10" width="180" height="130" strokeWidth="2" />
                
                {/* Rooms */}
                <line x1="90" y1="10" x2="90" y2="140" />
                <line x1="90" y1="80" x2="190" y2="80" />
                
                {/* Doors and opening indicators */}
                <path d="M 90 40 A 30 30 0 0 1 120 70" strokeDasharray="2 2" />
                <line x1="90" y1="70" x2="120" y2="70" />
                
                {/* Buffer Zone indicator */}
                <rect x="75" y="45" width="30" height="40" fill="rgba(6, 95, 70, 0.08)" stroke="rgb(6, 95, 70)" strokeWidth="1" />
                
                {/* Callouts */}
                <circle cx="90" cy="40" r="4" fill="currentColor" />
                <text x="110" y="30" className="text-[9px] font-mono fill-emerald-800" stroke="none">Буферный тамбур</text>
                
                <text x="25" y="75" className="text-[10px] font-sans font-semibold fill-slate-700" stroke="none">Семейная Зона</text>
                <text x="105" y="115" className="text-[10px] font-sans font-semibold fill-slate-700" stroke="none">Гостевая Зона</text>
              </svg>
            </div>

            <div className="flex justify-between items-end">
              <div className="text-[10px] font-mono text-slate-400">
                Scale: 1:100<br />
                Model ID: AD-150
              </div>
              <div className="text-xs font-semibold text-emerald-800 flex items-center gap-1">
                <span>100% Приватность</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
