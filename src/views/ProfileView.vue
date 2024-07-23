<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useNavigationStore } from '../stores/navigationStore';
import { onBeforeRouteUpdate } from 'vue-router';
import { onBeforeUnmount, onMounted } from 'vue';

const navStore = useNavigationStore()

onMounted(()=> {
    navStore.hideNavbar()
})

onBeforeUnmount(()=> {
    navStore.showNavbar()
})
</script>
<template>
    <!-- <DefaultLayout> -->
        <p>profile</p>
        <router-link to="/dashboard">dashboard</router-link>
    <!-- </DefaultLayout> -->
</template>