import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const RulesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang, t } = useLanguage();
  const r = t.rules[lang];

  return (
    <section id="pravila" className="section-padding bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">{r.label}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            {r.title1} <span className="text-gold-gradient italic">{r.title2}</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {r.items.map((rule, i) => {
            const isSpecial = rule.startsWith("___SPECIAL___");
            const text = isSpecial ? rule.replace("___SPECIAL___", "") : rule;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`flex gap-4 items-start rounded-xl p-5 border ${isSpecial ? "bg-destructive/10 border-destructive/30" : "bg-card border-border"}`}
              >
                <span className="gold-gradient text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-body font-bold shrink-0">
                  {i + 1}
                </span>
                <p className={`font-body text-sm leading-relaxed ${isSpecial ? "font-bold underline text-destructive" : "text-foreground/80"}`}>{text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
