"use client";

import { motion } from "framer-motion";
import { ChefHat, UtensilsCrossed } from "lucide-react";
import { DINING_VENUES } from "../lib/constants";
import Image from "next/image";

export default function DiningSection() {
  return (
    <section id="dining" className="relative section-padding overflow-hidden">

      <div className="absolute inset-0">
        <Image
          src="/images/dining-bg.jpg"
          alt="Luxury dining"
          fill
          quality={75}
          className="pointer-events-none select-none object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/85 via-[#050816]/70 to-[#050816]/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Dining & Lifestyle
          </p>
          <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            Food As A
            <span className="gradient-text block">Destination Experience</span>
          </h2>
          <p className="text-lg leading-relaxed text-white/70">
            Curated culinary experiences ranging from celebrity chef
            concepts to luxury dining and high-volume social food halls.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {DINING_VENUES.map((venue, index) => (
            <motion.div
              key={venue.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                  <UtensilsCrossed className="text-cyan-300" />
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-white/70">
                  {venue.type}
                </div>
              </div>
              <h3 className="mb-3 text-2xl font-bold">{venue.name}</h3>
              <p className="text-white/70">{venue.cuisine}</p>
              <div className="mt-auto pt-6">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <ChefHat size={18} className="mt-0.5 text-cyan-300" />
                  <p className="text-sm leading-relaxed text-white/70">{venue.specialty}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}