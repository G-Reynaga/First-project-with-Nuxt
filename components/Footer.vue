<template>
  <footer class="border-t py-6">
    <UContainer>
      <div class="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-8">
        <div class="flex flex-col items-center md:items-start">
          <p class="text-center md:text-left">
            Your Company Name <br>
            Address <br>
            City, State, ZIP
          </p>
        </div>

        <div class="flex flex-col items-center md:items-start">
          <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
          <ul class="space-y-2">
            <li><nuxt-link href="/" class="hover:text-sky-500">Inicio</nuxt-link></li>
            <li><nuxt-link href="/about" class="hover:text-sky-500">Quiénes somos</nuxt-link></li>
          </ul>
        </div>

        <div class="flex flex-col items-center md:items-end col-span-2 md:col-span-1">
          <h3 class="text-lg font-semibold mb-3">Síguenos</h3>
          <div class="flex space-x-4">
            <nuxt-link href="#" class="text-gray-600 transition-colors duration-300 hover:text-blue-600 hover:scale-110">
              <UIcon name="mdi:facebook-box" class="size-6" />
            </nuxt-link>
            <nuxt-link href="#" class="text-gray-600 transition-colors duration-300 hover:text-pink-500 hover:scale-110">
              <Icon name="mdi:instagram" class="size-6" />
            </nuxt-link>
            <nuxt-link href="#" class="text-gray-600 transition-colors duration-300 hover:text-sky-400 hover:scale-110">
              <Icon name="mdi:linkedin" class="size-6" />
            </nuxt-link>
            <nuxt-link href="#" class="text-gray-600 transition-colors duration-300 hover:text-black dark:hover:text-white hover:scale-110">
              <Icon name="hugeicons:new-twitter" class="size-6" />
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="text-center mt-6">
        <p class="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </UContainer>
  </footer>
</template>
