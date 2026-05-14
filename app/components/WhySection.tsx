"use client";

import { motion } from "framer-motion";
import {
  Globe,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";

import { LOCATION, MALL_STATS } from "../lib/constants";
import SectionHeading from "./SectionHeading";

export default function WhySection() {
  const stats = [
    {
      title: "Total GLA",
      value: `${MALL_STATS.squareFeet} sq ft`,
      icon: Globe,
    },
    {
      title: "Annual Visitors",
      value: MALL_STATS.annualVisitors,
      icon: Users,
    },
    {
      title: "Entertainment Focus",
      value: MALL_STATS.entertainmentPercent,
      icon: Trophy,
    },
    {
      title: "Leased Occupancy",
      value: MALL_STATS.leasedPercent,
      icon: MapPin,
    },
  ];

  return (
    <section id="why" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Why American Dream"
            title="Built For The Future Of"
            gradient="Destination Commerce"
            description="Positioned minutes from Manhattan, American Dream combines luxury retail, immersive entertainment, tourism, and live experiences into one high-frequency destination."
          />
        </motion.div>

        {/* Stats */}
        <div className="mb-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                  <Icon className="text-cyan-300" size={28} />
                </div>

                <h3 className="mb-2 text-3xl font-black">
                  {item.value}
                </h3>

                <p className="text-sm uppercase tracking-wider text-white/60">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 lg:col-span-2"
          >
            <div className="mb-6 flex items-center gap-3">
              <MapPin className="text-cyan-300" />

              <h3 className="text-2xl font-bold">
                Prime Northeast Access
              </h3>
            </div>

            <p className="mb-6 text-white/70">
              {LOCATION.city} • {LOCATION.distanceToNYC}
            </p>

            <div className="flex flex-wrap gap-3">
              {LOCATION.nearby.map((place) => (
                <div
                  key={place}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                >
                  {place}
                </div>
              ))}
            </div>
          </motion.div>

          {/* FIFA Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 to-amber-300/10 p-8"
          >
            <div className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              FIFA WORLD CUP 2026
            </div>

            <h3 className="mb-4 text-3xl font-black leading-tight">
              Positioned At The Center Of Global Attention
            </h3>

            <p className="text-white/70">
              Minutes from MetLife Stadium and major transit hubs,
              American Dream is uniquely positioned to capture
              international tourism, sponsorship visibility,
              and global event traffic.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}