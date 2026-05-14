import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 md:flex-row md:items-center md:justify-between">
        
        <div>
          <h2 className="text-2xl font-bold text-white">
            Dream<span className="text-cyan-400">Pitch</span>
          </h2>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            Premium interactive sales presentation for American Dream Mall.
            Crafted with cinematic storytelling and luxury digital experiences.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          
          <a
            href="#"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            Instagram

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            Twitter

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#"
            className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
          >
            LinkedIn

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

        </div>
      </div>

      <div className="border-t border-white/5 py-6 text-center">
        <p className="text-xs tracking-wide text-white/40">
          © 2026 DreamPitch. Designed for American Dream Mall.
        </p>
      </div>
    </footer>
  );
}