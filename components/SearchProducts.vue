<template>
    <div>
        <UInput v-model="searchQuery" name="searchQuery" placeholder="Search..." @input="handleSearch"
            icon="i-heroicons-magnifying-glass-20-solid" autocomplete="off"
            :ui="{ icon: { trailing: { pointer: '' } } }">
            <template #trailing>
                <UButton v-show="searchQuery !== ''" color="gray" variant="link" icon="i-heroicons-x-mark-20-solid"
                    :padded="false" @click="clearSearch" />
            </template>
        </UInput>
    </div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';

const emit = defineEmits<{
    (e: 'search', query: string): void;
}>();

const searchQuery = ref('');

const debounceSearch = useDebounceFn((query: string) => {
    emit('search', query);
}, 300);

const handleSearch = () => {
    debounceSearch(searchQuery.value);
};

const clearSearch = () => {
    searchQuery.value = '';
    emit('search', '');
};
</script>