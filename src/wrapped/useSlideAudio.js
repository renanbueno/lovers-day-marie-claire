import { useEffect, useRef } from "react";

/**
 * Plays the given audio URL with a smooth fade-in/fade-out crossfade.
 * - When `url` changes: fades out current audio, swaps src, fades in.
 * - When `url === null` or `!enabled`: fades out and pauses.
 * - Skips the swap if `url` is the same as the currently playing src.
 *
 * Targets a comfortable background volume (`targetVolume`, default 0.5).
 */
export default function useSlideAudio(url, enabled, targetVolume = 0.5) {
  const audioRef = useRef(null);
  const currentSrcRef = useRef(null);
  const fadeIntervalsRef = useRef([]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Clear any in-flight fade intervals before starting a new transition
    const clearFades = () => {
      fadeIntervalsRef.current.forEach((id) => clearInterval(id));
      fadeIntervalsRef.current = [];
    };

    const fadeTo = (target, onDone) => {
      clearFades();
      const step = 0.05;
      const id = setInterval(() => {
        const cur = audio.volume;
        if (Math.abs(cur - target) < step) {
          audio.volume = target;
          clearInterval(id);
          fadeIntervalsRef.current = fadeIntervalsRef.current.filter((x) => x !== id);
          onDone?.();
          return;
        }
        audio.volume = cur < target ? Math.min(target, cur + step) : Math.max(target, cur - step);
      }, 35);
      fadeIntervalsRef.current.push(id);
    };

    // Disable / silence
    if (!enabled || !url) {
      if (!audio.paused) {
        fadeTo(0, () => {
          audio.pause();
        });
      }
      return clearFades;
    }

    // Same song already playing — just ensure target volume.
    if (currentSrcRef.current === url) {
      if (audio.paused) {
        audio.play().catch(() => {});
      }
      fadeTo(targetVolume);
      return clearFades;
    }

    // Different song: fade out -> swap -> fade in
    fadeTo(0, () => {
      try {
        audio.src = url;
        audio.currentTime = 0;
        currentSrcRef.current = url;
        const playPromise = audio.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            /* Autoplay might be blocked on first run before user gesture — silent. */
          });
        }
        // Start fade-in once audio actually begins playing
        fadeTo(targetVolume);
      } catch {
        /* noop */
      }
    });

    return clearFades;
  }, [url, enabled, targetVolume]);

  return audioRef;
}
