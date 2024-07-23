<script setup>
import { computed, ref } from 'vue';
import LogoEl from '../Ui-Elements/LogoEl.vue';
import { useNavigationStore } from '../../stores/navigationStore';

const navStore =  useNavigationStore()
const navCollapse = computed(()=> navStore.hideNav)
</script>

<template>
 <div class="w-16 h-16 rounded-full flex-center  bg-primary-600 absolute top-4 -right-8">
    <button @click="navCollapse=!navCollapse" class="w-full h-full focus:outline-0"><i class="fa-solid fa-bars text-white -mr-6"></i></button>
</div>
<aside class="w-72 h-full relative transition-all duration-200" :class="navCollapse ? '-ml-72': ''">
    <div class="w-full h-full bg-gradient rounded-r-2xl py-4 relative" >
        <div class="w-full h-full ">
            <!-- LOGO -->
            <LogoEl/>
            <!-- USER -->
            <div class="mt-10 pb-4 border-b-[1px] mx-4 relative">
                <!-- EDIT PROFILE BUTTON -->
                <div class="w-6 h-6 rounded-sm text-white absolute top-0 right-0">
                    <a routerLink="/user-profile/jenna" class="cursor-pointer w-full h-full flex-center"><i class="fa-regular fa-pen-to-square"></i></a>
                </div>
                <!-- USER INFO -->
                <img class="w-24 h-24 rounded-full mx-auto ring ring-white" src="@/assets/images/user/user-07.png" alt="profile image" width="384" height="512">
                <div class="pt-4 text-white text-center">
                    <p class=" text-xl font-bold capitalize">jenna ortega</p>
                    <p class="text-lg flex-center font-alumni"><i class="fa-solid fa-dollar-sign text-xs mr-1"></i> 23,456</p>
                </div>
            </div>
    
            <!-- MENU LIST -->
            <nav class="my-8 overflow-y-scroll text-white">
                <ul class="menu-list">
                    <li><a href="/dashboard" class="font-semibold w-full py-2"><i class="w-6 mr-2 fa-solid fa-tv"></i> Dashboard</a></li>
                    <li><a href="/expenses/taima" class="font-semibold w-full py-2"><i class="w-6 mr-2 fa-solid fa-file-invoice-dollar"></i>Expenses</a></li>
                    <li><a href="#" class="font-semibold w-full py-2"><i class="w-6 mr-2 fa-solid fa-money-bill-transfer"></i> Transactions</a></li>
                    <li><a href="#" class="font-semibold w-full py-2"><i class="w-6 mr-2 fa-solid fa-piggy-bank"></i>Savings</a></li>
                    <li><a href="#" class="font-semibold w-full py-2"><i class="w-6 mr-2 fa-solid fa-chart-line"></i>Monthly Overview</a></li>
                </ul>
            </nav>
        </div>
    </div>   
</aside>
</template>
