<script setup>
import { computed, ref } from 'vue';
import LogoEl from '../Ui-Elements/LogoEl.vue';
import { useNavigationStore } from '../../stores/navigationStore';
import router from '../../router';
import { useAuthenticationStore } from '../../stores/authStore';

const authStore = useAuthenticationStore()
const navStore =  useNavigationStore()
// const navCollapse = computed(()=> navStore.hideNav)

const userLogout = () => {
    router.push({name: 'user-login'})
}
</script>

<template>
 <div class="w-16 h-16 rounded-full flex-center  bg-primary-600 absolute top-4 -right-8">
    <button @click="navStore.hideNav=!navStore.hideNav" class="size-full focus:outline-0"><i class="fa-solid fa-bars text-white -mr-6"></i></button>
</div>
<aside class="w-72 h-full relative transition-all duration-200" :class="navStore.hideNav ? '-ml-72': ''">
    <div class="size-full bg-gradient rounded-r-2xl py-4 relative" >
        <div class="size-full flex-between flex-col">
            <div class="w-full">
            <!-- LOGO -->
                <LogoEl/>
                <!-- USER -->
                <div class="mt-10 pb-4 border-b-[1px] mx-4 relative">
                    <!-- EDIT PROFILE BUTTON -->
                    <div class="w-6 h-6 rounded-sm text-white absolute top-0 right-0">
                        <router-link to="/jenna/edit-profile" class="cursor-pointer size-full flex-center"><i class="fa-regular fa-pen-to-square"></i></router-link>
                    </div>
                    <!-- USER INFO -->
                    <img class="w-24 h-24 object-cover rounded-full mx-auto ring ring-white" src="@/assets/images/cards/cards-04.png" alt="profile image">
                    <div class="pt-4 text-white text-center">
                        <p class=" text-xl font-bold capitalize">haris mortage</p>
                        <p class="text-lg flex-center font-alumni"><i class="fa-solid fa-dollar-sign text-xs mr-1"></i> 23,456</p>
                    </div>
                </div>
        
                <!-- MENU LIST -->
                <nav class="my-8 overflow-y-auto text-white">
                    <ul class="menu-list">
                        <li><router-link to="/taima/dashboard" class="font-semibold w-full py-2"><i class="w-6 mr-2 fa-solid fa-tv"></i> Dashboard</router-link></li>
                        <li><router-link to="/taima/expenses" class="font-semibold w-full py-2"><i class="w-6 mr-2 fa-solid fa-file-invoice-dollar"></i>Expenses</router-link></li>
                        <li><router-link to="#" class="font-semibold w-full py-2"><i class="w-6 mr-2 fa-solid fa-money-bill-transfer"></i> Transactions</router-link></li>
                        <li><router-link to="#" class="font-semibold w-full py-2"><i class="w-6 mr-2 fa-solid fa-piggy-bank"></i>Savings</router-link></li>
                        <li><router-link to="#" class="font-semibold w-full py-2"><i class="w-6 mr-2 fa-solid fa-chart-line"></i>Monthly Overview</router-link></li>
                    </ul>
                </nav>
            </div>
            <div class="w-full px-4 space-y-2 text-center">
                <hr>
                <button class="btn text-white btn-square-sm" @click="userLogout()">Logout</button>
            </div>
        </div>
    </div>   
</aside>
</template>
