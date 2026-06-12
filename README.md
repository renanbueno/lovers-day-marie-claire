# O Nosso Wrapped 🤍

Uma experiência interativa estilo "Spotify Wrapped" para casais, feita com React, Framer Motion e Tailwind CSS.

## ✨ Características

- **Navegação Story-style:** Experiência imersiva inspirada nos Stories do Instagram, com barra de progresso visual.
- **Trilha Sonora Dinâmica:** Músicas diferentes para cada capítulo com transições suaves e sincronia de tempo.
- **Abertura Imersiva:** Começa com um envelope interativo que, ao ser aberto, inicia a trilha sonora.
- **Design Cinemático:** Tema dark com gradientes suaves, tipografia de luxo e efeito de grão de filme.
- **Interativo:** Inclui quizzes, contadores animados e uma carta final personalizada.
- **Mobile-First:** Otimizado para smartphones.

## 🚀 Como Executar Localmente

### Instalação
```bash
npm install --legacy-peer-deps
```

### Execução
```bash
npm start
```

## 📖 Como Personalizar

### 1. Fotos e Músicas
Edite o arquivo `src/wrapped/manifest.js`. Basta adicionar os arquivos na pasta `public/` e atualizar as rotas no manifest:
- **Imagens:** Coloque em `public/images/`.
- **Áudio:** Coloque em `public/audio/`.

*Dica: Use nomes de arquivos em minúsculas e sem espaços (ex: `nossa_foto.jpg`).*

### 2. Textos e Estatísticas
Procure por `[INSIRA AQUI]` nos componentes dentro de `src/wrapped/slides/` para substituir pelas suas próprias estatísticas e mensagens de amor.

## 📦 Deploy (GitHub Pages)

Este projeto já está configurado para deploy automático. Para publicar sua versão:

1. Altere a `homepage` no `package.json` para o seu link.
2. Execute:
   ```bash
   npm run deploy
   ```

---
Feito com ❤️ para o Dia dos Namorados.
