import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { lang, t } = useLanguage();
  const p = t.pricing[lang];

  return (
    <section id="cijene" className="section-padding bg-card" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground">
            <span className="text-gold-gradient italic">{p.title}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background rounded-2xl p-8 border border-border text-center"
          >
            <p className="text-muted-foreground font-body text-sm uppercase tracking-wider mb-2">{p.upTo10}</p>
            <div className="font-display text-5xl font-bold text-foreground mb-2">600€</div>
            <p className="text-muted-foreground font-body text-sm">{p.perNight}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="gold-gradient rounded-2xl p-8 text-center relative overflow-hidden"
          >
            <div className="absolute top-3 right-3 bg-background/20 backdrop-blur-sm px-3 py-1 rounded-full text-primary-foreground text-xs font-body font-bold uppercase tracking-wider">
              {p.popular}
            </div>
            <p className="text-primary-foreground/80 font-body text-sm uppercase tracking-wider mb-2">{p.upTo15}</p>
            <div className="font-display text-5xl font-bold text-primary-foreground mb-2">700€</div>
            <p className="text-primary-foreground/80 font-body text-sm">{p.perNight}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground font-body text-sm">{p.minNights} <strong className="text-foreground">{p.oneNight}</strong></p>
          <a
            href="https://www.booking.com/hotel/hr/vila-s-bazenom-deluxe-gti.hr.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 gold-gradient px-8 py-4 rounded-lg text-primary-foreground font-body font-bold tracking-wide uppercase text-sm hover:opacity-90 transition-opacity shadow-lg shadow-gold/30"
          >
            {p.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
