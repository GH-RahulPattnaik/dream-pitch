type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  gradient: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  gradient,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 max-w-3xl">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
        {eyebrow}
      </p>

      <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
        {title}

        <span className="gradient-text block">
          {gradient}
        </span>
      </h2>

      <p className="text-lg leading-relaxed text-white/70">
        {description}
      </p>
    </div>
  );
}