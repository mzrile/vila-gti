import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rules = [
  "U kući je dozvoljeno pušenje u svim prostorijama osim u spavaćim sobama.",
  "Glasna glazba izvan kuće dozvoljena je (u kontroliranim uvjetima) do 22 h zbog kućnog reda.",
  "Jedino ozvučenje koje je dozvoljeno koristiti je naše koje se nalazi u kući.",
  "Nije dozvoljena muzika uživo — tamburaši, harmonikaši, DJ i sl.",
  "Upotreba vatrenog oružja, vatrometa ili petardi je strogo zabranjena. Zabranjeno je ispucavanje konfeta ili korištenje balona s konfetima.",
  "Kuću ne iznajmljujemo osobama mlađima od 23. godine.",
  "Maksimalan broj ljudi koji može biti na kući je 15, bez obzira koliko će osoba prespavati.",
];

const RulesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pravila" className="section-padding bg-background" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">Pravilnik</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Kućni <span className="text-gold-gradient italic">red</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {rules.map((rule, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 items-start bg-card rounded-xl p-5 border border-border"
            >
              <span className="gold-gradient text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-body font-bold shrink-0">
                {i + 1}
              </span>
              <p className="text-foreground/80 font-body text-sm leading-relaxed">{rule}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
