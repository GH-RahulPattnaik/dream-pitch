"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Calendar,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

const actions = [
  {
    title: "Retail Leasing",
    description:
      "Secure premium retail positioning inside one of North America's highest-attention destinations.",
    email: "leasing@dreampitch.com",
    icon: Building2,
  },
  {
    title: "Sponsorships",
    description:
      "Partner with a platform engineered for experiential marketing and brand visibility.",
    email: "partners@dreampitch.com",
    icon: Sparkles,
  },
  {
    title: "Event Booking",
    description:
      "Launch concerts, fan events, activations, and large-scale productions.",
    email: "events@dreampitch.com",
    icon: Calendar,
  },
];

export default function CTASection() {
  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="Future destination"
          fill
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#050816]/90 via-[#050816]/75 to-black/90" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Become Part Of The Future
          </p>

          <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            Let’s Build The Next
            <span className="gradient-text block">
              Destination Experience
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70">
            American Dream merges commerce, entertainment,
            culture, and experiential storytelling into one
            globally visible platform.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {actions.map((action, index) => {
            const Icon = action.icon;

            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="glass-card flex h-full flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300/30"
              >
                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">
                  <Icon
                    size={30}
                    className="text-cyan-300"
                  />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-3xl font-black">
                  {action.title}
                </h3>

                {/* Description */}
                <p className="leading-relaxed text-white/70">
                  {action.description}
                </p>

                {/* Email Button */}
                <div className="mt-auto pt-8">
                  < a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${action.email}&su=Inquiry from DreamPitch&body=Hello,%0D%0A%0D%0AI am interested in ${action.title}. Please share more details.%0D%0A%0D%0AThank you.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center whitespace-nowrap rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-4 py-4 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/20 md:px-6 md:text-base"
                  >
                    {action.email}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-400/10 to-amber-300/10 p-10 text-center md:p-16"
        >
          <h3 className="mb-6 text-4xl font-black md:text-6xl">
            The Future Of Retail
            <span className="gradient-text block">
              Is Experiential
            </span>
          </h3>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/70">
            From flagship retail and luxury positioning to
            entertainment, tourism, and sponsorship activations —
            American Dream delivers unmatched audience attention.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {/* Start Partnership Conversation → Opens Gmail */}
            < a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=partners@dreampitch.com&su=Partnership Inquiry from DreamPitch&body=Hello,%0D%0A%0D%0AI am interested in starting a partnership. Please share more details.%0D%0A%0D%0AThank you."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300"
            >
              Start Partnership Conversation
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Download Deck */}
            <button
              onClick={() => window.open("/dream-pitch-deck.pdf", "_blank")}
              className="cursor-pointer rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-cyan-300/40 hover:bg-white/10"
            >
              Download Deck
            </button>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            DreamPitch • American Dream Interactive Sales Deck
          </p>
        </footer>
      </div>
    </section>
  );
}