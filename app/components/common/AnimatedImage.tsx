"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function AnimatedImage({
  src,
  alt,
  className,
  priority = false,
}: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`overflow-hidden rounded-3xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        priority={priority}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </motion.div>
  );
}