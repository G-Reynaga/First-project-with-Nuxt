<template>
  <div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
    <header class="z-50 sticky top-0 animate-enhance-header scroll-timeline">
      <Navbar />
    </header>

    <main class="py-6">
      <UContainer>
        <Breadcumb/>
        <NuxtPage class="py-4" />
      </UContainer>
    </main>

    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
.scroll-timeline {
  animation-timeline: scroll(root block);
  animation-range: 0 200px;
}
</style>
