<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import BadgePill from '@/components/Utils/badgePill.vue'
defineProps<{
  title?: string
  subtitle?: string
  text: string
  tags: {
    title: string
    color: string
  }[]
}>()
</script>

<template>
  <div
    class="flex flex-col bg-white border shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
  >
    <h3 class="text-lg font-bold text-gray-800 dark:text-white">{{ title }}</h3>
    <p class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
      {{ subtitle }}
    </p>
    <p class="mt-2 text-gray-500 dark:text-gray-400">
      {{ text?.length > 100 ? text.slice(0, 100) + '...' : text }}
    </p>
    <a
      class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href="#"
    >
      See more
      <ChevronRight :size="16" />
    </a>
    <div class="flex gap-2 mt-3">
      <BadgePill v-for="tag in tags" :key="tag.title" :title="tag.title" />
    </div>
  </div>
</template>
@/components/Utils/badgePill.vue
