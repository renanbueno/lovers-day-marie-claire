import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";

/**
 * Counter that smoothly animates from 0 to `to` using framer-motion `animate`.
 */
function Counter({ to, label, testId, delay = 0 }) {
  const [display, setDisplay] = useState(0);
  const numeric = Number(to);
  const hasNumber = !Number.isNaN(numeric) && Number.isFinite(numeric);

  useEffect(() => {
    if (!hasNumber) return;
    const controls = animate(0, numeric, {
      duration: 1.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [numeric, hasNumber, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-start"
      data-testid={testId}
    >
      <span
        className={
          hasNumber
            ? "font-display text-[68px] font-bold italic leading-none text-wrapped-blush md:text-[96px]"
            : "font-display text-[34px] font-bold italic leading-none text-wrapped-blush md:text-[56px]"
        }
      >
        {hasNumber ? display.toLocaleString("pt-BR") : to}
      </span>
      <span className="mt-2 text-xs uppercase tracking-[0.34em] text-wrapped-petal/80 md:text-sm">
        {label}
      </span>
    </motion.div>
  );
}

export default function StatsSlide() {
  // INSIRA AQUI os números reais. Mantenha como string "[INSIRA AQUI]"
  // se quiser ver o placeholder em vez do contador animado.
  const days = "[INSIRA AQUI]"; // ex: 365
  const pizzas = "[INSIRA AQUI]"; // ex: 42
  const callHours = "[INSIRA AQUI]"; // ex: 120

  return (
    <div
      className="relative flex h-full w-full flex-col gap-6 px-6 pb-12 pt-16 md:gap-10 md:px-12 md:pt-20"
      data-testid="stats-slide"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md"
      >
        <p className="text-[11px] uppercase tracking-[0.36em] text-wrapped-petal/80">
          Capítulo 01
        </p>
        <h2 className="mt-3 font-display text-3xl italic leading-tight text-wrapped-blush md:text-5xl">
          Este ano nós
          <br />
          fomos longe<span className="text-wrapped-cta">.</span>
          <span className="text-wrapped-cta">.</span>
          <span className="text-wrapped-cta">.</span>
        </h2>
      </motion.div>

      <div className="flex flex-1 flex-col justify-center gap-6 md:gap-10">
        <Counter
          to={days}
          label="Dias juntos"
          testId="stat-item-days"
          delay={0.2}
        />
        <Counter
          to={pizzas}
          label="Pizzas divididas"
          testId="stat-item-pizzas"
          delay={0.4}
        />
        <Counter
          to={callHours}
          label="Horas em chamadas de vídeo"
          testId="stat-item-calls"
          delay={0.6}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="text-[11px] uppercase tracking-[0.32em] text-wrapped-blush/45"
      >
        Toque para continuar →
      </motion.p>
    </div>
  );
}
