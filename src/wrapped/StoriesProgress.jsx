import { useEffect, useState } from "react";

/**
 * Barra de progresso estilo Stories.
 * - Cada segmento referente a um slide.
 * - O segmento atual preenche linearmente de 0% a 100% ao longo de `currentDuration` segundos.
 * - Quando chega a 100%, NADA acontece: ele simplesmente fica cheio até o usuário interagir.
 * - Segmentos anteriores ficam totalmente preenchidos. Os futuros ficam vazios.
 */
export default function StoriesProgress({ total, currentIndex, currentDuration, resetKey }) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    // Reset on slide change
    setPct(0);
    if (!currentDuration || currentDuration <= 0) {
      setPct(100);
      return;
    }
    const startedAt = performance.now();
    let raf;
    const tick = (now) => {
      const elapsed = (now - startedAt) / 1000;
      const next = Math.min(100, (elapsed / currentDuration) * 100);
      setPct(next);
      if (next < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [currentIndex, currentDuration, resetKey]);

  return (
    <div
      className="absolute left-0 right-0 top-0 z-40 flex gap-1.5 px-3 pt-3"
      style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      data-testid="stories-progress-bar"
    >
      {Array.from({ length: total }).map((_, i) => {
        const isPast = i < currentIndex;
        const isCurrent = i === currentIndex;
        return (
          <div
            key={i}
            className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/15"
            data-testid={`stories-segment-${i}`}
          >
            {isPast && <div className="absolute inset-0 bg-white/90" />}
            {isCurrent && (
              <div
                className="absolute inset-y-0 left-0 bg-white/95"
                style={{ width: `${pct}%` }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
