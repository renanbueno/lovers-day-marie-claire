import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import { Coffee, Pizza, Infinity as InfinityIcon } from "lucide-react";

/**
 * Smoothly animates a numeric counter from 0 → `to`.
 */
function Counter({ to, duration = 1.6, delay = 0 }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const c = animate(0, to, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (val) => setV(Math.round(val)),
    });
    return () => c.stop();
  }, [to, duration, delay]);
  return v.toLocaleString("pt-BR");
}

function StatLine({ value, label, suffix, delay = 0, testId, italic = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-baseline gap-2"
      data-testid={testId}
    >
      <span
        className={`font-display ${italic ? "italic" : ""} text-3xl font-bold leading-none text-wrapped-blush md:text-5xl`}
      >
        {value}
      </span>
      <span className="text-[11px] uppercase tracking-[0.3em] text-wrapped-petal/85 md:text-xs">
        {label}
        {suffix ? <span className="ml-1 text-wrapped-blush/60 normal-case tracking-normal">{suffix}</span> : null}
      </span>
    </motion.div>
  );
}

export default function StatsSlide() {
  return (
    <div
      className="relative flex h-full w-full flex-col gap-6 px-6 pb-12 pt-16 md:gap-8 md:px-12 md:pt-20"
      data-testid="stats-slide"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md"
      >
        <p className="text-[11px] uppercase tracking-[0.36em] text-wrapped-petal/80">
          Capítulo 02 — Os números
        </p>
        <h2 className="mt-3 font-display text-3xl italic leading-tight text-wrapped-blush md:text-5xl">
          Este ano nós
          <br />
          fomos longe<span className="text-wrapped-cta">.</span>
          <span className="text-wrapped-cta">.</span>
          <span className="text-wrapped-cta">.</span>
        </h2>
      </motion.div>

      {/* Time-spent block — staggered numeric reveal */}
      <div className="flex flex-col gap-3 md:gap-4">
        <StatLine value={<Counter to={2} duration={1.0} delay={0.2} />} label="anos" delay={0.2} testId="stat-years" />
        <StatLine value={<Counter to={24} duration={1.1} delay={0.35} />} label="meses" delay={0.35} testId="stat-months" />
        <StatLine value={<Counter to={104} duration={1.3} delay={0.5} />} label="semanas" delay={0.5} testId="stat-weeks" />
        <StatLine value={<Counter to={730} duration={1.6} delay={0.7} />} label="dias" delay={0.7} testId="stat-days" />
        <StatLine value={<Counter to={17520} duration={2.0} delay={0.9} />} label="horas" delay={0.9} testId="stat-hours" />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="font-display text-xl italic text-wrapped-blush/60 md:text-2xl"
          aria-hidden
        >
          ...
        </motion.span>
      </div>

      {/* Pizza + Coffee callouts */}
      <div className="mt-2 flex flex-col gap-3 md:mt-6 md:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card flex items-center gap-3 rounded-2xl px-4 py-3 md:px-5 md:py-4"
          data-testid="stat-pizza"
        >
          <Pizza className="h-5 w-5 shrink-0 text-rose-200" />
          <p className="font-sans-ui text-sm leading-tight text-wrapped-blush md:text-base">
            <span className="font-display text-2xl italic text-wrapped-blush md:text-3xl">13</span>{" "}
            vezes no Armazém da Pizza
            <span className="block text-[11px] uppercase tracking-[0.18em] text-wrapped-blush/55">
              sem contar a de hoje
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card flex items-center gap-3 rounded-2xl px-4 py-3 md:px-5 md:py-4"
          data-testid="stat-coffee"
        >
          <Coffee className="h-5 w-5 shrink-0 text-rose-200" />
          <p className="font-sans-ui text-sm leading-tight text-wrapped-blush md:text-base">
            <span className="inline-flex items-center font-display text-2xl italic text-wrapped-blush md:text-3xl">
              <InfinityIcon className="h-6 w-6" strokeWidth={2.5} />
            </span>{" "}
            cafés expressos juntos
            <span className="block text-[11px] uppercase tracking-[0.18em] text-wrapped-blush/55">
              esse a gente nem tenta contar
            </span>
          </p>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="mt-auto text-[11px] uppercase tracking-[0.32em] text-wrapped-blush/45"
      >
        Toque para continuar →
      </motion.p>
    </div>
  );
}
