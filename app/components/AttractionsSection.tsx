"use client";

import { motion } from "framer-motion";
import { Waves, Snowflake, Fish, Sparkles, FerrisWheel, Trophy } from "lucide-react";
import { ATTRACTIONS } from "../lib/constants";
import Image from "next/image";

const icons = [FerrisWheel, Waves, Snowflake, Fish, Sparkles, Trophy];

export default function AttractionsSection() {
  return (
    <section id="attractions" className="relative section-padding overflow-hidden">

      <div className="absolute inset-0">
        <Image
          src="/images/attractions-bg.jpg"
          alt="Indoor theme park"
          fill
          quality={75}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/85 via-[#050816]/70 to-[#050816]/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
              Attractions & Entertainment
            </p>
            <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Entertainment Is The
              <span className="gradient-text block">Traffic Engine</span>
            </h2>
            <p className="text-lg leading-relaxed text-white/70">
              American Dream was built around experiences first —
              creating year-round destination traffic unmatched by
              traditional retail centers.
            </p>
          </div>
          <div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 to-amber-300/10 px-8 py-6">
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-200">EXPERIENCE MIX</p>
            <h3 className="text-5xl font-black">70/30</h3>
            <p className="text-white/70">Entertainment / Retail Ratio</p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ATTRACTIONS.map((attraction, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={attraction.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">
                  <Icon size={30} className="text-cyan-300" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">{attraction.name}</h3>
                <p className="leading-relaxed text-white/70">{attraction.description}</p>
                <div className="mt-auto pt-6">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                    <p className="text-sm uppercase tracking-wider text-cyan-200">Highlight</p>
                    <p className="mt-2 font-semibold text-white">{attraction.highlight}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}