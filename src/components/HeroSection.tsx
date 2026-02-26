import { motion } from "framer-motion";
import heroImage from "@/assets/hero-villa.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 overlay-dark" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold-light font-body tracking-[0.3em] uppercase text-sm mb-6"
        >
          Vila s bazenom Deluxe — GTI
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
        >
          Savršeno mjesto za{" "}
          <span className="text-gold-gradient italic">odmor i proslave</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-primary-foreground/80 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Privatna vila s bazenom, jacuzzijem i saunom za do 15 osoba.
          Idealno za rođendane, djevojačke večeri, team building i opuštajući vikend.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://www.booking.com/hotel/hr/vila-s-bazenom-deluxe-gti.hr.html"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-8 py-4 rounded-lg text-primary-foreground font-body font-bold tracking-wide uppercase text-sm hover:opacity-90 transition-opacity shadow-lg shadow-gold/30"
          >
            Rezerviraj odmor
          </a>
          <a
            href="#galerija"
            className="glass px-8 py-4 rounded-lg text-primary-foreground font-body tracking-wide uppercase text-sm hover:bg-primary-foreground/10 transition-colors"
          >
            Pogledaj galeriju
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#o-vili" className="flex flex-col items-center text-primary-foreground/60 hover:text-primary-foreground/80 transition-colors">
          <span className="text-xs tracking-widest uppercase mb-2 font-body">Saznaj više</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
