<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
    <div>
        <UButton label="Filtrar" variant="outline" color="white" class="sm:hidden" @click="isOpen = true" />

        <USlideover v-model="isOpen" side="left">
            <div class="p-4 flex-1">
                <h1 class="text-2xl mb-4">Filtros</h1>
                <UButton color="gray" variant="ghost" size="sm" icon="i-heroicons-x-mark-20-solid"
                    class="flex sm:hidden absolute end-5 top-5 z-10" square padded @click="isOpen = false" />
                <div>
                    <FilteredCategory />
                </div>
            </div>
        </USlideover>
    </div>
</template>
