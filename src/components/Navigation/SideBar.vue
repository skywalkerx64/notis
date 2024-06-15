<script setup lang="ts">
import { Menu, LayoutPanelLeft, Notebook } from 'lucide-vue-next'

import SideBarLink from '@/components/Navigation/SideBarLink.vue'
</script>

<template>
  <!-- Sidebar Toggle -->
  <div
    class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex items-center py-4">
      <!-- Navigation Toggle -->
      <span
        data-hs-overlay="#application-sidebar"
        aria-controls="application-sidebar"
        aria-label="Toggle navigation"
      >
        <Menu />
      </span>
      <!-- End Navigation Toggle -->
    </div>
  </div>
  <!-- End Sidebar Toggle -->

  <!-- Sidebar -->
  <div
    id="application-sidebar"
    class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="px-6">
      <a
        class="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        href="#"
        aria-label="Notis"
        >Notis</a
      >
    </div>

    <nav
      class="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
      data-hs-accordion-always-open
    >
      <ul class="space-y-1.5">
        <SideBarLink title="Dashboard" to="/"> <LayoutPanelLeft /></SideBarLink>
        <SideBarLink title="Notes" to="/notes"> <Notebook /> </SideBarLink>
      </ul>
    </nav>
  </div>
  <!-- End Sidebar -->
</template>

<style scoped></style>
