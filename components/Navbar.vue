<template>
    <nav class="border-b py-4 z-50">
        <UContainer class="flex items-center justify-between">
            <div class="flex">
                <nuxt-link to="/" class="font-bold text-2xl text-gray-900 dark:text-white flex items-end gap-1.5">
                    Nuxt
                </nuxt-link>
            </div>
            <div class="flex items-center">
                <ul class="flex space-x-4">
                    <li>
                        <nuxt-link to="/about"
                            class="hover:text-sky-500 transition-colors duration-200 font-semibold">Quién
                            soy</nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="flex gap-4">
                <!-- <nuxt-link to="/register">
                    <UButton color="gray" label="Register" />
                </nuxt-link>
                <nuxt-link to="/login">
                    <UButton color="gray" label="Login">
                        <template #trailing>
                            <UIcon name="i-heroicons-arrow-right-20-solid" class="size-5" />
                        </template>
</UButton>
</nuxt-link> -->
                <ToggleMode />
            </div>
        </UContainer>
    </nav>
</template>

<script setup lang="ts">
import ButtonFilteredMovil from './ButtonFilteredMovil.vue';
import ToggleMode from './ToggleMode.vue';
</script>