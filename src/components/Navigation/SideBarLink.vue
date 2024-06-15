<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Circle } from 'lucide-vue-next'

defineProps({
  to: {
    type: String,
    default: '/'
  },
  title: String
})
</script>

<template>
  <li>
    <router-link
      :to="to"
      class="flex items-center gap-x-3.5 py-2 px-2.5 rounded-lg text-sm hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:hover:bg-gray-700"
      active-class="bg-gray-100  text-slate-700"
    >
      <slot>
        <Circle />
      </slot>
      {{ title }}
    </router-link>
  </li>
</template>
