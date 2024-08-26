<template>
    <div v-if="loading">Cargando...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else v-if="productDetails" class="flex flex-col md:flex-row">
        <div class="flex flex-col justify-between ml-4">
            <div v-for="(image, index) in productDetails.images" :key="index" class="mb-2">
                <img :src="image" :alt="`Imagen ${index}`" :class="{
                    'w-24 h-auto max-w-md p-2 cursor-pointer object-cover border rounded': true,
                    'border-primary': image === selectedImage,
                }" @click="selectImage(image)" />
            </div>
        </div>

        <div class="flex-grow flex items-center justify-center">
            <img :src="selectedImage" :alt="productDetails.title" class="w-full h-auto max-w-md" />
        </div>

        <div class="flex flex-col flex-grow justify-center ml-4">
            <span class="text-sm font-bold text-gray-700">{{ productDetails.brand }}</span>
            <h1 class="text-2xl font-bold mb-2">{{ productDetails.title }}</h1>
            <p class="text-gray-700 mb-4">{{ productDetails.description }}</p>
            <div class="flex items-center justify-between">
                <span class="text-xl font-semibold">${{ productDetails.price }}</span>
                <span class="rounded bg-gray-200 dark:bg-slate-900 inline-block p-1 text-xs mt-1">⭐ {{
                    productDetails.rating
                }}/5</span>
            </div>
        </div>
    </div>
    <div v-if="productDetails?.reviews && productDetails.reviews.length" class="mt-8">
        <h2 class="text-xl font-bold mb-4">Reseñas</h2>
        <div v-for="review in productDetails.reviews" :key="review.reviewerEmail" class="mb-6 p-4 border rounded">
            <div class="flex items-center mb-2">
                <span class="font-bold">{{ review.reviewerName }}</span>
                <span class="ml-2 text-yellow-500">⭐ {{ review.rating }}</span>
            </div>
            <p class="text-gray-700 mb-2">{{ review.comment }}</p>
            <time class="text-sm text-gray-500">{{ formatDate(review.date) }}</time>
        </div>
    </div>
</template>

<script setup lang="ts">
const store = useProductStore();
const { productDetails, loading, error } = storeToRefs(store);
const route = useRoute();

const selectedImage = ref('');

const fetchProduct = () => {
    const id = route.params.id as string;
    store.fetchProductById(id);
};

onMounted(() => {
    fetchProduct();
});

watch(productDetails, (newProductDetails) => {
    if (newProductDetails && newProductDetails.images.length > 0) {
        selectedImage.value = newProductDetails.images[0];
    }
});

const selectImage = (image: string) => {
    selectedImage.value = image;
};

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};
</script>
