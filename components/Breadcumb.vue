<script setup lang="ts">
const { breadcrumbLinks } = useBreadcrumbs();
</script>

<template>
  <UBreadcrumb :links="breadcrumbLinks" :ui="{ active: 'text-blue-500 dark:text-blue-400' }" />
</template>
