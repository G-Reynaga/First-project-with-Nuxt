<template>
  <div class="bg-white dark:bg-slate-950">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (pages) => {
    return pages
      ? `${pages} - Site Title`
      : 'Site Title'
  }
})
</script>

<style>
@supports selector(::-webkit-scrollbar) {
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgb(199, 199, 199);
    border: 2px solid transparent;
    background-clip: content-box;
  }
}
</style>