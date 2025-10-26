import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative py-16 sm:py-24">
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          <div className="relative mb-6">
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-600 opacity-30 blur" />
            <div className="relative h-28 w-28 overflow-hidden rounded-full border border-white/10 bg-zinc-900 shadow-[0_0_30px_rgba(0,255,255,0.25)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,255,0.25),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(122,0,255,0.25),transparent_60%)]" />
            </div>
          </div>
          <h1 className="bg-gradient-to-br from-white via-cyan-100 to-fuchsia-200 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-5xl">
            Building futuristic, AI-augmented web experiences
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-sm text-zinc-300 sm:text-base">
            I’m a developer crafting neon-infused, high-performance interfaces with modern stacks. Motion, clarity, and intelligent interaction are my north star.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#projects"
              className="rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-medium text-cyan-200 shadow-[0_0_20px_rgba(0,255,255,0.25)_inset] transition hover:bg-cyan-400/20"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#contact"
              className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/90 transition hover:border-fuchsia-500/40 hover:bg-white/10"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs text-zinc-400">
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Next.js</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">TypeScript</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Tailwind</span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Framer Motion</span>
        </div>
      </div>
    </section>
  );
}
