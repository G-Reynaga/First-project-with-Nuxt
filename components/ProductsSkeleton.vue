<template>
    <div class="flex flex-col p-4 border rounded">
        <USkeleton class="w-full h-40" :ui="{ rounded: 'rounded-md' }" />
        <div class="flex-grow mt-2">
            <USkeleton class="h-6 w-full mb-2" />
            <USkeleton class="h-4 w-3/4" />
            <USkeleton class="h-4 w-1/2 mt-2" />
        </div>
    </div>
</template>