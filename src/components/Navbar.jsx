import React from 'react';
import { Github, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="relative inline-flex h-6 w-6 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-cyan-400/30 blur-sm transition-colors group-hover:bg-cyan-400/50" />
            <span className="relative h-3 w-3 rounded-[4px] bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-[0_0_20px_#00FFFF]" />
          </span>
          <span className="font-semibold tracking-tight text-zinc-100">Futurist.Dev</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#projects" className="text-sm text-zinc-300 transition-colors hover:text-white">Projects</a>
          <a href="#contact" className="text-sm text-zinc-300 transition-colors hover:text-white">Contact</a>
          <a href="#resume" className="text-sm text-zinc-300 transition-colors hover:text-white">Resume</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-full border border-white/10 p-2 text-zinc-300 transition hover:border-cyan-400/40 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="group rounded-full border border-white/10 p-2 text-zinc-300 transition hover:border-fuchsia-500/40 hover:text-white"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </header>
  );
}
