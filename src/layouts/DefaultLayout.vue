<script setup>
import SidebarArea from '../components/Sidebar/SidebarArea.vue';
</script>

<template>
  <!-- ===== Page Wrapper Start ===== -->
  <main class="h-screen w-full bg-primary-200">
    <div class="h-full w-full max-w-full flex">
      <div class="h-full shrink-0 relative">
        <SidebarArea></SidebarArea>
      </div>
      <div class="h-full grow px-[2rem] overflow-y-auto">
        <slot></slot>
      </div>
    </div>
  </main>
  <!-- ===== Page Wrapper End ===== -->
</template>
