<template>
    <div>
        <UTooltip :text="tooltipText">
            <UButton @click="store.toggleViewMode" variant="outline" color="white" aria-label="view mode">
                <UIcon :name="store.viewMode === 'card'
                    ? 'lucide:list'
                    : 'heroicons-outline:view-grid'" class="size-5" />
            </UButton>
        </UTooltip>
    </div>
</template>

<script setup lang="ts">
const store = useProductStore();

const tooltipText = computed(() => {
    return store.viewMode === 'card' ? 'Vista a lista' : 'Vista a tarjetas';
});
</script>