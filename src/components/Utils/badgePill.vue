<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    variant?: string
  }>(),
  {
    variant: 'gray'
  }
)

// const variants = {
//   red: 'text-red-800 bg-red-100/60 dark:bg-red-800/30 dark:text-red-500',
//   green: 'text-green-800 bg-green-100/60 dark:bg-green-800/30 dark:text-green-500',
//   blue: 'text-blue-800 bg-blue-100/60 dark:bg-blue-800/30 dark:text-blue-500',
//   gray: 'text-blue-800 bg-blue-100/60 dark:bg-blue-800/30 dark:text-blue-500'
// }
</script>

<template>
  <a
    :href="'/tags/' + title"
    class="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-red-800/30 dark:text-blue-500"
  >
    {{ title }}
  </a>
</template>
