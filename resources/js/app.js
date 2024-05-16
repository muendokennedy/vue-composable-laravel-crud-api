import './bootstrap';

import { createApp } from 'vue';

import companiesIndex from './components/companies/companiesIndex.vue';

import router from './router';

import Alpine from 'alpinejs';

createApp({
    components: {
        companiesIndex
    }
}).use(router).mount('#app')

window.Alpine = Alpine;

Alpine.start();
