import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import galleryVillaFront from "@/assets/gallery-villa-front.jpg";
import galleryYard from "@/assets/gallery-yard.jpg";
import galleryPoolWide from "@/assets/gallery-pool-wide.jpeg";
import galleryPool from "@/assets/gallery-pool.jpeg";
import galleryPoolForest from "@/assets/gallery-pool-forest.jpeg";
import galleryGazeboNight from "@/assets/gallery-gazebo-night.jpeg";
import galleryGardenNight from "@/assets/gallery-garden-night.jpeg";
import galleryPoolNight from "@/assets/gallery-pool-night.jpeg";
import galleryYardNight from "@/assets/gallery-yard-night.jpeg";
import galleryBathroom from "@/assets/gallery-bathroom.jpeg";
import galleryBedroom1 from "@/assets/gallery-bedroom-1.jpeg";
import galleryBedroom2 from "@/assets/gallery-bedroom-2.jpeg";
import galleryBedroom3 from "@/assets/gallery-bedroom-3.jpeg";
import galleryBedroom4 from "@/assets/gallery-bedroom-4.jpeg";
import galleryBedroom5 from "@/assets/gallery-bedroom-5.jpeg";
import galleryBedroom6 from "@/assets/gallery-bedroom-6.jpeg";
import galleryAttic1 from "@/assets/gallery-attic-1.jpeg";
import galleryAttic2 from "@/assets/gallery-attic-2.jpeg";
import galleryLivingroom from "@/assets/gallery-livingroom.jpeg";
import gallerySauna from "@/assets/gallery-sauna.jpeg";

const images = [
  { src: galleryVillaFront, alt: { hr: "Kuća za proslave najam Zagreb – pročelje vile s bazenom", en: "Party house rental Zagreb – villa front view" } },
  { src: galleryPoolWide, alt: { hr: "Najam kuće za proslave – bazen s ležaljkama i suncobranima", en: "Party house rental Zagreb – pool with loungers and umbrellas" } },
  { src: galleryPool, alt: { hr: "Kuća s bazenom najam Zagreb – veliki vanjski bazen", en: "House with pool rental Zagreb – large outdoor pool" } },
  { src: galleryPoolForest, alt: { hr: "Najam kuće za rođendan – bazen s pogledom na šumu", en: "Party house rental – pool with forest view" } },
  { src: galleryPoolNight, alt: { hr: "Party house rental Zagreb – bazen i dvorište noću", en: "Party house rental Zagreb – pool and yard at night" } },
  { src: galleryGazeboNight, alt: { hr: "Najam kuće za momačku – sjenica s roštiljem noću", en: "Event house rental – gazebo with BBQ at night" } },
  { src: galleryGardenNight, alt: { hr: "Najam prostora za proslave – osvijetljeno dvorište noću", en: "Party house Zagreb – illuminated yard at night" } },
  { src: galleryYardNight, alt: { hr: "Kuća za evente najam Zagreb – veliko dvorište noću", en: "Event house rental Zagreb – large yard at night" } },
  { src: galleryYard, alt: { hr: "Najam kuće za djevojačku – veliko zeleno dvorište", en: "Bachelorette party house rental – large green yard" } },
  { src: galleryLivingroom, alt: { hr: "Najam kuće za proslave Zagreb – dnevni boravak s TV-om", en: "Party house rental Zagreb – living room with TV" } },
  { src: galleryBedroom1, alt: { hr: "Kuća za proslave najam – spavaća soba s klimom i bračnim krevetom", en: "Party house rental – bedroom with AC and double bed" } },
  { src: galleryBedroom2, alt: { hr: "Najam kuće za rođendan – moderna spavaća soba s ogledalom", en: "Birthday house rental – modern bedroom with mirror" } },
  { src: galleryBedroom3, alt: { hr: "Kuća za zabave najam – prostrana spavaća soba s bračnim krevetom", en: "Event house rental – spacious bedroom with double bed" } },
  { src: galleryBedroom4, alt: { hr: "Najam kuće za momačku – spavaća soba s king size krevetom", en: "Bachelor party house rental – bedroom with king size bed" } },
  { src: galleryBedroom5, alt: { hr: "Najam kuće za djevojačku – romantična spavaća soba", en: "Bachelorette party house rental – romantic bedroom" } },
  { src: galleryBedroom6, alt: { hr: "Party house Zagreb – dizajnerska spavaća soba sa zlatnim zidom", en: "Party house Zagreb – designer bedroom with gold wall" } },
  { src: galleryAttic1, alt: { hr: "Najam prostora za proslave – potkrovlje s krevetom i sofom", en: "Event space rental – attic bedroom with sofa" } },
  { src: galleryAttic2, alt: { hr: "Kuća za evente najam – potkrovlje s bračnim krevetom", en: "Event house rental – attic room with double bed" } },
  { src: gallerySauna, alt: { hr: "Party house rental Zagreb – privatna finska sauna", en: "Party house rental Zagreb – private Finnish sauna" } },
  { src: galleryBathroom, alt: { hr: "Kuća za zabave najam – luksuzna kupaona s tušem i kadom", en: "House rental Zagreb – luxury bathroom with shower and tub" } },
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
