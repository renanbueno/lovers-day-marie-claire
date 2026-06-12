import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Slide 0 — Envelope.
 *
 * Sem textos, sem selo de coração, sem carta dentro.
 * Apenas o envelope com um shimmer/pulse para indicar que é clicável.
 *
 * Quando clicado:
 *  1) A aba abre (rotateX -180deg)
 *  2) Um cartão branco com "O Nosso Wrapped" emerge de dentro
 *  3) O cartão cresce até "virar" a próxima tela (avança).
 */
export default function EnvelopeSlide({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    if (opened) return;
    setOpened(true);
    // Espera a animação completa (flap + card emerge + grow)
    setTimeout(() => onOpen?.(), 1800);
  };

  return (
    <div
      className="relative flex h-full w-full items-center justify-center px-6"
      data-testid="envelope-slide"
    >
      {/* Pulse halo BEHIND envelope, indica clicabilidade */}
      <motion.div
        aria-hidden
        animate={opened ? { opacity: 0 } : { scale: [1, 1.18, 1], opacity: [0.55, 0, 0.55] }}
        transition={
          opened
            ? { duration: 0.4 }
            : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
        }
        className="pointer-events-none absolute h-[330px] w-[330px] rounded-full bg-rose-500/30 blur-3xl sm:h-[400px] sm:w-[400px]"
      />

      {/* Envelope */}
      <motion.button
        type="button"
        onClick={handleClick}
        whileHover={!opened ? { scale: 1.03 } : {}}
        whileTap={!opened ? { scale: 0.97 } : {}}
        initial={{ opacity: 0, y: 30 }}
        animate={
          opened
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 1, y: [0, -6, 0], scale: 1 }
        }
        transition={
          opened
            ? { duration: 0.4 }
            : {
                opacity: { duration: 1 },
                y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className="relative h-[210px] w-[290px] focus:outline-none sm:h-[252px] sm:w-[348px]"
        data-testid="envelope-button"
        aria-label="Abrir envelope"
      >
        {/* Corpo do envelope */}
        <div className="absolute inset-0 overflow-hidden rounded-[6px] bg-[linear-gradient(135deg,#F4DCE0_0%,#E8C2C8_50%,#D9A8B0_100%)] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.18)_inset]">
          {/* textura sutil */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(rgba(132,17,38,0.18) 1px, transparent 1px)",
              backgroundSize: "8px 8px",
            }}
          />
          {/* diagonais onde a aba encontra o corpo */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 290 210"
            preserveAspectRatio="none"
            aria-hidden
          >
            <line x1="0" y1="210" x2="145" y2="105" stroke="rgba(132,17,38,0.18)" strokeWidth="1" />
            <line x1="290" y1="210" x2="145" y2="105" stroke="rgba(132,17,38,0.18)" strokeWidth="1" />
          </svg>

          {/* Cartão "O Nosso Wrapped" emergindo de dentro */}
          <motion.div
            initial={{ y: 0, opacity: 0, scale: 0.6 }}
            animate={
              opened
                ? { y: -130, opacity: 1, scale: 1.05 }
                : { y: 0, opacity: 0, scale: 0.6 }
            }
            transition={{
              delay: 0.55,
              duration: 1.0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-x-4 top-6 z-10 flex h-[150px] flex-col items-center justify-center rounded-md bg-gradient-to-b from-[#FFFBF7] to-[#F7E3E5] px-4 text-center shadow-[0_18px_30px_-8px_rgba(0,0,0,0.4)]"
          >
            <p className="text-[9px] uppercase tracking-[0.4em] text-rose-700/80">
              Retrospectiva
            </p>
            <p className="mt-2 font-display text-2xl italic leading-none text-rose-950">
              O Nosso
            </p>
            <p className="font-display text-2xl italic leading-none text-rose-700">
              Wrapped
            </p>
          </motion.div>
        </div>

        {/* ABA superior (flip up quando abre) */}
        <motion.div
          aria-hidden
          initial={{ rotateX: 0 }}
          animate={opened ? { rotateX: -180 } : { rotateX: 0 }}
          transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
          className="absolute inset-x-0 top-0 z-20 h-[60%]"
        >
          <div
            className="h-full w-full"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background:
                "linear-gradient(135deg, #F8E5E8 0%, #EFC9CE 60%, #DCAAB4 100%)",
              boxShadow:
                "inset 0 -2px 0 rgba(132,17,38,0.15), 0 4px 14px rgba(0,0,0,0.25)",
            }}
          />
        </motion.div>
      </motion.button>
    </div>
  );
}
