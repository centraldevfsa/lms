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
      boxShadow: {
        'custom-black': '0 20px 50px rgba(0, 0, 0, 0.5)', // sombra preta
      },
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
        'indigo-deep': '#4B0082',
        'orange-bright': '#FF4500',
        'spring-green': '#00FF7F',
        'dark-purple': '#1E1E2F',
        'gray-purple': '#29293D',
        'white': '#FFFFFF',
        'light-gray': '#D3D3D3',
        'vibrant-red': '#FF0000',
        'golden-yellow': '#FFC300',
        'medium-gray': '#808080',
        'vibrant-purple': '#5A189A',
        'strong-green': '#38B000',
        'soft-orange': '#F4A261',
        'dark-purple-main': '#2D132C',
        'medium-purple-gray': '#3C1642',
        'near-white': '#EAEAEA',
        'light-contrast-gray': '#C4C4C4',
        'soft-red-alert': '#D72638',
        'yellow-highlight': '#FFB703',
        'neutral-gray': '#4A4A4A',
      },
    },
  },
  plugins: [],
};
