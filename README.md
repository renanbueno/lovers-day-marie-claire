# O Nosso Wrapped 🤍

Uma experiência interativa estilo "Spotify Wrapped" para casais, feita com React, Framer Motion e Tailwind CSS.

## ✨ Características

- **Navegação Story-style:** Experiência imersiva inspirada nos Stories do Instagram.
- **Design Cinemático:** Tema dark com gradientes suaves, tipografia de luxo e efeito de grão de filme.
- **Animações Fluidas:** Slides e elementos animados com Framer Motion.
- **Interativo:** Inclui quizzes musicais, contadores animados e efeitos especiais (confete e chuva de corações).
- **Mobile-First:** Projetado para visualização perfeita em dispositivos móveis.

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado.

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>

# Instale as dependências
npm install --legacy-peer-deps
```

### Execução
```bash
npm start
```

## 🛠️ Tecnologias Utilizadas

- **React 19**
- **Framer Motion 11** (Animações)
- **Tailwind CSS** (Estilização)
- **Lucide React** (Ícones)
- **Canvas Confetti** (Efeitos visuais)

## 📖 Instruções para Personalização

O projeto utiliza o padrão `[INSIRA AQUI]` para facilitar a personalização. Para deixar o Wrapped com a sua cara:

1. Procure por `[INSIRA AQUI]` nos componentes dentro de `src/wrapped/slides/`.
2. Substitua os textos pelas suas estatísticas e mensagens.
3. Adicione o caminho da sua música no componente `src/wrapped/WrappedExperience.jsx` na tag `<audio>`.
4. Substitua os placeholders de fotos no `PhotosSlide.jsx`.

## 📦 Deploy (GitHub Pages)

Para hospedar no seu `github.io`:

1. Configure o `homepage` no seu `package.json` se necessário.
2. Execute:
   ```bash
   npm run build
   ```
3. Envie o conteúdo da pasta `build` para o seu repositório.

---
Feito com ❤️ para o Dia dos Namorados.
