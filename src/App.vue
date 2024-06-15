<script setup lang="ts">
import { RouterView } from 'vue-router'
import { type IStaticMethods } from 'preline/preline'
import { onMounted } from 'vue'
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
  }
}

onMounted(() => {
  setTimeout(() => {
    window.HSStaticMethods.autoInit()
  }, 100)
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
