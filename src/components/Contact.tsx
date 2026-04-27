import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 md:px-16">
      <div className="absolute inset-0 aurora-bg opacity-60" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary"
        >
          — let's build something —
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-6xl font-bold leading-[0.95] tracking-tighter md:text-8xl lg:text-9xl"
        >
          Have an
          <br />
          <span className="text-gradient glow-text">idea</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground"
        >
          I'm always open to interesting collaborations, internships, and conversations about AI, multi-agent systems, and shipping real products.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          href="mailto:advaith.2301006@srec.ac.in"
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 font-mono text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-105 hover:shadow-[0_0_80px_hsl(186_100%_56%/0.9)]"
        >
          <Mail className="h-5 w-5" />
          advaith.2301006@srec.ac.in
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { Icon: Phone, label: "+91 99407 12936", href: "tel:+919940712936" },
            { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/advaith-g-771800300" },
            { Icon: Github, label: "GitHub", href: "https://github.com/Advaith4" },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-3 font-mono text-sm text-muted-foreground backdrop-blur transition-all hover:border-primary hover:text-primary"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      <footer className="relative mt-32 border-t border-border/50 pt-8 text-center font-mono text-xs text-muted-foreground">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:px-16">
          <div>© 2026 Advaith G · Crafted with <span className="text-primary">care</span> & <span className="text-warm">caffeine</span>.</div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            All systems operational
          </div>
        </div>
      </footer>
    </section>
  );
};
