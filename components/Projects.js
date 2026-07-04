"use client";
import React, { useState } from "react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projectList = [
    {
      id: "ad-160",
      title: "Одноэтажная вилла AD-160",
      category: "one-story",
      area: "160 м²",
      floors: "1",
      bedrooms: "3 спальни",
      zoning: "Мужской Маджлис, Семейная Кухня",
      dimensions: "16 x 12 м",
      description: "Компактное решение для небольшой семьи. Идеальное халяль-зонирование на одном этаже с буферным холлом."
    },
    {
      id: "ad-230",
      title: "Двухэтажный дом AD-230",
      category: "two-story",
      area: "230 м²",
      floors: "2",
      bedrooms: "4 спальни",
      zoning: "Маджлис на 1-м этаже, спальни на 2-м",
      dimensions: "14 x 11 м",
      description: "Оптимальный загородный дом. Гостиная зона полностью изолирована от спален второго этажа."
    },
    {
      id: "ad-310",
      title: "Архитектурная усадьба AD-310",
      category: "two-story",
      area: "310 м²",
      floors: "2",
      bedrooms: "5 спален",
      zoning: "Закрытый двор, два входа, просторный Маджлис",
      dimensions: "18 x 16 м",
      description: "Просторное решение с внутренним патио и двумя раздельными входами для хозяев и гостей."
    }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projectList 
    : projectList.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl space-y-4">
            <div className="text-xs uppercase tracking-wider text-emerald-800 font-bold">Портфолио решений</div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Реализованные планировочные проекты</h2>
            <p className="text-slate-600 text-sm">
              Каждый проект прошел детальный конструкторский расчет и полностью адаптирован под требования мусульманской этики и приватности.
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-2 bg-slate-50 p-1 border border-slate-200/60 rounded">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              Все
            </button>
            <button
              onClick={() => setSelectedCategory("one-story")}
              className={`px-4 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === "one-story"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              1 этаж
            </button>
            <button
              onClick={() => setSelectedCategory("two-story")}
              className={`px-4 py-1.5 rounded text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === "two-story"
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              2 этажа
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group bg-slate-50 border border-slate-200/60 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* SVG floorplan placeholder */}
                <div className="bg-slate-100 aspect-video p-6 flex items-center justify-center border-b border-slate-200/60 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.02]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <rect width="100%" height="100%" fill="none" stroke="#000" strokeWidth="2" strokeDasharray="5 5" />
                    </svg>
                  </div>
                  
                  {/* Schematic draft */}
                  <svg viewBox="0 0 100 60" className="w-1/2 text-slate-400 group-hover:text-emerald-800 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="5" y="5" width="90" height="50" strokeWidth="1.5" />
                    <line x1="50" y1="5" x2="50" y2="55" />
                    <line x1="50" y1="30" x2="95" y2="30" />
                    <circle cx="50" cy="30" r="2" fill="currentColor" />
                  </svg>
                  
                  <div className="absolute bottom-3 left-3 bg-white/95 px-2 py-0.5 border border-slate-200 rounded text-[9px] font-mono text-slate-500 shadow-sm">
                    {project.dimensions}
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-emerald-800 font-bold uppercase tracking-wider">
                      {project.id.toUpperCase()}
                    </span>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-emerald-800 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 text-[11px] border-t border-slate-100 pt-3">
                    <div className="text-slate-500">
                      Площадь: <span className="font-semibold text-slate-800">{project.area}</span>
                    </div>
                    <div className="text-slate-500">
                      Этажей: <span className="font-semibold text-slate-800">{project.floors}</span>
                    </div>
                    <div className="text-slate-500 col-span-2">
                      Планировка: <span className="font-semibold text-slate-800">{project.bedrooms}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                <a
                  href="#quiz"
                  className="w-full inline-block text-center py-2.5 bg-white border border-slate-200 hover:border-emerald-800 text-slate-700 hover:text-emerald-800 text-xs font-semibold rounded transition-colors"
                >
                  Заказать расчет по образцу
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
