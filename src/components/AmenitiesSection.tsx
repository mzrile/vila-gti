import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Flame, Beef, CircleDot, Target, Trophy, Volume2, Thermometer, CookingPot, Car } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons: LucideIcon[] = [Droplets, Flame, Beef, CircleDot, Target, Trophy, Volume2, Thermometer, CookingPot, Car];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang, t } = useLanguage();
  const a = t.amenities[lang];

  return (
    <section id="sadrzaji" className="section-padding bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">{a.label}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            {a.title1} <span className="text-gold-gradient italic">{a.title2}</span> {a.title3}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {a.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-background rounded-xl p-5 text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-border hover:border-primary/20"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-display font-bold text-foreground text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs font-body">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3">
            {a.tags.map((tag) => (
              <span key={tag} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-body font-bold">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
