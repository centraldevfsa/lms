import { createApp } from 'vue'; // Atualizado para Vue 3
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/tailwind.css';


const apiUrl = import.meta.env.VITE_API_URL;
console.log("API URL:", apiUrl);



const app = createApp(App); // Criação da instância do app
app.use(store); // Registrar o store
app.use(router); // Registrar o router
store.dispatch('autoLogin'); // Autenticar o usuário
app.mount('#app'); // Montar o app
