import './bootstrap';
import { createApp } from 'vue';

import app from './components/app.vue';

import Alpine from 'alpinejs';

createApp(app).mount('#app')

window.Alpine = Alpine;

Alpine.start();
