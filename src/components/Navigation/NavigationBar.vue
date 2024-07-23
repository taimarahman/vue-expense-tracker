<script setup>
// import { useSidebarStore } from '@/stores/sidebar'
import MenuBar from './MenuBar.vue'

// const { isSidebarOpen, toggleSidebar } = useSidebarStore()
</script>

<template>
  <header class="sticky top-0 z-999 flex w-full h-[80px] md:h-[107px] drop-shadow-1 dark:drop-shadow-none">
    <div class="flex flex-grow items-center justify-between">
      <div class="bg-coal-900 max-w-[25vw] lg:max-w-80 xl:max-w-98 size-full p-3 flex shrink-0 items-center justify-center">
        <RouterLink class="" to="/dashboard">
          <img alt="Logo" src="@/assets/images/logo/logo.svg" />
        </RouterLink>
      </div>
      <div class="flex-grow">
        <MenuBar />
      </div>
      <!--  -->
    </div>
  </header>
</template>
