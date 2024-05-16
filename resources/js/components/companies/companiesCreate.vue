<script setup>
import {reactive } from 'vue'
import useCompanies from '../../composables/companies';

const { storeCompany, errors} = useCompanies()

const form = reactive({
    name: '',
    email: '',
    address: '',
    website: '',
})

const saveCompany = async () => {
    await storeCompany(form)
}


</script>
<template>
    <div class="mt-2 mb-6 text-sm text-red-600" v-if="errors !== ''">
        {{ errors }}
    </div>
    <form class="space-y-6" @submit.prevent="saveCompany">
        <div class="space-y-8 rounded-md shadow-sm">
            <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm" v-model="form.name">
                </div>
            </div>
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <div class="mt-1">
                    <input type="text" name="email" id="email" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm" v-model="form.email">
                </div>
            </div>
            <div class="mb-4">
                <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                <div class="mt-1">
                    <input type="text" name="address" id="address" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm" v-model="form.address">
                </div>
            </div>
            <div class="mb-4">
                <label for="website" class="block text-sm font-medium text-gray-700">Website</label>
                <div class="mt-1">
                    <input type="text" name="website" id="website" class="block mt-1 w-full rounded-md border-gray-300 shadow-sm" v-model="form.website">
                </div>
            </div>
            <button type="submit" class="mt-4 inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-200 border border-transparent rounded-md font-semibold text-xs text-white dark:text-gray-800 uppercase">
                Create
            </button>
        </div>
    </form>
</template>
