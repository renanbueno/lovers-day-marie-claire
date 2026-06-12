/**
 * Story-style top progress bar.
 * Renders a fixed bar with N evenly-spaced segments.
 * The current segment is "half-filled" to indicate position;
 * past segments are fully filled. No auto-timing — the user controls pace.
 */
export default function StoriesProgress({ total, currentIndex }) {
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
            {isCurrent && <div className="absolute inset-y-0 left-0 w-1/2 bg-white/95" />}
          </div>
        );
      })}
    </div>
  );
}
