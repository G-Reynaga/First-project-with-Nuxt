<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>

<template>
    <ClientOnly>
        <UTooltip text="Modo oscuro / claro">
            <UButton :color="isDark ? 'white' : 'yellow'" variant="link" aria-label="Theme" @click="isDark = !isDark">
                <UIcon name="i-heroicons-light-bulb" class="size-6" />
            </UButton>
            <template #fallback>
                <div class="size-6" />
            </template>
        </UTooltip>
    </ClientOnly>
</template>
