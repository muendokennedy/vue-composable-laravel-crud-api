import { createRouter, createWebHistory } from "vue-router";
import CompaniesIndex from '../components/companies/companiesIndex.vue';
import companiesCreate from '../components/companies/companiesCreate.vue';
import companiesEdit from "../components/companies/companiesEdit.vue";

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
    },
    {
        path: '/companies/:id/edit',
        name: 'companies.edit',
        component: companiesEdit,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
