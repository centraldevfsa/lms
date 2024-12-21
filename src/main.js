import { createApp } from 'vue'; // Atualizado para Vue 3
import { createI18n } from 'vue-i18n';
import router from './router';
import store from './store';
import '@/assets/tailwind.css';
import App from './App.vue';

// Importar arquivos de tradução
import pt from './locales/pt.json';
import es from './locales/es.json';

// Configurar o Vue I18n
const i18n = createI18n({
  locale: 'pt', // Idioma inicial
  fallbackLocale: 'es', // Idioma de fallback
  messages: { pt, es } // Mensagens de tradução
});

const apiUrl = "http://localhost:3000/api"; // Valor padrão direto no código
console.log("API URL:", apiUrl);

const app = createApp(App); // Criação da instância do app
app.use(store); // Registrar o store
app.use(router); // Registrar o router
app.use(i18n); // Registrar o i18n
store.dispatch('autoLogin'); // Autenticar o usuário
app.mount('#app'); // Montar o app
