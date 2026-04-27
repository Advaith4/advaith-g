import { motion } from "framer-motion";

const skills = [
  "Python", "Java", "CrewAI", "LangGraph", "PyTorch", "FastAPI", "Flask",
  "Hugging Face", "Unsloth", "LLM Fine-Tuning", "Multi-Agent Systems",
  "Generative AI", "Deep Learning", "Prompt Engineering", "Docker",
  "Redis", "Git", "MISTRAL-7B", "Groq", "Explainable AI", "DSA",
];

export const SkillsMarquee = () => {
  return (
    <section id="skills" className="relative overflow-hidden border-y border-border/50 bg-card/30 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-6 text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground"
      >
        — the toolkit —
      </motion.div>
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-[scroll-x_40s_linear_infinite] gap-6 pr-6">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="group flex shrink-0 items-center gap-3 rounded-full border border-border bg-card/50 px-6 py-3 font-display text-lg font-medium transition-all hover:border-primary hover:text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-warm" />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
