"use client";

import { motion } from "framer-motion";
import { Diamond, ArrowRight } from "lucide-react";

import { LUXURY_BRANDS } from "../lib/constants";

export default function LuxurySection() {
  return (
    <section id="luxury" className="section-padding relative">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Luxury Retail
          </p>

          <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            The Avenue
            <span className="gradient-text block">
              Premium Luxury Wing
            </span>
          </h2>

          <p className="mb-8 text-lg leading-relaxed text-white/70">
            Designed for global luxury brands seeking flagship
            visibility inside one of North America’s most ambitious
            retail and entertainment destinations.
          </p>

          <div className="glass-card rounded-3xl p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Flagship Opportunities
            </h3>

            <p className="mb-8 text-white/70">
              Ultra-premium storefronts positioned alongside luxury
              fashion, experiential retail, hospitality, and
              high-income visitor traffic.
            </p>

            <button
              onClick={() => {
                const el = document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              Explore Luxury Leasing

              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8"
        >
          <div className="mb-8 flex items-center gap-3">
            <Diamond className="text-cyan-300" />

            <h3 className="text-2xl font-bold">
              Featured Luxury Brands
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {LUXURY_BRANDS.map((brand) => (
              <div
                key={brand}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/10"
              >
                <Diamond
                  size={16}
                  className="text-cyan-300"
                />

                <span className="font-medium text-white/90">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}