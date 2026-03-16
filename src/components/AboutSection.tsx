import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, BedDouble, Beef, Car, Droplets, TreePalm } from "lucide-react";

const features = [
  { icon: Droplets, label: "Veliki bazen" },
  { icon: Flame, label: "Sauna" },
  { icon: BedDouble, label: "5 spavaćih soba" },
  { icon: Beef, label: "Roštilj & sjenica" },
  { icon: Car, label: "Parking za 8 vozila" },
  { icon: TreePalm, label: "Veliko dvorište" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="o-vili" className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">O vili</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Vaš privatni <span className="text-gold-gradient italic">raj</span> u Zagrebu
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto leading-relaxed">
            Vila GTI smještena je u mirnom okruženju Dubrave, na adresi Ivanovićeva 47b, Zagreb.
            Pruža smještaj za do 15 osoba s potpunom privatnošću, luksuznim sadržajima i
            svime što vam je potrebno za savršenu proslavu ili odmor.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-colors"
            >
              <f.icon className="w-10 h-10 text-primary mx-auto mb-3" />
              <span className="font-body font-bold text-foreground">{f.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-display text-2xl font-bold mb-4">Što nudimo našim gostima?</h3>
          <div className="grid md:grid-cols-2 gap-4 text-secondary-foreground/80 font-body">
            <ul className="space-y-2">
              <li>✓ Kompletno opremljena kuhinja</li>
              <li>✓ Prostrana dnevna soba</li>
              <li>✓ Velika i mala kupaona</li>
              <li>✓ Veliko dvorište sa sjenicom</li>
            </ul>
            <ul className="space-y-2">
              <li>✓ Samo 10 km od Parka Maksimir</li>
              <li>✓ 12 km od centra Zagreba</li>
              <li>✓ Potpuna privatnost</li>
              <li>✓ Idealno za grupe do 15 osoba</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
