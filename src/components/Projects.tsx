import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Brain, Heart } from "lucide-react";

const projects = [
  {
    num: "01",
    Icon: Sparkles,
    title: "JobifyAI",
    tag: "Multi-Agent Career Assistant",
    desc: "An AI-powered career assistant orchestrating multiple CrewAI agents to analyze resumes, match jobs, rewrite impact-driven bullet points, and coach candidates with personalized behavioral & technical interview questions.",
    stack: ["CrewAI", "Groq", "LLMs", "Full-Stack"],
    accent: "primary",
  },
  {
    num: "02",
    Icon: Heart,
    title: "PsyCare",
    tag: "Psychiatrist Consultation Portal",
    desc: "Fine-tuned MISTRAL-7B for empathetic mental health counseling. Built an embedding-based psychiatrist recommendation engine with risk-level analysis, appointment booking, and secure payments.",
    stack: ["MISTRAL-7B", "Fine-Tuning", "Embeddings", "Full-Stack"],
    accent: "warm",
  },
  {
    num: "03",
    Icon: Brain,
    title: "Postpartum Depression Detection",
    tag: "ML + Chatbot Assistance · Patent Filed",
    desc: "An AI-driven system predicting early signs of postpartum depression using multiple ML models, paired with a context-aware chatbot. Won 2nd Prize at Rathinam Tech Fest, presented at NIT Goa (IEEE).",
    stack: ["Machine Learning", "NLP", "Chatbot", "Patent"],
    accent: "primary",
  },
];

export const Projects = () => {
  return (
    <section id="work" className="relative px-6 py-32 md:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              — selected work —
            </div>
            <h2 className="font-display text-5xl font-bold tracking-tighter md:text-7xl">
              Things I've <span className="text-gradient">built</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Each project a chapter in learning how AI can quietly improve human lives.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-card p-8 transition-all duration-500 hover:border-primary/50 hover:shadow-elegant md:p-12"
            >
              {/* hover gradient */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
              </div>

              <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr_auto] md:items-start">
                <div className="flex items-start gap-4">
                  <div className="font-mono text-sm text-muted-foreground">{p.num}</div>
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl ${p.accent === "warm" ? "bg-warm/10 text-warm" : "bg-primary/10 text-primary"}`}>
                    <p.Icon className="h-7 w-7" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
                      {p.title}
                    </h3>
                    <p className={`mt-1 font-mono text-sm ${p.accent === "warm" ? "text-warm" : "text-primary"}`}>
                      {p.tag}
                    </p>
                  </div>
                  <p className="max-w-2xl leading-relaxed text-muted-foreground md:text-lg">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid h-14 w-14 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-45">
                  <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:-rotate-45" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
