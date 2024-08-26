<template>
    <div class="flex justify-between">
        <SearchProducts @search="handleSearch" />
        <div class="flex gap-2">
            <ButtonFilteredMovil />
            <ToggleViewMode />
        </div>
    </div>
    <div class="flex gap-4 pt-4">
        <div class="flex flex-grow gap-4">
            <FilteredCategory class="hidden md:block"/>
            <div class="flex-grow">
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                    {{ filteredProducts.length }} Productos
                </p>
                <div v-if="loading" class="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <ProductsSkeleton v-for="n in 5" :key="n" />
                </div>
                <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
                <div v-else>
                    <div v-if="store.viewMode === 'card'" class="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div v-for="product in filteredProducts" :key="product.id"
                            class="flex flex-col p-4 border rounded h-full">
                            <nuxt-link :to="`/${product.id}`" class="flex flex-col h-full">
                                <img :src="product.thumbnail" :alt="product.title" class="mb-2" />
                                <div class="flex-grow">
                                    <span class="text-md font-semibold">{{ product.title }}</span>
                                </div>
                                <UDivider class="py-4" />
                                <div class="flex items-center justify-between mt-auto">
                                    <span class="font-semibold">${{ product.price }}</span>
                                    <span class="rounded bg-gray-200 dark:bg-slate-900 inline-block p-1 text-xs mt-1">
                                        ⭐ {{ product.rating }}/5
                                    </span>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>

                    <div v-else class="flex flex-col gap-4">
                        <div v-for="product in filteredProducts" :key="product.id" class="p-4 border rounded">
                            <nuxt-link :to="`/${product.id}`" class="flex">
                                <div>
                                    <img :src="product.thumbnail" :alt="product.title" class="w-40 h-auto mr-4" />
                                </div>
                                <div class="flex flex-col flex-grow">
                                    <span class="text-sm font-bold text-gray-700">{{ product.brand }}</span>
                                    <h1 class="text-lg font-bold">{{ product.title }}</h1>
                                    <ul>
                                        <li>Category: {{ product.category }}</li>
                                        <li>Stock: {{ product.stock }}</li>
                                    </ul>
                                </div>
                                <div class="flex flex-col items-end">
                                    <p>Precio</p>
                                    <span class="text-lg font-semibold">${{ product.price }}</span>
                                    <span class="rounded bg-gray-200 dark:bg-slate-900 inline-block p-1 text-xs">
                                        ⭐ {{ product.rating }}/5
                                    </span>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const store = useProductStore();
const { loading, error, filteredProducts } = storeToRefs(store);

const fetchData = () => {
    store.fetchProducts();
    store.fetchCategories();
};

onMounted(fetchData);

const handleSearch = (query: string) => {
    store.searchProducts(query);
};

</script>
