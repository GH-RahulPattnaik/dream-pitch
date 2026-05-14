"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Mic2,
  Sparkles,
  Users,
} from "lucide-react";

import {
  PAST_EVENTS,
  SPONSORSHIP_TIERS,
} from "../lib/constants";

export default function EventsSection() {
  return (
    <section id="events" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Events & Sponsorships
          </p>

          <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            A Platform Built For
            <span className="gradient-text block">
              Global Brand Attention
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-white/70">
            From fan festivals and product launches to experiential
            campaigns and live entertainment, American Dream operates
            as a year-round media and activation platform.
          </p>
        </motion.div>

        {/* Events */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {PAST_EVENTS.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                <CalendarDays className="text-cyan-300" />
              </div>

              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-wider text-white/70">
                {event.type}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {event.title}
              </h3>

              <p className="leading-relaxed text-white/70">
                {event.impact}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Sparkles className="text-cyan-300" />

            <h3 className="text-3xl font-black">
              Sponsorship Tiers
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {SPONSORSHIP_TIERS.map((tier, index) => (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/10"
              >
                <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-200">
                  Tier {index + 1}
                </p>

                <h4 className="text-2xl font-bold">
                  {tier}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Venue Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 p-8"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">
              <Mic2 className="text-cyan-300" />
            </div>

            <h3 className="mb-4 text-3xl font-black">
              Dream Live PAC
            </h3>

            <p className="mb-6 text-white/70">
              3,000-seat performing arts and live entertainment venue
              designed for concerts, cultural programming,
              esports, and premium touring productions.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-sm uppercase tracking-wider text-cyan-200">
                Venue Capacity
              </p>

              <p className="mt-2 text-2xl font-bold">
                3,000 Seats
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">
              <Users className="text-cyan-300" />
            </div>

            <h3 className="mb-4 text-3xl font-black">
              Dream Fan Fest
            </h3>

            <p className="mb-6 text-white/70">
              Multi-brand experiential event platform optimized for
              fandom culture, creator activations, sports engagement,
              gaming, and Gen-Z audience participation.
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
              <p className="text-sm uppercase tracking-wider text-cyan-200">
                Activation Potential
              </p>

              <p className="mt-2 text-2xl font-bold">
                High-Footfall Experiences
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}