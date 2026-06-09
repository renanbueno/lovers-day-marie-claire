import { useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Music2, Check } from "lucide-react";

// INSIRA AQUI os nomes das músicas e marque a correta com `correct: true`.
const OPTIONS = [
  { label: "[INSIRA AQUI — Música A]", correct: false },
  { label: "[INSIRA AQUI — Música B]", correct: true }, // <- música certa
  { label: "[INSIRA AQUI — Música C]", correct: false },
];

function fireConfetti() {
  const defaults = {
    spread: 70,
    ticks: 200,
    gravity: 0.9,
    decay: 0.94,
    startVelocity: 35,
    colors: ["#fda4af", "#f43f5e", "#fb7185", "#fecdd3", "#e11d48", "#fff1f2"],
    scalar: 1.1,
  };

  // Burst from center
  confetti({ ...defaults, particleCount: 90, origin: { x: 0.5, y: 0.4 } });
  // Side bursts
  setTimeout(() => {
    confetti({ ...defaults, particleCount: 60, angle: 60, origin: { x: 0, y: 0.55 } });
    confetti({ ...defaults, particleCount: 60, angle: 120, origin: { x: 1, y: 0.55 } });
  }, 180);
  // Hearts-ish shower
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 80,
      spread: 120,
      startVelocity: 25,
      origin: { x: 0.5, y: 0 },
      gravity: 1.1,
    });
  }, 420);
}

export default function MusicQuizSlide({ onCorrect }) {
  const [wrongIdx, setWrongIdx] = useState(null);
  const [correctIdx, setCorrectIdx] = useState(null);
  const lockedRef = useRef(false);

  const handleClick = (idx) => {
    if (lockedRef.current) return;
    const opt = OPTIONS[idx];
    if (opt.correct) {
      lockedRef.current = true;
      setCorrectIdx(idx);
      fireConfetti();
      onCorrect?.();
    } else {
      setWrongIdx(idx);
      // Reset the shake/red state after the animation so user can try another
      setTimeout(() => setWrongIdx(null), 700);
    }
  };

  return (
    <div
      className="relative flex h-full w-full flex-col justify-between px-6 pb-16 pt-20 md:px-12"
      data-testid="music-quiz-slide"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md"
      >
        <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.36em] text-wrapped-petal/80">
          <Music2 className="h-3.5 w-3.5" /> Capítulo 02
        </p>
        <h2 className="mt-3 font-display text-3xl italic leading-tight text-wrapped-blush md:text-5xl">
          Mas teve uma música
          <br />
          que não saiu do nosso{" "}
          <span className="bg-gradient-to-r from-rose-200 to-pink-400 bg-clip-text text-transparent">
            repeat
          </span>
          .
        </h2>
        <p className="mt-4 text-sm text-wrapped-blush/65 md:text-base">
          Qual você acha que foi?
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
              onClick={() => handleClick(idx)}
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
                  : { delay: 0.3 + idx * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
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
              <Music2
                className={[
                  "h-4 w-4 transition-transform duration-500",
                  isCorrect ? "rotate-12 text-rose-100" : "text-wrapped-blush/40",
                ].join(" ")}
              />
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
        Escolha sabiamente ♡
      </motion.p>
    </div>
  );
}
