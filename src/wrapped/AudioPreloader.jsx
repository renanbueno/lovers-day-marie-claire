import { useEffect } from "react";
import { SONGS } from "@/wrapped/manifest";

/**
 * Pre-carrega todas as músicas assim que o app monta.
 * Usa `<link rel="preload" as="audio">` dinâmicos para que o navegador
 * comece a baixar imediatamente, sem disparar autoplay.
 */
export default function AudioPreloader() {
  useEffect(() => {
    const head = document.head;
    const links = [];

    Object.values(SONGS).forEach((song) => {
      const l = document.createElement("link");
      l.rel = "preload";
      l.as = "audio";
      l.href = song.url;
      // Garante que credenciais não atrapalhem o preload
      l.crossOrigin = "anonymous";
      head.appendChild(l);
      links.push(l);

      // Em paralelo, dá um "hint" pro browser via Audio()
      try {
        const a = new Audio();
        a.preload = "auto";
        a.src = song.url;
        // Não chamamos play(); apenas começamos o download
        a.load();
      } catch {
        /* noop */
      }
    });

    return () => {
      links.forEach((l) => l.remove());
    };
  }, []);

  return null;
}
