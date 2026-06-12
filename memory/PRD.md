# O Nosso Wrapped — Storytelling Edition (v3)

## What changed in v3 (2026-06-12)
- Nova música **"sombr — back to friends"** baixada para /public/audio/ e atribuída à tela Cover (primeira música que toca).
- **Preload global** de todas as músicas no boot (`AudioPreloader` + `<link rel="preload" as="audio">`) para evitar travadas durante as transições.
- **Envelope** completamente redesenhado: sem textos, sem selo de coração, sem carta interna. Apenas o envelope com pulse halo + shimmer + bobbing. Ao clicar, um **cartão "O Nosso Wrapped"** emerge de dentro do envelope, fazendo a transição para a tela Cover.
- **Volume** subido para 0.65 (era 0.5). CTA da Cover virou "aumente o som ♡".
- **Barra de progresso** agora preenche linearmente ao longo da duração do slide (configurável em `SLIDE_DURATIONS`). Ao chegar a 100% **NÃO** avança sozinho — fica cheia até o usuário interagir.
- **Now Playing** estilo Instagram Stories no rodapé com o nome da música + artista (transita com fade ao mudar de música).
- **Transições de imagem mais devagar** em Travel (1.9s → 3.5s), Beach (2.2s → 3.8s), Romance (2.6s → 4.2s).

## Mudanças de conteúdo solicitadas
- **Capítulo 01 (Intro):** música agora é Aliança (Tribalistas). Foto única `whatsapp_image_2026-06-11_at_20.07.14_2.jpeg` em frame portrait. Texto: "O momento em que demos o primeiro passo rumo a uma vida — feita pra dois."
- **Capítulo 02 (Stats):** música Stand By Me. Título "Olha quanta coisa a gente viveu...". Novas estatísticas:
  - 2 anos · 24 meses · 104 semanas · 730 dias · 17.520 horas · ...
  - 13× no Armazém da Pizza (sem contar a de hoje)
  - **6 idas pra praia** (novo)
  - ∞ cafés expressos juntos
  - **∞ "eu te amos" ditos no meio do dia** (criado como segunda nova estatística — sinta-se livre pra trocar)
- **Capítulo 04 (Quiz):** "Quando foi o nosso primeiro beijo? (aquele sensacional, que eu me apaixonei)". Opções: 19/abr/24, **21/abr/24 (correta)**, 24/abr/24.
- **Capítulo 05 (Together):** agora mostra **UMA imagem por vez**, portrait, transicionando lentamente (3.4s). Responsivo p/ celular.
- **Capítulo 06 (Interactive):** 7 motivos novos (1 mantido + 6 novos):
  1. Pelo seu sorriso que ilumina qualquer dia.
  2. Pelo acelero que meu coração tem toda vez que você me beija.
  3. Por ser essa pessoa querida, especial — única.
  4. Pela sua beleza, que é imensurável.
  5. Pelo afeto que você me dá.
  6. Pelo seu jeito único de ser.
  7. Por me escolher, mesmo com as dificuldades, todo santo dia.
- **Capítulo 09 (Message):**
  - Abertura: **"Minha Princesa,"**
  - Corpo reescrito conforme briefing (viagens, pizzas, cafés, ligações, mensagens, filmes...)
  - Fechamento: **"— serei sempre seu, Renan ♡"**

## Mapeamento música → slide (atual)
| # | Slide        | Música                                 |
|---|--------------|----------------------------------------|
| 0 | Envelope     | (silêncio)                             |
| 1 | Cover        | **back to friends — sombr**            |
| 2 | Intro        | **Aliança — Tribalistas**              |
| 3 | Stats        | **Stand By Me — Ben E. King**          |
| 4 | Travel       | Aonde Quer Que Eu Vá — Paralamas       |
| 5 | Quiz         | Sure Thing — Miguel                    |
| 6 | Together     | Velha Infância — Tribalistas           |
| 7 | Interactive  | Sign of the Times — Harry Styles       |
| 8 | Beach        | Aonde Quer Que Eu Vá (continua)        |
| 9 | Romance      | Lover, You Should've Come Over — JB    |
|10 | Message      | continua Lover (Jeff Buckley)          |
|11 | End          | **Sparks — Coldplay**                  |

## Onde editar facilmente
- **Pergunta do Quiz** → `src/wrapped/slides/MusicQuizSlide.jsx`
- **7 motivos** → `src/wrapped/slides/InteractiveSlide.jsx` (array `REASONS`)
- **Carta final** → `src/wrapped/slides/MessageSlide.jsx`
- **Mapeamento música→slide** + **durações de cada barra** → `src/wrapped/manifest.js`

## Backlog
- P2: Replace 2 músicas reaproveitadas (Aonde Quer em Travel+Beach, Lover em Romance+Message) caso queira trilha 100% única.
- P2: Botão "compartilhar como vídeo" no slide final.
