import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="kontakt" className="section-padding bg-secondary text-secondary-foreground" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold-light tracking-[0.3em] uppercase text-sm mb-3 font-body">Kontakt</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Rezervirajte svoj <span className="text-gold-gradient italic">savršen odmor</span>
          </h2>
          <p className="text-secondary-foreground/70 font-body text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Javite nam se za dostupnost i posebne zahtjeve.
            Brzo odgovaramo na sve upite!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            href="https://www.booking.com/hotel/hr/vila-s-bazenom-deluxe-gti.hr.html"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-8 py-4 rounded-lg text-primary-foreground font-body font-bold tracking-wide uppercase text-sm hover:opacity-90 transition-opacity shadow-lg shadow-gold/30"
          >
            Rezerviraj na Booking.com
          </a>
          <a
            href="https://wa.me/385915721136"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-secondary-foreground/30 px-8 py-4 rounded-lg text-secondary-foreground font-body tracking-wide uppercase text-sm hover:bg-secondary-foreground/10 transition-colors"
          >
            WhatsApp: 091 572 1136
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-secondary-foreground/10 pt-8"
        >
          <p className="text-secondary-foreground/50 font-body text-sm mb-1">📍 Ivanovićeva 47b, Dubrava, Zagreb</p>
          <p className="text-secondary-foreground/50 font-body text-sm">📞 091 572 1136 — Mobitel & WhatsApp</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
