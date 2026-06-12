import { motion } from "framer-motion";

/**
 * Slide 10 — Message.
 * A handwritten-style letter in the center of the screen.
 * EDITE livremente o texto abaixo (procure por "MENSAGEM").
 */
export default function MessageSlide() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center px-6 pb-14 pt-16 md:px-12 md:pt-20"
      data-testid="message-slide"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-lg rounded-md bg-gradient-to-br from-[#FFFBF7] via-[#FBEFEB] to-[#F5D9DA] p-8 text-rose-950 shadow-[0_30px_60px_-18px_rgba(0,0,0,0.65)] md:p-10"
      >
        {/* Paper grain */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-md opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage:
              "radial-gradient(rgba(132,17,38,1) 1px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-[10px] uppercase tracking-[0.38em] text-rose-700/80"
        >
          Capítulo 09 — Pra você
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mt-3 font-display text-3xl italic text-rose-950 md:text-4xl"
        >
          Meu amor,
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-5 space-y-4 font-display text-[15px] italic leading-relaxed text-rose-950/85 md:text-base"
          data-testid="message-body"
        >
          {/* MENSAGEM — edite à vontade */}
          <p>
            Em dois anos a gente já viveu mais do que cabe numa vida inteira.
            Foram cafés, viagens, pizzas no Armazém, madrugadas em chamada
            e silêncios bons demais pra serem explicados.
          </p>
          <p>
            Obrigado por cada {`"`}bom dia{`"`}, por cada música compartilhada,
            por cada vez que a gente escolheu ficar — mesmo quando seria
            mais fácil só sentar e olhar.
          </p>
          <p>
            Você é o meu lugar favorito. E se a gente já chegou até aqui,
            é porque tem muita história ainda pra escrever juntos.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-6 text-right font-display text-lg italic text-rose-800 md:text-xl"
        >
          — sempre seu(a), com tudo o que cabe em mim.
        </motion.p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.32em] text-wrapped-blush/55"
      >
        toque para continuar →
      </motion.p>
    </div>
  );
}
