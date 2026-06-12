import { motion } from "framer-motion";

/**
 * Slide 10 — Message (Capítulo 09).
 * Carta em papel romântico.
 *   Abertura: "Minha Princesa,"
 *   Fechamento: "— serei sempre seu, Renan"
 */
export default function MessageSlide() {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center px-6 pb-24 pt-14 md:px-12 md:pt-20"
      data-testid="message-slide"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -1 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-lg rounded-md bg-gradient-to-br from-[#FFFBF7] via-[#FBEFEB] to-[#F5D9DA] p-7 text-rose-950 shadow-[0_30px_60px_-18px_rgba(0,0,0,0.65)] md:p-10"
      >
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
          data-testid="message-greeting"
        >
          Minha Princesa,
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="mt-4 space-y-3.5 font-display text-[14px] italic leading-relaxed text-rose-950/85 md:text-base"
          data-testid="message-body"
        >
          <p>
            Em dois anos a gente viveu momentos incríveis, daqueles
            que eu vou levar comigo pra sempre, guardados no coração.
            Foram viagens inesquecíveis, pizzas deliciosas, cafés que
            não acabavam, ligações que confortavam o dia, mensagens
            de afeto, filmes de tirar o fôlego e momentos juntos
            bons demais pra serem explicados.
          </p>
          <p>
            Obrigado por cada gesto de afeto, por cada carinho silencioso
            que diz mais do que mil palavras. Obrigado por cada vez que
            você escolheu ficar e por me ensinar, sem perceber, a ser
            uma versão um pouco melhor de mim mesmo. Mesmo quando seria
            mais fácil só deixar passar e seguir.
          </p>
          <p>
            Se a gente já chegou até aqui é porque tem muito mais
            história pra escrever juntos.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-6 text-right font-display text-lg italic text-rose-800 md:text-xl"
          data-testid="message-signoff"
        >
          — serei sempre seu, Renan ♡
        </motion.p>
      </motion.div>
    </div>
  );
}
