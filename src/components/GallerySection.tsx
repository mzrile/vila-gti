import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import galleryVillaFront from "@/assets/gallery-villa-front.jpg";
import galleryExterior2 from "@/assets/gallery-exterior2.jpg";
import galleryYard from "@/assets/gallery-yard.jpg";
import galleryPoolNight from "@/assets/gallery-pool-night.jpeg";
import galleryGarden from "@/assets/gallery-garden.jpeg";
import galleryGazebo from "@/assets/gallery-gazebo.jpg";
import galleryLivingroom from "@/assets/gallery-livingroom.jpeg";
import gallerySauna from "@/assets/gallery-sauna.jpeg";
import gallerySauna2 from "@/assets/gallery-sauna2.jpeg";
import galleryBathroom from "@/assets/gallery-bathroom.jpeg";
import galleryBedroomLavender from "@/assets/gallery-bedroom-lavender.jpeg";
import galleryBedroomSunset from "@/assets/gallery-bedroom-sunset.jpeg";
import galleryBedroomFuji from "@/assets/gallery-bedroom-fuji.jpeg";
import galleryBedroomBlue from "@/assets/gallery-bedroom-blue.jpeg";

const images = [
  { src: galleryVillaFront, alt: { hr: "Vila GTI - pročelje", en: "Villa GTI - front" } },
  { src: galleryPoolNight, alt: { hr: "Bazen noću s rasvjetom", en: "Pool at night with lighting" } },
  { src: galleryExterior2, alt: { hr: "Vila GTI - eksterijer", en: "Villa GTI - exterior" } },
  { src: galleryYard, alt: { hr: "Dvorište i zelena površina", en: "Yard and green area" } },
  { src: galleryGarden, alt: { hr: "Vrt s rasvjetom", en: "Garden with lighting" } },
  { src: galleryGazebo, alt: { hr: "Sjenica s roštiljem", en: "Gazebo with BBQ" } },
  { src: galleryLivingroom, alt: { hr: "Dnevna soba", en: "Living room" } },
  { src: gallerySauna, alt: { hr: "Sauna", en: "Sauna" } },
  { src: gallerySauna2, alt: { hr: "Sauna - unutrašnjost", en: "Sauna - interior" } },
  { src: galleryBathroom, alt: { hr: "Kupaona s tušem i kadom", en: "Bathroom with shower and tub" } },
  { src: galleryBedroomLavender, alt: { hr: "Spavaća soba s motivom lavande", en: "Lavender-themed bedroom" } },
  { src: galleryBedroomSunset, alt: { hr: "Spavaća soba s motivom zalaska sunca", en: "Sunset-themed bedroom" } },
  { src: galleryBedroomFuji, alt: { hr: "Spavaća soba s motivom planine Fuji", en: "Fuji-themed bedroom" } },
  { src: galleryBedroomBlue, alt: { hr: "Spavaća soba s plavim detaljima", en: "Blue-themed bedroom" } },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { lang, t } = useLanguage();
  const g = t.gallery[lang];

  return (
    <>
      <section id="galerija" className="section-padding bg-background" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-3 font-body">{g.label}</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              {g.title1} <span className="text-gold-gradient italic">{g.title2}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt[lang]}
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body text-sm tracking-wider uppercase">
                    {g.enlarge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt[lang]}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground text-3xl font-body"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            {selectedImage > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground text-4xl"
                onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage - 1); }}
              >
                ‹
              </button>
            )}
            {selectedImage < images.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground text-4xl"
                onClick={(e) => { e.stopPropagation(); setSelectedImage(selectedImage + 1); }}
              >
                ›
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
