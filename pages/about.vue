<template>
    <UContainer>
        <div class="animate-neon py-12">
            <h2
                class="relative text-6xl tracking-[10px] font-semibold text-blue-600 uppercase leading-[0.7em] outline-none">
                Sobre Mí
            </h2>
        </div>
        <div class="text-center p-6">
            <p class="text-lg font-medium">
                ¡Hola! Soy Gerson Reynaga. Soy desarrollador web con experiencia en crear aplicaciones web dinámicas y efectivas. Mi pasión es el desarrollo front-end y disfruto trabajando con tecnologías modernas.
            </p>
            <p class="text-lg font-medium mt-4">
                Conéctate conmigo en LinkedIn o explora mi trabajo en GitHub:
            </p>
            <div class="flex justify-center mt-4 space-x-4">
                <a href="https://www.linkedin.com/in/gerson-reynaga/" target="_blank" class="text-blue-600 hover:text-blue-800">
                    <UIcon name="mdi:linkedin" class="size-8" />
                </a>
                <a href="https://github.com/G-Reynaga" target="_blank" class="text-gray-800 hover:text-gray-600">
                    <UIcon name="mdi:github" class="size-8" />
                </a>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div v-for="index in 6" :key="index"
                class="relative rounded-xl overflow-hidden bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800 shadow-lg transition-shadow duration-300 hover:shadow-xl hover:ring hover:ring-sky-500">
                <UCard class="flex flex-col px-4 p-2">
                    <UIcon name="i-heroicons-check" class="size-8" />
                    <p class="text-gray-900 dark:text-white text-base font-bold truncate">Fiable</p>
                    <p class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">
                        Comprometido a proporcionar soluciones confiables y efectivas para tus necesidades.
                    </p>
                </UCard>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div v-for="index in 6" :key="index"
                class="card rounded-xl transition-all duration-[.3s] hover:shadow-[0px_0px_30px_1px_rgba(0,255,117,0.30)]"
                :style="{ backgroundImage: 'linear-gradient(163deg, #00ff75 0%, #3700ff 100%)' }">
                <UCard class="card2 flex flex-col px-4 p-2 hover:scale-[.98] transition-all duration-[.2s] rounded-xl">
                    <UIcon name="i-heroicons-lock-closed" class="size-8" />
                    <p class="text-gray-900 dark:text-white text-base font-bold truncate">Seguro</p>
                    <p class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">
                        Aseguro que tus datos y proyectos están protegidos con las mejores prácticas de seguridad.
                    </p>
                </UCard>
            </div>
        </div>
    </UContainer>
</template>

<style scoped>
h2 {
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
}
</style>
