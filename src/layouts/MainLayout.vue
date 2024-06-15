<script setup lang="ts">
import SideBar from '@/components/Navigation/SideBar.vue'
import NavBar from '@/components/Navigation/NavBar.vue'
</script>

<template>
  <body class="bg-gray-50 dark:bg-slate-900">
    <NavBar />
    <SideBar />

    <!-- Content -->

    <div class="w-full pt-4 px-4 sm:px-6 md:px-8 lg:ps-72">
      <hr class="my-4" />
      <slot class="min-h-screen" />
    </div>
    <!-- End Content -->
  </body>
</template>
