import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/advaith-portrait.jpg";

// Two orbital rings of skills around the portrait
const innerSkills = [
  "CrewAI", "LangGraph", "PyTorch", "FastAPI", "Hugging Face", "Python",
];
const outerSkills = [
  "LLM Fine-Tuning", "Multi-Agent", "MISTRAL-7B", "Generative AI",
  "Deep Learning", "Groq", "Docker", "Explainable AI",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 aurora-bg" />

      <span id="top" className="absolute top-0" />

      {/* Main */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-10 md:px-16 lg:grid-cols-[1.2fr_1fr] lg:pt-20">
        {/* Left text */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-muted-foreground">available for opportunities · 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl"
          >
            I build
            <br />
            <span className="text-gradient glow-text">intelligent</span>
            <br />
            systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Computer Science engineer specializing in{" "}
            <span className="text-foreground">multi-agent systems</span>,{" "}
            <span className="text-foreground">fine-tuned LLMs</span>, and full-stack AI products
            that solve real human problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 font-mono text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:shadow-[0_0_60px_hsl(186_100%_56%/0.8)]"
            >
              <span className="relative z-10">view my work →</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-primary via-warm to-primary transition-transform duration-700 group-hover:translate-x-0" />
            </a>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: "https://github.com/Advaith4", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/advaith-g-771800300", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:advaith.2301006@srec.ac.in", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card/50 text-muted-foreground backdrop-blur transition-all hover:border-primary hover:text-primary hover:shadow-glow"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-wrap gap-x-8 gap-y-3 pt-4 font-mono text-xs text-muted-foreground"
          >
            <div><span className="text-primary">01</span> · 8.49 CGPA</div>
            <div><span className="text-primary">02</span> · 3× Hackathon Winner</div>
            <div><span className="text-primary">03</span> · Paper Presentation Winner</div>
            <div><span className="text-primary">04</span> · Patent Filed</div>
          </motion.div>
        </div>

        {/* Right: orbital skill visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative mx-auto aspect-square w-[340px] max-w-full sm:w-[420px] md:w-[480px] lg:w-[520px]"
          style={{ perspective: 1200 }}
        >
          {/* Soft halo glow */}
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-10 rounded-full bg-gradient-cyan blur-3xl"
          />

          {/* Rotating orbit rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-primary/25"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute inset-12 rounded-full border border-dashed border-warm/25"
          />
          <div className="absolute inset-24 rounded-full border border-primary/10" />

          {/* OUTER orbit — skills running around */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {outerSkills.map((skill, i) => {
              const angle = (360 / outerSkills.length) * i;
              return (
                <div
                  key={skill}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-46%) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className={`flex items-center gap-2 rounded-full border ${i % 2 === 0 ? "border-primary/40 bg-primary/10 text-primary" : "border-warm/40 bg-warm/10 text-warm"} px-3 py-1.5 font-mono text-[10px] backdrop-blur-md shadow-glow`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${i % 2 === 0 ? "bg-primary" : "bg-warm"} animate-pulse`} />
                      {skill}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* INNER orbit — counter-rotating skills */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {innerSkills.map((skill, i) => {
              const angle = (360 / innerSkills.length) * i;
              return (
                <div
                  key={skill}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translateY(-160px) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex flex-col items-center"
                  >
                    <span className="whitespace-nowrap rounded-md bg-card/60 px-2 py-1 font-mono text-[10px] text-foreground/80 backdrop-blur">
                      {skill}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </motion.div>

          {/* Center portrait — kept perfectly centered; inner element does the float */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 md:h-56 md:w-56">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-auto relative h-full w-full"
            >
              <div className="absolute inset-0 animate-pulse-glow rounded-full bg-gradient-cyan opacity-40 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/40 bg-card shadow-glow">
                <img
                  src={portrait}
                  alt="Advaith G — AI Engineer"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 shimmer" />
              </div>
              <div className="absolute -left-3 -top-3 h-6 w-6 border-l-2 border-t-2 border-primary" />
              <div className="absolute -right-3 -top-3 h-6 w-6 border-r-2 border-t-2 border-primary" />
              <div className="absolute -bottom-3 -left-3 h-6 w-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-3 -right-3 h-6 w-6 border-b-2 border-r-2 border-primary" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-xs text-muted-foreground"
      >
        <div className="flex flex-col items-center gap-2">
          <span>scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-8 w-px bg-gradient-to-b from-primary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};
