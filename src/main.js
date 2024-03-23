import './assets/sayfa2.css'
import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Vue Router'ı içe aktarın
import Giris from './components/giris.vue'; // Giriş bileşenini içe aktarın


import sayfa2 from './components/sayfa2.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/giris', component: Giris },
    
    { path: '/sayfa2', component: sayfa2 },
    { path: '/', redirect: '/giris' } // Kök dizin yönlendirmesi
  
  ]
});
createApp(App)
  .use(router) // Router'ı uygulamaya ekle
  
  .mount('#app');
  