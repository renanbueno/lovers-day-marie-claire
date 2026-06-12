# GEMINI.md - O Nosso Wrapped

## Visão Geral do Projeto
"O Nosso Wrapped" é uma aplicação web romântica e interativa, no estilo "Spotify Wrapped", projetada para o Dia dos Namorados. É um projeto puramente estático (Frontend) otimizado para ser leve e visualmente impactante.

- **Stack:** React 19, Framer Motion 11, Tailwind CSS, canvas-confetti, lucide-react.
- **Fontes:** Playfair Display (display, itálico) + Outfit (UI).
- **Vibe:** Cinemática, íntima e imersiva. Tons românticos profundos (roxo → rosa → vermelho) com efeito de grão de filme.

## Requisitos de Produto (PRD Integrado)

### Experiência do Usuário
1. **Navegação Estilo Stories:** Barra de progresso no topo e navegação por cliques laterais (Instagram/Spotify).
2. **Controle Manual:** A barra de progresso é visual (30s), mas o avanço é **manual** via clique para permitir contemplação.
3. **Tema Visual:** Gradiente escuro cinematográfico com textura de filme (veludo).
4. **Responsividade:** Mobile-first obrigatório.
5. **Áudio Sincronizado:** Trilha sonora dinâmica com troca suave (crossfade) e tempos de início (offsets) específicos por slide.

### Estrutura de Slides (12 Slides)
- **EnvelopeSlide:** Abertura interativa de um envelope para destravar o áudio.
- **CoverSlide:** Capa com o título "O Nosso Wrapped".
- **IntroSlide:** "Onde tudo começou".
- **StatsSlide:** Contadores animados para estatísticas personalizadas.
- **TravelSlide:** Carrossel de fotos de viagens (Adele - Chasing Pavements).
- **QuizSlide:** Quiz interativo de música.
- **TogetherSlide:** Capítulo "Nós" com polaroids (Velha Infância).
- **InteractiveSlide:** Interação de "destravar" lembranças.
- **BeachSlide:** Capítulo "Maresia" com fotos de praia.
- **RomanceSlide:** Slide elegante com fotos românticas (Taylor Swift - Lover).
- **MessageSlide:** Mensagem especial dedicada.
- **EndSlide:** Carta final de encerramento com tipografia clássica.

### Configuração de Mídia
- **Fotos e Músicas:** Gerenciadas via `src/wrapped/manifest.js`.
- **Padronização:** Arquivos em `public/audio` e `public/images` devem seguir o padrão `lowercase_com_underscore.mp3/jpeg`.

## Estrutura de Diretórios
- `src/`: Código fonte React.
  - `src/wrapped/`: Orquestração, hooks de áudio e manifest.
  - `src/wrapped/slides/`: Componentes de cada slide individual.
- `public/`: Assets estáticos (áudio e imagens).

## Comandos Principais
```bash
npm install     # Instalação de dependências
npm start       # Desenvolvimento (localhost:3000)
npm run deploy  # Build e Deploy automático para GitHub Pages
```

## Convenções de Desenvolvimento
- **Design:** Siga o `design_guidelines.json`. Use `motion.div` para animações cinemáticas.
- **Interação:** Tap esquerdo (28% da tela) = voltar, Tap direito = avançar.
- **Áudio:** Novos offsets devem ser configurados no `useEffect` de áudio do `WrappedExperience.jsx`.
