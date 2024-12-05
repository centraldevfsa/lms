import { createApp } from 'vue'; // Atualizado para Vue 3
import App from './App.vue';
import router from './router';

const app = createApp(App); // Criação da instância do app
app.use(router); // Registrar o router
app.mount('#app'); // Montar o app
