<script setup>
import { onMounted, reactive, watch } from "vue";
import InputOne from "../components/Inputs/InputOne.vue"
import LogoEl from '@/components/Ui-Elements/LogoEl.vue';


const reqData = reactive({
    username: '',
    password: ''
})

onMounted(()=>{
    // reqData.username = 'taima'
})


</script>
<template>
    <main class="size-full flex-center bg-primary-300/50 ">
        <div class=" p-12 rounded-xl bg-gradient space-y-8 text-white text-center">
            <LogoEl :size="'xl'" class="border-4 border-double rounded p-4"/>
            <h1 class="text-3xl font-bold">Login</h1>
            <form class="space-y-8 text-dark" @submit.prevent="">
                <div class="space-y-4">
                    <InputOne type="text" v-model="reqData.username" placeholder="Username" :style="'input-capsule'"/>
                    <InputOne type="password" v-model="reqData.password" placeholder="Password" :style="'input-capsule'"/>
                </div>

                <button type="submit" class="btn-capsule widest btn-secondary">Submit</button>
            </form>
            <small>Don't have an account? 
                <router-link to="/" class="underline">Register</router-link>
            </small>
            <hr>
            <div class="space-y-4">
                <p>Login with social</p>
                <div class="space-x-2">
                    <button class="btn-square-sm btn-outline">Google</button>
                    <button class="btn-square-sm btn-outline">Facebook</button>
                    <button class="btn-square-sm btn-outline">Google+</button>
                </div>
            </div>
        </div>
    </main>
</template>