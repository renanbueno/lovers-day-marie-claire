import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// Polaroid-style placeholders. INSIRA AQUI o caminho/URL das suas imagens em `src`.
// Deixe `src` vazio para manter o placeholder com gradiente + coração.
const PHOTOS = [
  { src: "", rotate: -7, top: "4%", left: "4%", caption: "[INSIRA AQUI]" },
  { src: "", rotate: 5, top: "10%", left: "38%", caption: "[INSIRA AQUI]" },
  { src: "", rotate: -3, top: "44%", left: "16%", caption: "[INSIRA AQUI]" },
  { src: "", rotate: 8, top: "38%", left: "52%", caption: "[INSIRA AQUI]" },
];

const HEART_EMOJIS = ["♥", "❤", "💗", "💖", "💘"];

function spawnHearts(count = 28) {
  const container = document.getElementById("heart-rain-container");
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.className = "heart-rain";
    el.textContent = HEART_EMOJIS[Math.floor(Math.random() * HEART_EMOJIS.length)];
    const left = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 160;
    const rot = (Math.random() - 0.5) * 720;
    const size = 18 + Math.random() * 28;
    const dur = 3.4 + Math.random() * 2.6;
    const delay = Math.random() * 0.6;
    el.style.left = `${left}%`;
    el.style.setProperty("--drift", `${drift}px`);
    el.style.setProperty("--rot", `${rot}deg`);
    el.style.setProperty("--size", `${size}px`);
    el.style.setProperty("--dur", `${dur}s`);
    el.style.animationDelay = `${delay}s`;
    container.appendChild(el);
    setTimeout(() => el.remove(), (dur + delay) * 1000 + 200);
  }
}

function PolaroidPlaceholder({ src, rotate, top, left, caption, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.85, rotate: 0 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate }}
      transition={{
        delay,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.04, rotate: rotate * 0.4, zIndex: 30 }}
      className="absolute h-[44%] w-[44%] max-w-[220px] rounded-[6px] bg-white/95 p-2 shadow-[0_28px_60px_-20px_rgba(0,0,0,0.65)] md:h-[55%] md:w-[28%]"
      style={{ top, left }}
      data-testid="polaroid-photo"
    >
      <div className="relative flex h-[78%] w-full items-center justify-center overflow-hidden rounded-[2px] bg-gradient-to-br from-rose-300 via-rose-500 to-rose-700">
        {src ? (
          // INSIRA AQUI: substitua `src` no array PHOTOS pelo caminho da imagem.
          <img src={src} alt={caption} className="h-full w-full object-cover" />
        ) : (
          <span className="text-4xl text-white/90 drop-shadow md:text-5xl">♥</span>
        )}
      </div>
      <p className="mt-1 text-center font-display text-[11px] italic text-rose-900/80 md:text-xs">
        {caption}
      </p>
    </motion.div>
  );
}

export default function PhotosSlide() {
  const [pressed, setPressed] = useState(false);

  const handleTeAmo = useCallback((e) => {
    e.stopPropagation();
    setPressed(true);
    spawnHearts(36);
    setTimeout(() => setPressed(false), 600);
  }, []);

  return (
    <div
      className="relative flex h-full w-full flex-col px-6 pb-16 pt-20 md:px-12"
      data-testid="photos-slide"
    >
      {/* Heart rain layer */}
      <div
        id="heart-rain-container"
        aria-hidden
        className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md"
      >
        <p className="text-[11px] uppercase tracking-[0.36em] text-wrapped-petal/80">
          Capítulo 03 — Final
        </p>
        <h2 className="mt-3 font-display text-3xl italic leading-tight text-wrapped-blush md:text-5xl">
          E ficaram pra sempre
          <br />
          os <span className="bg-gradient-to-r from-rose-200 to-pink-400 bg-clip-text text-transparent">nossos momentos</span>.
        </h2>
      </motion.div>

      {/* Polaroid stage */}
      <div className="relative my-4 h-[44vh] w-full md:my-6 md:h-[48vh]">
        {PHOTOS.map((p, i) => (
          <PolaroidPlaceholder
            key={i}
            {...p}
            delay={0.4 + i * 0.18}
          />
        ))}
      </div>

      {/* Final message + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-auto flex flex-col items-center gap-5 text-center"
      >
        <p
          className="max-w-md font-display text-xl italic leading-snug text-wrapped-blush md:text-2xl"
          data-testid="final-love-message"
        >
          {/* INSIRA AQUI a sua mensagem final personalizada */}
          [INSIRA AQUI — sua mensagem final em destaque]
        </p>

        <motion.button
          type="button"
          onClick={handleTeAmo}
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.05 }}
          animate={pressed ? { scale: [1, 1.12, 1] } : {}}
          transition={{ duration: 0.5 }}
          className="pulse-ring inline-flex items-center gap-2 rounded-full bg-wrapped-cta px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-wrapped-blush shadow-[0_10px_40px_-12px_rgba(225,29,72,0.7)] transition-colors hover:bg-wrapped-ctaHover focus:outline-none focus:ring-2 focus:ring-rose-300/60 md:text-base"
          data-testid="te-amo-button"
        >
          <Heart className="h-4 w-4 fill-current" strokeWidth={0} />
          Te amo
        </motion.button>
      </motion.div>
    </div>
  );
}
