import { createRouter, createWebHistory } from "vue-router";
import CompaniesIndex from '../components/companies/companiesIndex.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'companies.index',
        component: CompaniesIndex
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
