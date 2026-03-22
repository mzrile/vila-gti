import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, BedDouble, Beef, Car, Droplets, TreePalm } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Droplets, Flame, BedDouble, Beef, Car, TreePalm];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang, t } = useLanguage();
  const a = t.about[lang];

  return (
    <section id="o-vili" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">{a.label}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            {a.title1} <span className="text-gold-gradient italic">{a.title2}</span> {a.title3}
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto leading-relaxed">
            {a.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {a.features.map((label, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-colors"
              >
                <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <span className="font-body font-bold text-foreground">{label}</span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-display text-2xl font-bold mb-4">{a.offerTitle}</h3>
          <div className="grid md:grid-cols-2 gap-4 text-secondary-foreground/80 font-body">
            <ul className="space-y-2">
              {a.offers1.map((item) => <li key={item}>✓ {item}</li>)}
            </ul>
            <ul className="space-y-2">
              {a.offers2.map((item) => <li key={item}>✓ {item}</li>)}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
