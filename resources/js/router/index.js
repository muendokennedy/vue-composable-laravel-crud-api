import { createRouter, createWebHistory } from "vue-router";
import CompaniesIndex from '../components/companies/companiesIndex.vue';
import companiesCreate from '../components/companies/companiesCreate.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'companies.index',
        component: CompaniesIndex
    },
    {
        path: '/companies/create',
        name: 'companies.create',
        component: companiesCreate
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
