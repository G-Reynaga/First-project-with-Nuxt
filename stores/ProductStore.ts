import type { Product, Category } from '~/types/Product';

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [] as Product[],
        filteredProducts: [] as Product[],
        categories: [] as Category[],
        productDetails: null as Product | null,
        viewMode: 'card',
        loading: false,
        error: null as string | null,
    }),
    actions: {
        toggleViewMode() {
            this.viewMode = this.viewMode === 'card' ? 'list' : 'card';
        },
        async fetchCategories() {
            this.loading = true;
            try {
                const response = await fetch('https://dummyjson.com/products/category-list');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.categories = data.map((name: string) => ({ name }));
            } catch (error) {
                this.error = 'Error fetching categories: ' + (error as Error).message;
            } finally {
                this.loading = false;
            }
        },

        async fetchProductsForCategory(category: string) {
            this.loading = true;
            try {
                const response = await fetch(`https://dummyjson.com/products/category/${category}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.products = data.products;
                this.filteredProducts = data.products;
            } catch (error) {
                this.error = 'Error fetching products: ' + (error as Error).message;
            } finally {
                this.loading = false;
            }
        },

        async fetchProducts() {
            this.loading = true;
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.products = data.products;
                this.filteredProducts = [...data.products];;
            } catch (error) {
                this.error = 'Error fetching products: ' + (error as Error).message;
            } finally {
                this.loading = false;
            }
        },

        async searchProducts(query: string) {
            this.loading = true;
            try {
                if (!query) {
                    this.filteredProducts = this.products;
                    return;
                }

                const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data);

                this.filteredProducts = data.products;
            } catch (error) {
                this.error = 'Error searching products: ' + (error as Error).message;
            } finally {
                this.loading = false;
            }
        },
        async fetchProductById(id: string) {
            this.loading = true;
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                this.productDetails = data;
            } catch (error) {
                this.error = 'Error fetching product details: ' + (error as Error).message;
            } finally {
                this.loading = false;
            }
        },
    },
})
