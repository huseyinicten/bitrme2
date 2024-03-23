import { createApp } from 'vue'; // Vue'yu adlandırılmış olarak içe aktarın
import { createRouter, createWebHistory } from 'vue-router'; // Vue Router'ı içeri aktarın
import App from './App.vue'; // App bileşenini içeri aktarın
import Giris from './components/giris.vue'; // Giris bileşenini içeri aktarın
import Sayfa2 from './components/sayfa2.vue'; // Sayfa2 bileşenini içeri aktarın

const app = createApp(App); // Uygulamanızı oluşturun

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Giris',
            component: Giris
        },
        {
            path: '/sayfa2',
            name: 'sayfa2',
            component: Sayfa2
        }
    ]
});

app.use(router); // Uygulamaya Vue Router'ı kullanmasını söyleyin

app.mount('#app'); // Uygulamayı belirtilen hedefe monte edin

export default app; // Uygulamayı dışa aktarın
