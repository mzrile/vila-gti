import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const nav = t.nav[lang];

  const links = [
    { href: "#o-vili", label: nav.about },
    { href: "#sadrzaji", label: nav.amenities },
    { href: "#galerija", label: nav.gallery },
    { href: "#cijene", label: nav.pricing },
    { href: "#pravila", label: nav.rules },
    { href: "#kontakt", label: nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-lg md:text-xl font-bold text-primary-foreground">
          Vila <span className="text-gold-gradient">GTI</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-primary-foreground/70 hover:text-primary-foreground text-sm font-body tracking-wider uppercase transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://www.booking.com/hotel/hr/vila-s-bazenom-deluxe-gti.hr.html"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient px-5 py-2 rounded-lg text-primary-foreground font-body font-bold tracking-wide uppercase text-xs hover:opacity-90 transition-opacity"
          >
            {nav.book}
          </a>

          <div className="flex items-center gap-1.5 ml-1">
            <button
              onClick={() => setLang("hr")}
              className={`w-7 h-5 rounded-sm overflow-hidden border transition-opacity ${lang === "hr" ? "opacity-100 border-primary-foreground/60" : "opacity-50 hover:opacity-80 border-transparent"}`}
              title="Hrvatski"
            >
              <svg viewBox="0 0 640 480" className="w-full h-full">
                <rect width="640" height="160" fill="#ff0000" />
                <rect y="160" width="640" height="160" fill="#ffffff" />
                <rect y="320" width="640" height="160" fill="#171796" />
              </svg>
            </button>
            <button
              onClick={() => setLang("en")}
              className={`w-7 h-5 rounded-sm overflow-hidden border transition-opacity ${lang === "en" ? "opacity-100 border-primary-foreground/60" : "opacity-50 hover:opacity-80 border-transparent"}`}
              title="English"
            >
              <svg viewBox="0 0 640 480" className="w-full h-full">
                <rect width="640" height="480" fill="#012169" />
                <path d="M75 0l244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z" fill="#fff" />
                <path d="M424 281l216 159v40L369 281h55zm-184 20l6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z" fill="#C8102E" />
                <path d="M241 0v480h160V0H241zM0 160v160h640V160H0z" fill="#fff" />
                <path d="M273 0v480h96V0h-96zM0 192v96h640v-96H0z" fill="#C8102E" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setLang("hr")}
              className={`text-lg leading-none transition-opacity ${lang === "hr" ? "opacity-100" : "opacity-50"}`}
            >
              🇭🇷
            </button>
            <button
              onClick={() => setLang("en")}
              className={`text-lg leading-none transition-opacity ${lang === "en" ? "opacity-100" : "opacity-50"}`}
            >
              🇬🇧
            </button>
          </div>
          <button
            className="text-primary-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-secondary/95 backdrop-blur-md border-t border-secondary-foreground/10 px-4 py-6"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-primary-foreground/70 hover:text-primary-foreground text-sm font-body tracking-wider uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.booking.com/hotel/hr/vila-s-bazenom-deluxe-gti.hr.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 gold-gradient px-5 py-3 rounded-lg text-primary-foreground font-body font-bold tracking-wide uppercase text-xs text-center"
          >
            {nav.book}
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
