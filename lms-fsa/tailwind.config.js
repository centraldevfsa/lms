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
    extend: {
      colors: {
        valentino: {
          '50': '#faf5fe',
          '100': '#f4ebfc',
          '200': '#ead6f8',
          '300': '#dcb5f2',
          '400': '#c789e9',
          '500': '#ae5cd9',
          '600': '#933cbd',
          '700': '#7c2f9c',
          '800': '#662880',
          '900': '#582669',
          '950': '#280a33',
        },
      },
    },
  },
  plugins: [],
};
