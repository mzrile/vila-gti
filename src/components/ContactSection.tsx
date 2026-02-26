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
          <p className="text-secondary-foreground/50 font-body text-sm mb-8">📞 091 572 1136 — Mobitel & WhatsApp</p>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m11!1m3!1d3324.375190033259!2d16.047900376647004!3d45.868300406385316!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d8694b38081b%3A0x183b7852621c75f8!2sIvanovi%C4%87eva%20ul.%2047B%2C%2010000%2C%20Zagreb!5e1!3m2!1sen!2shr!4v1772119068875!5m2!1sen!2shr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokacija Vila GTI"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
