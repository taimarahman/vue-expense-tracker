<script setup>
import { RouterView } from 'vue-router'
import { useDarkModeStore } from '@/stores/darkMode'
import { onMounted } from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { computed } from 'vue'
import { useLoaderStore } from './stores/loaderStore'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const loaderStore = useLoaderStore()

const isLoading = computed(() => loaderStore.isLoading)

onMounted(() => {})

// useDarkModeStore()
</script>

<template>
  <DefaultLayout>
    <RouterView />
    <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :is-full-page="true"
    :loader="'bars'"
    :background-color="'#b0b0b0'"
    :color="'#fff'"
    /> 
  </DefaultLayout>
</template>
