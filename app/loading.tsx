"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#0A1128]">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "linear",
        }}
        className="h-20 w-20 rounded-full border-4 border-cyan-400 border-t-transparent"
      />
    </div>
  );
}