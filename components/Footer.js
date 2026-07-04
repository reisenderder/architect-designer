"use client";
import React, { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone) {
      setSubmitted(true);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 md:py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
        
        {/* Left Side: Call back form */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white tracking-tight">Обсудить проект с архитектором</h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Свяжитесь с нами для обсуждения параметров вашего участка и планировки. Мы ответим на вопросы по мусульманскому зонированию и конструктивным нагрузкам. Первая консультация ни к чему вас не обязывает.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Вы также можете направить техническое задание на почту: <a href="mailto:mado@mail.de" className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors">mado@mail.de</a>
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-700 font-sans"
                />
                <input
                  type="tel"
                  required
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-slate-700 text-white rounded text-sm placeholder-slate-500 focus:outline-none focus:border-emerald-700 font-mono"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-emerald-800 hover:bg-emerald-950 text-white font-medium text-sm tracking-wide rounded cursor-pointer transition-colors duration-300 border-none"
              >
                Отправить заявку
              </button>
            </form>
          ) : (
            <div className="p-6 bg-slate-800 border border-slate-700 rounded-lg space-y-3 max-w-md">
              <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="text-white font-bold text-sm">Заявка принята</h4>
              <p className="text-xs text-slate-400">
                Благодарим вас, {name}. Мы перезвоним по телефону <span className="font-mono">{phone}</span> в ближайшее время.
              </p>
            </div>
          )}
        </div>

        {/* Right Side: Links & Contact Details */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:justify-items-end">
          
          {/* Menu column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Контакты и часы работы</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <span className="block text-xs text-slate-500">Адрес офиса:</span>
                <span className="text-slate-300">Altenhagener Straße 65, 58097 Hagen</span>
              </li>
              <li>
                <span className="block text-xs text-slate-500">Телефон:</span>
                <div className="flex flex-col space-y-0.5">
                  <span className="text-slate-300 font-mono">+7 (843) 123-45-67</span>
                  <span className="text-slate-300 font-mono">+49 176 56970485</span>
                </div>
              </li>
              <li>
                <span className="block text-xs text-slate-500">Email:</span>
                <a href="mailto:mado@mail.de" className="text-slate-300 hover:text-white transition-colors font-mono">mado@mail.de</a>
              </li>
              <li>
                <span className="block text-xs text-slate-500">Режим работы:</span>
                <span className="text-slate-300">Пн - Пт: 09:00 - 18:00</span>
              </li>
            </ul>
          </div>

          {/* Socials / Telegram */}
          <div className="space-y-4 lg:w-48">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Мессенджеры</h4>
            <div className="flex flex-col gap-2">
              <a 
                href="https://t.me/" 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 border border-slate-700 hover:border-slate-500 rounded text-center text-xs font-semibold text-slate-300 transition-colors"
              >
                Telegram
              </a>
              <a 
                href="https://wa.me/4917656970485" 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 border border-slate-700 hover:border-slate-500 rounded text-center text-xs font-semibold text-slate-300 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Sub Footer details */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>
          © {new Date().getFullYear()} architect.designer. Все права защищены.
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-400">Политика конфиденциальности</a>
          <span>·</span>
          <a href="#" className="hover:text-slate-400 font-mono">AD-1.0.0</a>
        </div>
      </div>
    </footer>
  );
}
