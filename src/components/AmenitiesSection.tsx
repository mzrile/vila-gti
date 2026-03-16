import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Flame, Beef, CircleDot, Target, Trophy, Volume2, Thermometer, CookingPot, Car, TreePalm } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const amenities: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Droplets, title: "Bazen", desc: "Veliki vanjski bazen za osvježenje i zabavu" },
  
  { Icon: Flame, title: "Sauna", desc: "Sauna za potpunu relaksaciju" },
  { Icon: Beef, title: "Roštilj", desc: "Prostrani roštilj sa sjenicom" },
  { Icon: CircleDot, title: "Biljar", desc: "Za zabavu i natjecanje u društvu" },
  { Icon: Target, title: "Pikado", desc: "Klasična igra za sve generacije" },
  { Icon: Trophy, title: "Stolni nogomet", desc: "Turnir za zabavu cijele ekipe" },
  { Icon: Volume2, title: "Ozvučenje", desc: "Kvalitetno ozvučenje za atmosferu" },
  { Icon: Thermometer, title: "Klima / Grijanje", desc: "Ugodna temperatura cijele godine" },
  { Icon: CookingPot, title: "Kuhinja", desc: "Potpuno opremljena za pripremu jela" },
  { Icon: Car, title: "Parking", desc: "Privatni parking za 8 vozila" },
  { Icon: TreePalm, title: "Dvorište", desc: "Veliko privatno dvorište s terasom" },
];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sadrzaji" className="section-padding bg-card" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">Sadržaji</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Sve za <span className="text-gold-gradient italic">savršen</span> boravak
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-background rounded-xl p-5 text-center hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border border-border hover:border-primary/20"
            >
              <a.Icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-display font-bold text-foreground text-sm mb-1">{a.title}</h3>
              <p className="text-muted-foreground text-xs font-body">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3">
            {["Rođendani", "Djevojačke večeri", "Momačke večeri", "Obiteljska okupljanja", "Team building", "Vikend odmor"].map((tag) => (
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
