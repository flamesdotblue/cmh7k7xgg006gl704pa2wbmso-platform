import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Nexus Dashboard',
    description:
      'A glowing analytics dashboard with AI-assisted insights, real-time charts, and buttery smooth scroll physics.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'AI'],
    href: 'https://example.com',
  },
  {
    title: 'Holofolio Generator',
    description:
      'CLI to generate modern developer portfolios with MDX content, Shiki code blocks, and shadcn UI components.',
    tags: ['Node', 'MDX', 'Shiki', 'shadcn/ui'],
    href: 'https://example.com',
  },
  {
    title: 'Lumen Chat Assistant',
    description:
      'Streaming AI chat widget with markdown support, suggestions, and rate-limited API integration.',
    tags: ['React', 'Streaming', 'Edge'],
    href: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-10 sm:py-16">
      <div className="mb-8 flex items-baseline justify-between">
        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Featured Projects
        </h2>
        <div className="ml-6 h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative rounded-xl border border-white/10 bg-white/5 p-5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] transition hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(0,255,255,0.15),inset_0_0_0_1px_rgba(255,255,255,0.06)]"
          >
            <div
              className="absolute -inset-px -z-10 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: 'radial-gradient(60% 60% at 50% 0%, rgba(0,255,255,0.25) 0%, rgba(122,0,255,0.20) 60%, transparent 100%)' }}
            />
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-medium text-white">{p.title}</h3>
              <ExternalLink className="h-4 w-4 text-zinc-400 transition group-hover:text-cyan-300" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <div id="contact" className="mt-12 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 text-center">
        <p className="text-sm text-zinc-300">Interested in collaborating or hiring?</p>
        <a
          href="mailto:hello@example.com"
          className="mt-3 inline-block rounded-lg border border-fuchsia-500/40 bg-fuchsia-500/10 px-4 py-2 text-sm font-medium text-fuchsia-200 shadow-[0_0_20px_rgba(122,0,255,0.25)_inset] transition hover:bg-fuchsia-500/20"
        >
          Say hello
        </a>
      </div>

      <span id="resume" className="sr-only" aria-hidden />
    </section>
  );
}
