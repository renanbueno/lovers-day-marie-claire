# O Nosso Wrapped — Storytelling Edition (v2)

## What changed in v2 (2026-06-12)
- Project restructured by the user: backend/telemetry/emergent badge removed; frontend now lives at /app root (not /app/frontend). Supervisor config updated accordingly.
- All `[INSIRA AQUI]` placeholders replaced with real content using assets in `/public/images/{start,travel,together,beach,romance}` and `/public/audio/`.
- Auto-advance removed. Now fully user-paced: tap right = next, tap left = back. Quiz blocks until correct.
- Per-slide music with smooth crossfade (`useSlideAudio` hook). Audio unlocked on first envelope click.

## Slide flow (12 total)
0. **Envelope** — silent. Wax-sealed letter that opens on click; auto-advances after the unfold animation.
1. **Cover** — "O Nosso Wrapped" + datas 12.06.24 — 12.06.26. Music: `alianca_1.mp3`.
2. **Intro** — start/ photos (aliança + foto do casal). Music: Stand By Me — Ben E. King.
3. **Stats** — 2 anos · 24 meses · 104 semanas · 730 dias · 17.520 horas · ... · 13 vezes no Armazém da Pizza (sem contar a de hoje) · ∞ cafés expressos. Music: Velha Infância — Tribalistas.
4. **Travel** — auto-rotating cinematic carousel of travel/. Music: Aonde Quer Que Eu Vá — Paralamas.
5. **Quiz** — "Onde foi o nosso primeiro encontro?" (resposta correta: Armazém da Pizza, índice 1). Music: Sure Thing — Miguel.
6. **Together** — polaroid stack of together/. Music: Sign of the Times — Harry Styles.
7. **Interactive** — "Aperte o coração" para revelar 7 motivos. Music: continues Sure Thing.
8. **Beach** — cinematic Ken-Burns carousel of beach/ + onda SVG. Music: continues Aonde Quer.
9. **Romance** — slow-zoom carousel of romance/. Music: Lover You Should've Come Over — Jeff Buckley.
10. **Message** — carta romântica em papel velho. Continua Jeff Buckley.
11. **End** — "Volte ano que vem para descobrir o que mudou por aqui." + botão "ver de novo". Music: **Sparks — Coldplay**.

## Onde editar conteúdo
- **Pergunta do Quiz**: `/app/src/wrapped/slides/MusicQuizSlide.jsx` → constantes `QUESTION` e `OPTIONS`.
- **Motivos interativos**: `/app/src/wrapped/slides/InteractiveSlide.jsx` → array `REASONS`.
- **Mensagem final**: `/app/src/wrapped/slides/MessageSlide.jsx` → procure pelo comentário `MENSAGEM`.
- **Datas, números, mapeamento música→slide**: `/app/src/wrapped/manifest.js` + `StatsSlide.jsx`.
- **Adicionar/trocar fotos**: solte arquivos em `/app/public/images/<pasta>` e atualize as arrays em `/app/src/wrapped/manifest.js`.

## Backlog
- P2: Trocar 2 músicas reaproveitadas (Sure Thing usado em Quiz + Interactive; Aonde Quer Que Eu Vá em Travel + Beach) por outras se quiser uma trilha 100% única por slide.
- P2: Botão "Pular para o fim" para teste rápido.
- P2: Hold-to-pause na barra de progresso.
