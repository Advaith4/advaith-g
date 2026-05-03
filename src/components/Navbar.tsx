import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { id: "work", label: "work" },
  { id: "skills", label: "skills" },
  { id: "story", label: "story" },
  { id: "contact", label: "contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("work");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:pt-5"
      >
        <nav
          className={`relative flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border px-3 py-2 transition-all duration-500 md:px-4 md:py-2.5 ${
            scrolled
              ? "border-primary/20 bg-background/70 shadow-elegant backdrop-blur-xl"
              : "border-white/5 bg-background/30 backdrop-blur-md"
          }`}
        >
          {/* subtle gradient ring on hover */}
          <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-primary/10 to-warm/0 opacity-0 transition-opacity duration-500 hover:opacity-100" />

          {/* Logo */}
          <a
            href="#top"
            aria-label="Go to top"
            className="group relative z-10 flex items-center gap-2 rounded-full px-2 py-1.5 pr-3 transition-colors hover:bg-primary/5"
          >
            <span className="relative grid h-9 w-9 place-items-center rounded-2xl shadow-[0_0_30px_hsl(var(--primary)/0.35)]">
              <img
                src="/advaith-logo.svg"
                alt=""
                aria-hidden="true"
                className="h-full w-full rounded-2xl"
              />
              <span className="absolute -inset-1 rounded-2xl border border-primary/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <span className="hidden leading-none sm:block">
              <span className="block font-display text-sm font-semibold tracking-tight">
                Advaith G
              </span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
                SDE + AI
              </span>
            </span>
          </a>

          {/* Center links — desktop */}
          <ul className="relative z-10 hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id} className="relative">
                  <a
                    href={`#${l.id}`}
                    onClick={() => setActive(l.id)}
                    className={`relative block rounded-full px-4 py-1.5 font-mono text-xs transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-full border border-primary/30 bg-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.25)]"
                      />
                    )}
                    <span className="relative">
                      <span className="text-primary/70">/</span>
                      {l.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="relative z-10 flex items-center gap-2">
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-primary px-4 py-2 font-mono text-xs font-semibold text-primary-foreground shadow-glow transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] md:inline-flex"
            >
              <Sparkles className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" />
              let's talk
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-card/40 text-foreground backdrop-blur transition hover:border-primary hover:text-primary md:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="m"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-3 top-20 rounded-3xl border border-primary/20 bg-card/90 p-6 shadow-elegant backdrop-blur-2xl"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={`#${l.id}`}
                      onClick={() => {
                        setActive(l.id);
                        setOpen(false);
                      }}
                      className="flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl font-semibold tracking-tight text-foreground transition hover:bg-primary/10 hover:text-primary"
                    >
                      <span>
                        <span className="text-primary">/</span>
                        {l.label}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        0{i + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground shadow-glow"
              >
                <Sparkles className="h-4 w-4" />
                let's talk
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
