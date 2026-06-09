import { motion } from "framer-motion";

/**
 * Instagram/Spotify Stories-style progress bar at the top.
 * Each segment represents a slide. The active segment animates
 * left-to-right over `activeDuration` ms when `active` is true.
 */
export default function StoriesProgress({
  total,
  currentIndex,
  activeDuration,
  progressKey,
  active,
}) {
  return (
    <div
      className="absolute left-0 right-0 top-0 z-40 flex gap-1.5 px-3 pt-3"
      style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      data-testid="stories-progress-bar"
    >
      {Array.from({ length: total }).map((_, i) => {
        const isPast = i < currentIndex;
        const isCurrent = i === currentIndex;
        const finiteDuration = Number.isFinite(activeDuration);

        return (
          <div
            key={i}
            className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/15"
            data-testid={`stories-segment-${i}`}
          >
            {isPast && <div className="absolute inset-0 bg-white/90" />}
            {isCurrent && (
              <motion.div
                key={`${i}-${progressKey}`}
                className="absolute inset-y-0 left-0 bg-white/95"
                initial={{ width: "0%" }}
                animate={{
                  width: active && finiteDuration ? "100%" : isCurrent ? (finiteDuration ? "0%" : "12%") : "0%",
                }}
                transition={{
                  duration: active && finiteDuration ? activeDuration / 1000 : 0.6,
                  ease: "linear",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
