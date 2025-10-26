import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-zinc-100 selection:bg-cyan-400/20 selection:text-cyan-200">
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <Navbar />
      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
