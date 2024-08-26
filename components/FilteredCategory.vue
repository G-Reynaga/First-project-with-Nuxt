<template>
    <div class="min-w-[200px]">
        <UAccordion color="primary" variant="ghost" size="sm" :items="items" :ui="{ wrapper: 'w-full' }">
            <template #categorie>
                <div class="pl-4">
                    <UVerticalNavigation :links="categoryLinks" :ui="{
                        wrapper: 'border-s border-gray-200 dark:border-gray-800 space-y-2',
                        base: 'group block border-s -ms-px leading-6 before:hidden text-left',
                        padding: 'p-0 ps-4',
                        rounded: '',
                        font: '',
                        ring: '',
                        active: 'text-primary-500 dark:text-primary-400 border-current font-semibold',
                        inactive: 'border-transparent hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300'
                    }" />
                </div>
            </template>
        </UAccordion>
    </div>
</template>

<script setup lang="ts">
const store = useProductStore();
const { categories } = storeToRefs(store);

const selectedCategory = ref('');

const items = [
    {
        label: 'Categorias',
        defaultOpen: true,
        slot: 'categorie'
    },
];

const categoryLinks = computed(() => {
    return categories.value.map(category => ({
        label: category.name,
        active: selectedCategory.value === category.name,
        click: () => {
            selectedCategory.value === category.name 
                ? (selectedCategory.value = '', store.fetchProducts())
                : (selectedCategory.value = category.name, store.fetchProductsForCategory(category.name));
        },
    }));
});
</script>
