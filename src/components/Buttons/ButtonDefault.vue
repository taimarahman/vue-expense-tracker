<script setup lang="ts">
const props = defineProps(['label', 'route', 'customClasses','iconSrc'])
</script>

<template>
  <router-link
    :to="props.route"
    class="inline-flex items-center justify-center gap-2.5 py-4 px-10 text-center font-medium hover:bg-opacity-90 lg:px-8 xl:px-10"
    :class="props.customClasses"

  >
    <slot></slot>
    <span v-if="props.iconSrc">
      <img :src="props.iconSrc" alt="back" class="w-6 h-6 items-center justify-center" />
    </span>
    <span>{{ props.label }}</span>
  </router-link>
</template>
