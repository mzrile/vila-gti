import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "hr" | "en";

const translations = {
  nav: {
    hr: {
      about: "O vili",
      amenities: "Sadržaji",
      gallery: "Galerija",
      pricing: "Cijene",
      rules: "Pravila",
      contact: "Kontakt",
      book: "Rezerviraj",
    },
    en: {
      about: "About",
      amenities: "Amenities",
      gallery: "Gallery",
      pricing: "Pricing",
      rules: "Rules",
      contact: "Contact",
      book: "Book Now",
    },
  },
  hero: {
    hr: {
      subtitle: "Vila s bazenom Deluxe — GTI",
      title1: "Najam kuće za proslave",
      title2: "u Zagrebu",
      desc: "Kuća za zabave, rođendane, momačku, djevojačku i evente. Najam prostora za proslave s bazenom i saunom za do 15 osoba.",
      cta: "Rezerviraj odmor",
      gallery: "Naše slike",
      more: "Saznaj više",
    },
    en: {
      subtitle: "Villa with Pool Deluxe — GTI",
      title1: "Party house rental",
      title2: "in Zagreb",
      desc: "Event house rental for birthdays, bachelor & bachelorette parties, and team building. House rental Zagreb with pool and sauna for up to 15 guests.",
      cta: "Book your stay",
      gallery: "Our photos",
      more: "Learn more",
    },
  },
  about: {
    hr: {
      label: "O vili",
      title1: "Kuća za proslave,",
      title2: "Party kuća",
      title3: "s bazenom",
      desc: "Vila GTI smještena je u mirnom okruženju Dubrave, na adresi Ivanovićeva 47b, Zagreb. Najam kuće za proslave okolica Zagreba — idealno za rođendane, momačke i djevojačke večeri, team building i vikend odmor za do 15 osoba.",
      features: ["Veliki bazen", "Sauna", "5 spavaćih soba", "Roštilj & sjenica", "Parking za 8 vozila", "Veliko dvorište"],
      offerTitle: "Što nudimo našim gostima?",
      offers1: ["Kompletno opremljena kuhinja", "Prostrana dnevna soba", "Velika i mala kupaona", "Veliko dvorište sa sjenicom"],
      offers2: ["Samo 10 km od Parka Maksimir", "12 km od centra Zagreba", "Potpuna privatnost", "Idealno za grupe do 15 osoba"],
    },
    en: {
      label: "About",
      title1: "Your private",
      title2: "paradise",
      title3: "in Zagreb",
      desc: "Villa GTI is located in the peaceful surroundings of Dubrava, at Ivanovićeva 47b, Zagreb. It accommodates up to 15 guests with complete privacy, luxury amenities, and everything you need for a perfect celebration or getaway.",
      features: ["Large pool", "Sauna", "5 bedrooms", "BBQ & gazebo", "Parking for 8 cars", "Large yard"],
      offerTitle: "What do we offer our guests?",
      offers1: ["Fully equipped kitchen", "Spacious living room", "Large and small bathroom", "Large yard with gazebo"],
      offers2: ["Only 10 km from Maksimir Park", "12 km from Zagreb center", "Complete privacy", "Ideal for groups up to 15"],
    },
  },
  amenities: {
    hr: {
      label: "Sadržaji",
      title1: "Sve za",
      title2: "savršen",
      title3: "boravak",
      items: [
        { title: "Bazen", desc: "Veliki vanjski bazen za osvježenje i zabavu" },
        { title: "Sauna", desc: "Sauna za potpunu relaksaciju" },
        { title: "Roštilj", desc: "Prostrani roštilj sa sjenicom" },
        { title: "Biljar", desc: "Za zabavu i natjecanje u društvu" },
        { title: "Pikado", desc: "Klasična igra za sve generacije" },
        { title: "Stolni nogomet", desc: "Turnir za zabavu cijele ekipe" },
        { title: "Ozvučenje", desc: "Kvalitetno ozvučenje za atmosferu" },
        { title: "Klima / Grijanje", desc: "Ugodna temperatura cijele godine" },
        { title: "Kuhinja", desc: "Potpuno opremljena za pripremu jela" },
        { title: "Parking", desc: "Privatni parking za 8 vozila" },
      ],
      tags: ["Rođendani", "Djevojačke večeri", "Momačke večeri", "Obiteljska okupljanja", "Team building", "Vikend odmor"],
    },
    en: {
      label: "Amenities",
      title1: "Everything for a",
      title2: "perfect",
      title3: "stay",
      items: [
        { title: "Pool", desc: "Large outdoor pool for refreshment and fun" },
        { title: "Sauna", desc: "Sauna for complete relaxation" },
        { title: "BBQ", desc: "Spacious BBQ area with gazebo" },
        { title: "Billiards", desc: "For fun and friendly competition" },
        { title: "Darts", desc: "A classic game for all generations" },
        { title: "Table football", desc: "Tournaments for the whole crew" },
        { title: "Sound system", desc: "Quality sound system for the atmosphere" },
        { title: "AC / Heating", desc: "Comfortable temperature year-round" },
        { title: "Kitchen", desc: "Fully equipped for meal preparation" },
        { title: "Parking", desc: "Private parking for 8 vehicles" },
      ],
      tags: ["Birthdays", "Bachelorette parties", "Bachelor parties", "Family gatherings", "Team building", "Weekend getaway"],
    },
  },
  gallery: {
    hr: {
      label: "Galerija",
      title1: "Zavirite u",
      title2: "vilu",
      enlarge: "Povećaj",
    },
    en: {
      label: "Gallery",
      title1: "Take a look at the",
      title2: "villa",
      enlarge: "Enlarge",
    },
  },
  pricing: {
    hr: {
      title: "Cijene",
      upTo10: "Do 10 osoba",
      upTo15: "Do 15 osoba",
      perNight: "po noćenju",
      popular: "Popularan",
      minNights: "Minimalan broj noćenja:",
      oneNight: "1 noć",
      cta: "Rezerviraj odmor",
    },
    en: {
      title: "Pricing",
      upTo10: "Up to 10 guests",
      upTo15: "Up to 15 guests",
      perNight: "per night",
      popular: "Popular",
      minNights: "Minimum stay:",
      oneNight: "1 night",
      cta: "Book your stay",
    },
  },
  rules: {
    hr: {
      label: "Pravilnik",
      title1: "Kućni",
      title2: "red",
      items: [
        "U kući je dozvoljeno pušenje u svim prostorijama osim u spavaćim sobama.",
        "Glasna glazba izvan kuće dozvoljena je (u kontroliranim uvjetima) do 22 h zbog kućnog reda.",
        "Jedino ozvučenje koje je dozvoljeno koristiti je naše koje se nalazi u kući.",
        "___SPECIAL___Nije dozvoljena muzika uživo — tamburaši, harmonikaši, DJ i sl.!!!",
        "Upotreba vatrenog oružja, vatrometa ili petardi je strogo zabranjena. Zabranjeno je ispucavanje konfeta ili korištenje balona s konfetima.",
        "Kuću ne iznajmljujemo osobama mlađima od 23. godine.",
        "Maksimalan broj ljudi koji može biti na kući je 15, bez obzira koliko će osoba prespavati.",
      ],
    },
    en: {
      label: "House rules",
      title1: "House",
      title2: "rules",
      items: [
        "Smoking is allowed in all rooms except bedrooms.",
        "Loud music outside is permitted (under controlled conditions) until 10 PM due to house rules.",
        "Only our sound system inside the house is allowed to be used.",
        "___SPECIAL___Live music is not allowed — musicians, DJs, etc.!!!",
        "Use of firearms, fireworks, or firecrackers is strictly prohibited. Confetti cannons or balloons with confetti are also forbidden.",
        "We do not rent the house to persons under 23 years of age.",
        "The maximum number of people on the property is 15, regardless of how many will sleep over.",
      ],
    },
  },
  contact: {
    hr: {
      label: "Kontakt",
      title1: "Rezervirajte svoj",
      title2: "savršen odmor",
      desc: "Javite nam se za dostupnost i posebne zahtjeve. Brzo odgovaramo na sve upite!",
      booking: "Rezerviraj na Booking.com",
      address: "📍 Ivanovićeva 47b, Dubrava, Zagreb",
      phone: "📞 091 572 1136 — Mobitel & WhatsApp",
    },
    en: {
      label: "Contact",
      title1: "Book your",
      title2: "perfect getaway",
      desc: "Contact us for availability and special requests. We respond quickly to all inquiries!",
      booking: "Book on Booking.com",
      address: "📍 Ivanovićeva 47b, Dubrava, Zagreb",
      phone: "📞 091 572 1136 — Mobile & WhatsApp",
    },
  },
  footer: {
    hr: "© {year} Vila s bazenom Deluxe — GTI. Sva prava pridržana.",
    en: "© {year} Villa with Pool Deluxe — GTI. All rights reserved.",
  },
};

type Translations = typeof translations;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("hr");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
