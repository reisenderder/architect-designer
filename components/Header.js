"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "Проекты", href: "/projects" },
    { label: "Приватность", href: "/zoning" },
    { label: "Инженерия", href: "/engineering" },
    { label: "Калькулятор", href: "/quiz" },
    { label: "Цены", href: "/pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span className="w-3 h-3 rounded-full bg-emerald-800"></span>
          <span>architect.designer</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 ${
                  isActive 
                    ? "text-emerald-800 font-bold" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div>
          <Link
            href="/quiz"
            className="text-xs font-semibold px-4 py-2 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 rounded block text-center"
          >
            Консультация
          </Link>
        </div>
      </div>
    </header>
  );
}
