"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const filters = ["All", "Luxury", "Mid-Tier", "Pop-Up", "Flagship"];

const retailSpaces = [
  { title: "Luxury Flagship", category: "Luxury", size: "8,000 - 20,000 sq ft", rate: "$900/sq ft" },
  { title: "Fashion Retail", category: "Mid-Tier", size: "2,500 - 6,000 sq ft", rate: "$450/sq ft" },
  { title: "Experiential Pop-Up", category: "Pop-Up", size: "500 - 2,000 sq ft", rate: "$250/sq ft" },
  { title: "Anchor Opportunity", category: "Flagship", size: "20,000+ sq ft", rate: "Custom Pricing" },
];

export default function RetailSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredSpaces =
    activeFilter === "All"
      ? retailSpaces
      : retailSpaces.filter((space) => space.category === activeFilter);

  return (
    <section id="retail" className="relative section-padding overflow-hidden">

      {/* ── Background Image ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/retail-bg.jpg"
          alt="Luxury retail corridor"
          fill
          quality={90}
          className="pointer-events-none select-none object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/85 via-[#050816]/70 to-[#050816]/90" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
              Retail Opportunities
            </p>
            <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              A Retail Ecosystem Built For
              <span className="gradient-text block">
                Modern Consumer Attention
              </span>
            </h2>
            <p className="text-lg text-white/70">
              High-frequency traffic meets experiential retail,
              luxury positioning, and destination-driven commerce.
            </p>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex cursor-pointer items-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            Start Leasing Conversation
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "border-cyan-300 bg-cyan-400/20 text-cyan-200"
                  : "border-white/10 bg-white/5 text-white/70 hover:border-cyan-300/40 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {filteredSpaces.map((space, index) => (
            <motion.div
              key={space.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30"
            >
              <div className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-wider text-cyan-200">
                {space.category}
              </div>
              <h3 className="mb-4 text-2xl font-bold">{space.title}</h3>
              <div className="space-y-3 text-white/70">
                <p>{space.size}</p>
                <p className="font-semibold text-white">{space.rate}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}