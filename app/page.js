"use client";
import React from "react";
import Hero from "@/components/Hero";
import Zoning from "@/components/Zoning";
import Quiz from "@/components/Quiz";
import Engineering from "@/components/Engineering";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  const handleStartQuiz = () => {
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero onStartQuiz={handleStartQuiz} onViewProjects={handleViewProjects} />
        <Zoning />
        <Quiz />
        <Engineering />
        <Projects />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
