"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden section-padding pt-24 md:pt-28">

      {/* ── Background Image (no -z-10, just absolute) ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="American Dream Mall"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 via-[#050816]/40 to-[#050816]/85" />
        {/* Glows on top */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-300/10 blur-3xl" />
      </div>

      {/* ── Content — relative + z-10 so it sits ABOVE the image ── */}
      <div className="relative z-10 max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-sm uppercase tracking-[0.4em] text-cyan-300"
        >
          DreamPitch • Interactive Sales Deck
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 max-w-6xl text-5xl font-black leading-[0.9] sm:text-6xl md:text-7xl lg:text-[8rem]"
        >
          AMERICAN
          <span className="gradient-text block">DREAM</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
        >
          3 million sq ft. 70% entertainment, 30% retail.
          A next-generation destination blending luxury shopping,
          attractions, dining, hospitality, and immersive events.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            Explore Opportunities
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <a
            href="https://youtu.be/nopCu-UonPE?si=C7_EO8mEIoDE7Y3S"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-300/50 hover:bg-white/10"
          >
            Watch Overview
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            ["3M+", "Square Feet"],
            ["40M+", "Annual Visitors"],
            ["450+", "Retail Spaces"],
            ["70%", "Entertainment"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="glass-card rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
            >
              <h3 className="mb-2 text-3xl font-black md:text-4xl">{value}</h3>
              <p className="text-sm uppercase tracking-wider text-white/60">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}