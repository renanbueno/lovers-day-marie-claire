import { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import { Coffee, Pizza, Infinity as InfinityIcon, Waves, MessageCircleHeart } from "lucide-react";

function Counter({ to, duration = 1.6, delay = 0 }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    const c = animate(0, to, {
      duration, delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (val) => setV(Math.round(val)),
    });
    return () => c.stop();
  }, [to, duration, delay]);
  return v.toLocaleString("pt-BR");
}

function StatLine({ value, label, delay = 0, testId }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-baseline gap-2"
      data-testid={testId}
    >
      <span className="font-display italic text-3xl font-bold leading-none text-wrapped-blush md:text-5xl">
        {value}
      </span>
      <span className="text-[11px] uppercase tracking-[0.3em] text-wrapped-petal/85 md:text-xs">
        {label}
      </span>
    </motion.div>
  );
}

function FactCard({ icon: Icon, headline, sub, delay = 0, testId }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card flex items-center gap-3 rounded-2xl px-4 py-3 md:px-5 md:py-4"
      data-testid={testId}
    >
      <Icon className="h-5 w-5 shrink-0 text-rose-200" />
      <p className="font-sans-ui text-sm leading-tight text-wrapped-blush md:text-base">
        {headline}
        {sub ? (
          <span className="block text-[11px] uppercase tracking-[0.18em] text-wrapped-blush/55">
            {sub}
          </span>
        ) : null}
      </p>
    </motion.div>
  );
}

/**
 * Slide 3 — Estatísticas.
 * Título atualizado para refletir 2 anos.
 * Nova estatística: 6 idas na praia.
 * Mais uma estatística inventada: incontáveis "eu te amo".
 */
export default function StatsSlide() {
  return (
    <div
      className="relative flex h-full w-full flex-col gap-5 overflow-y-auto px-6 pb-24 pt-14 md:gap-7 md:px-12 md:pt-20"
      data-testid="stats-slide"
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md"
      >
        <p className="text-[11px] uppercase tracking-[0.36em] text-wrapped-petal/80">
          Capítulo 02 — Em dois anos
        </p>
        <h2 className="mt-3 font-display text-3xl italic leading-tight text-wrapped-blush md:text-5xl">
          Olha quanta coisa
          <br />
          a gente <span className="bg-gradient-to-r from-rose-200 to-pink-400 bg-clip-text text-transparent">viveu</span>
          <span className="text-wrapped-cta">.</span>
          <span className="text-wrapped-cta">.</span>
          <span className="text-wrapped-cta">.</span>
        </h2>
      </motion.div>

      {/* Contagem de tempo */}
      <div className="flex flex-col gap-2.5 md:gap-3.5">
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
        </motion.span>
      </div>

      {/* Cards de "fora" */}
      <div className="flex flex-col gap-2.5 md:gap-3">
        <FactCard
          icon={Pizza}
          headline={
            <>
              <span className="font-display text-2xl italic text-wrapped-blush md:text-3xl">13</span>{" "}
              vezes no Armazém da Pizza
            </>
          }
          sub="sem contar a de hoje"
          delay={1.3}
          testId="stat-pizza"
        />
        <FactCard
          icon={Waves}
          headline={
            <>
              <span className="font-display text-2xl italic text-wrapped-blush md:text-3xl">6</span>{" "}
              idas pra praia
            </>
          }
          sub="e cada por do sol valeu por mil"
          delay={1.5}
          testId="stat-beach"
        />
        <FactCard
          icon={Coffee}
          headline={
            <>
              <span className="inline-flex items-baseline font-display text-2xl italic text-wrapped-blush md:text-3xl">
                <InfinityIcon className="h-6 w-6 self-center" strokeWidth={2.5} />
              </span>{" "}
              cafés expressos juntos
            </>
          }
          sub="esse a gente nem tenta contar"
          delay={1.7}
          testId="stat-coffee"
        />
        <FactCard
          icon={MessageCircleHeart}
          headline={
            <>
              <span className="inline-flex items-baseline font-display text-2xl italic text-wrapped-blush md:text-3xl">
                <InfinityIcon className="h-6 w-6 self-center" strokeWidth={2.5} />
              </span>{"999999999"}
              {`"eu te amos"`} ditos (maioria por min claro)
            </>
          }
          sub="e ainda não foi o suficiente"
          delay={1.9}
          testId="stat-love"
        />
      </div>
    </div>
  );
}
