import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#o-vili", label: "O vili" },
  { href: "#sadrzaji", label: "Sadržaji" },
  { href: "#galerija", label: "Galerija" },
  { href: "#cijene", label: "Cijene" },
  { href: "#pravila", label: "Pravila" },
  { href: "#kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

        <a
          href="https://www.booking.com/hotel/hr/vila-s-bazenom-deluxe-gti.hr.html"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block gold-gradient px-5 py-2 rounded-lg text-primary-foreground font-body font-bold tracking-wide uppercase text-xs hover:opacity-90 transition-opacity"
        >
          Rezerviraj
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
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
            Rezerviraj
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
