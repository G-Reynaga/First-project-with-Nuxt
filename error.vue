<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
        <h1 class="text-9xl font-extrabold text-gray-700 dark:text-gray-100 tracking-widest">404</h1>
        <div class="bg-blue-600 text-white px-2 text-xl rounded rotate-12 absolute">
            Página no encontrada
        </div>
        <div class="mt-8">
            <nuxt-link to="/"
                class="relative inline-block text-sm font-medium text-blue-600 group active:text-blue-500 focus:outline-none focus:ring">
                <span
                    class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-blue-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>
                <span class="relative block px-8 py-3 bg-white dark:bg-gray-800 border border-current">
                    Volver al inicio
                </span>
            </nuxt-link>
        </div>
    </div>
</template>