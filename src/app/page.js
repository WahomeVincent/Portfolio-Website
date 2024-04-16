"use client"
import React, { useRef } from 'react';
import About from "./components/About";
import EmailSection from "./components/EmailSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <main className="flex min-h-screen flex-col bg-[#0B0033]">
        <Navbar />
        <section id="heroSection" ref={heroRef}>
          <HeroSection />
        </section>
        <section id="about" ref={aboutRef}>
          <About />
        </section>
        <section id="projects" ref={projectsRef}>
          <ProjectSection />
        </section>
        <section id="contact" ref={contactRef}>
          <EmailSection />
        </section>
        {/* <ProjectSection />
        <EmailSection /> */}
        <Footer />
    </main>
  );
}
