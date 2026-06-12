import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Plane } from "lucide-react";
import { TRAVEL_PHOTOS } from "@/wrapped/manifest";

/**
 * Slide 4 — Travel.
 * Auto-rotating fullscreen photo with overlaid pin/label.
 */
export default function TravelSlide() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % TRAVEL_PHOTOS.length);
    }, 1900);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      data-testid="travel-slide"
    >
      {/* Photo stack — crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={TRAVEL_PHOTOS[idx]}
              alt={`Viagem ${idx + 1}`}
              className="h-full w-full object-cover"
              loading="eager"
            />
            {/* Dark gradient overlay so text stays readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Heading */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-14 pt-16 md:px-12 md:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md"
        >
          <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.36em] text-wrapped-petal/95">
            <Plane className="h-3.5 w-3.5" /> Capítulo 03 — As viagens
          </p>
          <h2 className="mt-3 font-display text-3xl italic leading-tight text-wrapped-blush md:text-5xl">
            Cada lugar do mundo
            <br />
            ficou{" "}
            <span className="bg-gradient-to-r from-rose-200 to-pink-400 bg-clip-text text-transparent">
              mais bonito
            </span>{" "}
            com você.
          </h2>
        </motion.div>

        {/* Counter pill */}
        <div className="flex flex-col items-start gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="glass-card inline-flex items-center gap-2 rounded-full px-4 py-2"
            data-testid="travel-counter"
          >
            <MapPin className="h-3.5 w-3.5 text-rose-200" />
            <span className="font-sans-ui text-[11px] uppercase tracking-[0.24em] text-wrapped-blush">
              {String(idx + 1).padStart(2, "0")} / {String(TRAVEL_PHOTOS.length).padStart(2, "0")}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-[11px] uppercase tracking-[0.32em] text-wrapped-blush/55"
          >
            toque para continuar →
          </motion.p>
        </div>
      </div>
    </div>
  );
}
