# GEMINI.md - O Nosso Wrapped

## Visão Geral do Projeto
"O Nosso Wrapped" é uma aplicação web romântica e interativa, no estilo "Spotify Wrapped", projetada para o Dia dos Namorados. É um projeto puramente estático (Frontend) otimizado para ser leve e visualmente impactante.

- **Stack:** React 19, Framer Motion 11, Tailwind CSS, canvas-confetti, lucide-react.
- **Fontes:** Playfair Display (display, itálico) + Outfit (UI).
- **Vibe:** Cinemática, íntima e imersiva. Tons românticos profundos (roxo → rosa → vermelho) com efeito de grão de filme.

## Requisitos de Produto (PRD Integrado)

### Experiência do Usuário
1. **Navegação Estilo Stories:** Barra de progresso no topo e navegação por cliques laterais (Instagram/Spotify).
2. **Tema Visual:** Gradiente escuro cinematográfico com textura de filme (veludo).
3. **Responsividade:** Mobile-first obrigatório.
4. **Placeholders:** Todo conteúdo textual usa `[INSIRA AQUI]`. Fotos usam gradientes com ícones de coração.
5. **Áudio:** Elemento de áudio desbloqueado no primeiro clique do usuário.

### Estrutura de Slides
- **StartSlide:** Título pulsante e CTA para começar, desbloqueando o áudio.
- **StatsSlide:** Contadores animados para estatísticas personalizadas (dias, pizzas, horas de chamada).
- **MusicQuizSlide:** Quiz de música com feedback visual de acerto/erro e auto-avanço.
- **PhotosSlide:** Polaroids animadas, mensagem final e chuva de corações ao clicar em "Te amo".

### Backlog / Próximos Passos
- Substituir placeholders por conteúdo real.
- Adicionar URLs reais para fotos e música.
- Implementar configuração via QueryString (P2).
- Exportação de screenshot do slide final (P2).

## Estrutura de Diretórios
- `src/`: Código fonte React.
  - `src/wrapped/`: Orquestração da experiência.
  - `src/wrapped/slides/`: Slides individuais.
- `public/`: Assets estáticos.
- `design_guidelines.json`: Definição detalhada de cores, animações e tokens de design.

## Comandos Principais
```bash
npm install # Use --legacy-peer-deps se necessário
npm start   # Desenvolvimento
npm run build # Build para produção (GitHub Pages)
```

## Convenções de Desenvolvimento
- **Design:** Siga o `design_guidelines.json`. Não use bibliotecas de UI pré-prontas; prefira componentes `motion.div` customizados.
- **Interação:** Tap esquerdo = voltar, Tap direito = avançar.
- **Placeholders:** Sempre use o padrão `[INSIRA AQUI]`.
