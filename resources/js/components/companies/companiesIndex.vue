<script setup>
import useCompanies from '../../composables/companies'
import { onMounted } from 'vue'

const { companies, getCompanies, destroyCompany } = useCompanies()

onMounted(() => {
    getCompanies()
})

const deleteCompany = async (id) => {
    if(!window.confirm('Are you sure you want to delete this item?')){
        return
    }
    await destroyCompany(id)
    await getCompanies()
}

</script>
<template>
    <div class="overflow-hidden overflow-x-auto w-full align-middle sm:rounded-md">
        <div class="flex place-content-end mb-4">
            <div class="px-4 py-2 text-white bg-gray-800 rounded-md cursor-pointer">
                <router-link :to="{name: 'companies.create'}" class="text-sm font-medium">Create company</router-link>
            </div>
        </div>
        <table class="w-full border divide-y divide-gray-200">
            <thead>
                <tr>
                    <th class="px-6 py-4 bg-gray-50">
                        <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Name</span>
                    </th>
                    <th class="px-6 py-4 bg-gray-50">
                        <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Email</span>
                    </th>
                    <th class="px-6 py-4 bg-gray-50">
                        <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Address</span>
                    </th>
                    <th class="px-6 py-4 bg-gray-50">
                        <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Website</span>
                    </th>
                    <th class="px-6 py-4 bg-gray-50">
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                <template v-for="company in companies" :key="company.id">
                    <tr class="bg-white">
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap">
                        {{ company.name }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap">
                        {{ company.email }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap">
                        {{ company.address }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap">
                        {{ company.website }}
                    </td>
                    <td class="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap">
                        <router-link :to="{name: 'companies.edit', params: { id: company.id }}" class="mr-2 inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase">Edit</router-link>
                        <button @click="deleteCompany(company.id)" class="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase">Delete</button>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
    </div>
</template>
