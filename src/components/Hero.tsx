import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import {
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Network,
  type LucideIcon,
} from "lucide-react";
import portrait from "@/assets/advaith-portrait.jpg";

type OrbitSkill = {
  label: string;
  Icon: LucideIcon;
  accent: "primary" | "warm";
};

const orbitSkills: OrbitSkill[] = [
  { label: "Java", Icon: Code2, accent: "primary" },
  { label: "React", Icon: Layers3, accent: "primary" },
  { label: "Node.js", Icon: Cpu, accent: "primary" },
  { label: "MongoDB", Icon: Database, accent: "primary" },
  { label: "Python", Icon: Code2, accent: "warm" },
  { label: "PyTorch", Icon: BrainCircuit, accent: "warm" },
  { label: "FastAPI", Icon: Network, accent: "warm" },
  { label: "CrewAI", Icon: Bot, accent: "warm" },
];

const orbitStyle = {
  "--profile-size": "clamp(120px, 18vw, 190px)",
  "--badge-size": "clamp(40px, 6vw, 90px)",
  "--badge-height": "clamp(40px, 4vw, 46px)",
} as CSSProperties;

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 aurora-bg" />

      <span id="top" className="absolute top-0" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 pb-20 pt-10 md:px-16 lg:grid-cols-[1.2fr_1fr] lg:pt-20">
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
            <span className="text-muted-foreground">available for opportunities - 2026</span>
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
            Computer Science engineer focused on{" "}
            <span className="text-foreground">software development</span>,{" "}
            <span className="text-foreground">AI engineering</span>, and full-stack products
            that turn practical ideas into working systems.
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
              <span className="relative z-10">view my work -&gt;</span>
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
            <div><span className="text-primary">01</span> - 8.49 CGPA</div>
            <div><span className="text-primary">02</span> - 3x Hackathon Winner</div>
            <div><span className="text-primary">03</span> - Paper Presentation Winner</div>
            <div><span className="text-primary">04</span> - Patent Filed</div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex w-full max-w-[600px] flex-col items-center gap-4 overflow-visible"
        >
          <div className="rounded-full border border-primary/25 bg-background/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-primary shadow-2xl backdrop-blur-xl">
            sde + ai engineer
          </div>

          <div
            className="relative hidden aspect-square w-[min(76vw,460px)] max-w-full overflow-visible sm:block"
            style={orbitStyle}
          >
            <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.24),hsl(var(--card)/0.16)_34%,transparent_72%)] blur-sm" />
            <div className="absolute inset-[14%] rounded-full border border-primary/15 bg-background/10 backdrop-blur-sm" />
            <div className="absolute inset-[24%] rounded-full border border-warm/15" />
            <div className="absolute inset-[36%] rounded-full border border-primary/10" />
            <div className="absolute left-1/2 top-[19%] h-[62%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="absolute left-[19%] top-1/2 h-px w-[62%] -translate-y-1/2 bg-gradient-to-r from-transparent via-warm/20 to-transparent" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[12%] rounded-full"
              style={{
                background:
                  "conic-gradient(from 120deg, transparent 0 7%, hsl(var(--primary) / 0.85) 8% 10%, transparent 11% 35%, hsl(var(--accent-warm) / 0.8) 36% 38%, transparent 39% 68%, hsl(var(--primary) / 0.55) 69% 71%, transparent 72% 100%)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1px))",
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 62, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[24%] rounded-full border border-dashed border-primary/25"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[38%] rounded-full border border-warm/20"
            >
              <span className="absolute left-1/2 top-0 h-1.5 w-14 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-warm to-transparent" />
            </motion.div>

            <div className="absolute left-[24%] top-[24%] h-8 w-8 border-l-2 border-t-2 border-primary/70" />
            <div className="absolute right-[24%] top-[24%] h-8 w-8 border-r-2 border-t-2 border-primary/70" />
            <div className="absolute bottom-[24%] left-[24%] h-8 w-8 border-b-2 border-l-2 border-warm/70" />
            <div className="absolute bottom-[24%] right-[24%] h-8 w-8 border-b-2 border-r-2 border-warm/70" />

            <div className="absolute inset-0 z-30">
              {orbitSkills.map(({ label, Icon, accent }, i) => {
                const angle = (360 / orbitSkills.length) * i - 90;
                const radians = (angle * Math.PI) / 180;
                const x = 50 + Math.cos(radians) * 44;
                const y = 50 + Math.sin(radians) * 44;

                return (
                  <div
                    key={label}
                    className="absolute z-30 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out hover:scale-105"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                    }}
                  >
                    <div
                      className={`flex min-w-[var(--badge-size)] items-center justify-center gap-2 rounded-full border px-3 font-mono text-[11px] font-semibold shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out lg:min-w-[106px] ${
                        accent === "warm"
                          ? "border-warm/45 bg-warm/10 text-warm shadow-[0_18px_42px_-26px_hsl(var(--accent-warm))]"
                          : "border-primary/45 bg-primary/10 text-primary shadow-[0_18px_42px_-26px_hsl(var(--primary))]"
                      }`}
                      style={{ minHeight: "var(--badge-height)" }}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span className="hidden whitespace-nowrap lg:inline">{label}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div
              className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
              style={{ height: "var(--profile-size)", width: "var(--profile-size)" }}
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full"
              >
                <div className="absolute -inset-8 rounded-full bg-gradient-cyan opacity-35 blur-3xl" />
                <div className="absolute -inset-5 rounded-full border border-primary/20" />
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/45 via-transparent to-warm/45 p-px">
                  <div className="h-full w-full rounded-full bg-background/80" />
                </div>
                <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/45 bg-card shadow-[0_0_65px_hsl(var(--primary)/0.34)]">
                  <img
                    src={portrait}
                    alt="Advaith G - AI Engineer"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-primary/10" />
                  <div className="pointer-events-none absolute inset-0 shimmer" />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[360px] flex-col items-center gap-4 sm:hidden">
            <div className="relative aspect-square w-[min(68vw,260px)]">
              <div className="absolute inset-0 rounded-full bg-gradient-cyan opacity-25 blur-3xl" />
              <div className="absolute inset-3 rounded-full border border-primary/20 bg-background/10" />
              <div className="absolute inset-8 rounded-full border border-warm/15" />
              <div
                className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ height: "var(--profile-size)", width: "var(--profile-size)", ...orbitStyle }}
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative h-full w-full overflow-hidden rounded-full border-2 border-primary/45 bg-card shadow-[0_0_48px_hsl(var(--primary)/0.32)]"
                >
                  <img
                    src={portrait}
                    alt="Advaith G - AI Engineer"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-primary/10" />
                </motion.div>
              </div>
            </div>
            <div className="flex w-full gap-2 overflow-x-auto pb-2">
              {orbitSkills.map(({ label, Icon, accent }) => (
                <div
                  key={label}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 font-mono text-[11px] font-semibold backdrop-blur-xl ${
                    accent === "warm"
                      ? "border-warm/45 bg-warm/10 text-warm"
                      : "border-primary/45 bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="whitespace-nowrap">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

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
