import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-zinc-400">© {new Date().getFullYear()} Futurist.Dev — Crafted with glow and care.</p>
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <a href="#projects" className="transition hover:text-zinc-200">Projects</a>
          <a href="#contact" className="transition hover:text-zinc-200">Contact</a>
          <a href="#home" className="transition hover:text-zinc-200">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
