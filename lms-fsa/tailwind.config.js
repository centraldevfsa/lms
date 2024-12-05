module.exports = {
  content: [
    "./src/index.html", // Arquivo HTML principal na raiz do projeto
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Todos os arquivos Vue, JS, TS, JSX e TSX dentro da pasta src
    "./src/assets/**/*.{css,scss}", // Arquivos CSS ou SCSS na pasta assets
    "./src/components/**/*.{vue,js}", // Componentes Vue e arquivos JS na pasta components
    "./src/views/**/*.{vue,js}", // Arquivos Vue e JS nas views
    "./src/router/**/*.{js,ts}", // Arquivos JS ou TS na pasta router
    "./public/**/*.html", // Arquivos HTML na pasta public (caso existam)
  ],
  theme: {
    extend: {}, // Permite customizar o tema, como adicionar cores, fontes, etc.
  },
  plugins: [], // Você pode adicionar plugins aqui, como Tailwind Forms ou Typography
};
