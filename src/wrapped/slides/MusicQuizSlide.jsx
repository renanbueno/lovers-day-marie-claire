import { useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { HelpCircle, Check } from "lucide-react";

/**
 * Slide 5 — Quiz.
 * A light, playful "do you remember?" question. Tap the right answer
 * to advance. Wrong answers shake & turn red briefly.
 *
 * EDITE livremente a `QUESTION` e as `OPTIONS`.
 */
const QUESTION = "Onde foi o nosso primeiro encontro?";

const OPTIONS = [
  { label: "Em um café qualquer", correct: false },
  { label: "Armazém da Pizza", correct: true },
  { label: "Numa madrugada de chamada de vídeo", correct: false },
];

function fireConfetti() {
  const defaults = {
    spread: 70,
    ticks: 220,
    gravity: 0.9,
    decay: 0.94,
    startVelocity: 35,
    colors: ["#fda4af", "#f43f5e", "#fb7185", "#fecdd3", "#e11d48", "#fff1f2"],
    scalar: 1.1,
  };
  confetti({ ...defaults, particleCount: 90, origin: { x: 0.5, y: 0.4 } });
  setTimeout(() => {
    confetti({ ...defaults, particleCount: 60, angle: 60, origin: { x: 0, y: 0.55 } });
    confetti({ ...defaults, particleCount: 60, angle: 120, origin: { x: 1, y: 0.55 } });
  }, 180);
}

export default function QuizSlide({ onCorrect }) {
  const [wrongIdx, setWrongIdx] = useState(null);
  const [correctIdx, setCorrectIdx] = useState(null);
  const lockedRef = useRef(false);

  const handleClick = (idx, e) => {
    e?.stopPropagation();
    if (lockedRef.current) return;
    const opt = OPTIONS[idx];
    if (opt.correct) {
      lockedRef.current = true;
      setCorrectIdx(idx);
      fireConfetti();
      setTimeout(() => onCorrect?.(), 1800);
    } else {
      setWrongIdx(idx);
      setTimeout(() => setWrongIdx(null), 700);
    }
  };

  return (
    <div
      className="relative flex h-full w-full flex-col justify-between px-6 pb-14 pt-16 md:px-12 md:pt-20"
      data-testid="quiz-slide"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md"
      >
        <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.36em] text-wrapped-petal/80">
          <HelpCircle className="h-3.5 w-3.5" /> Capítulo 04 — Você se lembra?
        </p>
        <h2 className="mt-3 font-display text-3xl italic leading-tight text-wrapped-blush md:text-5xl">
          {QUESTION}
        </h2>
        <p className="mt-3 text-sm text-wrapped-blush/65 md:text-base">
          (Sem espiar, vai pelo coração.)
        </p>
      </motion.div>

      <div className="flex flex-col gap-3 md:gap-4">
        {OPTIONS.map((opt, idx) => {
          const isWrong = wrongIdx === idx;
          const isCorrect = correctIdx === idx;
          return (
            <motion.button
              key={idx}
              type="button"
              onClick={(e) => handleClick(idx, e)}
              disabled={correctIdx !== null}
              initial={{ opacity: 0, y: 16 }}
              animate={
                isWrong
                  ? { x: [-10, 10, -8, 8, -4, 0], opacity: 1, y: 0 }
                  : { opacity: 1, y: 0 }
              }
              transition={
                isWrong
                  ? { duration: 0.45, ease: "easeInOut" }
                  : { delay: 0.25 + idx * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
              }
              whileHover={correctIdx === null ? { scale: 1.015 } : {}}
              whileTap={correctIdx === null ? { scale: 0.985 } : {}}
              className={[
                "group relative flex w-full items-center justify-between rounded-2xl px-5 py-4 text-left transition-colors duration-300 md:px-6 md:py-5",
                "border backdrop-blur-xl",
                isWrong
                  ? "border-rose-300/60 bg-[#9F1239] text-wrapped-blush"
                  : isCorrect
                  ? "border-rose-200/70 bg-rose-500/30 text-wrapped-blush"
                  : "glass-card text-wrapped-blush hover:border-white/25 hover:bg-white/[0.08]",
              ].join(" ")}
              data-testid={`quiz-option-${idx}`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={[
                    "flex h-8 w-8 items-center justify-center rounded-full font-sans-ui text-xs font-medium tracking-wider",
                    isCorrect
                      ? "bg-white/90 text-rose-700"
                      : "bg-white/10 text-wrapped-blush/80 group-hover:bg-white/20",
                  ].join(" ")}
                >
                  {isCorrect ? <Check className="h-4 w-4" /> : String.fromCharCode(65 + idx)}
                </span>
                <span className="font-sans-ui text-sm font-medium tracking-tight md:text-base">
                  {opt.label}
                </span>
              </span>
            </motion.button>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="text-[11px] uppercase tracking-[0.32em] text-wrapped-blush/45"
      >
        escolha com o coração ♡
      </motion.p>
    </div>
  );
}
