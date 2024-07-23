<script setup>
import authService from '@/services/auth.service'
import { onClickOutside } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'
import router from '@/router'
import { useNavigationStore } from '../../stores/navigationStore'
import { useUserInfoStore } from '../../stores/userStore'

const userStore = useUserInfoStore()
const tabStore = useNavigationStore()

const target = ref(null)
const dropdownOpen = ref(false)

const logout = () => {
  authService.logout()
}

const navigateToTab = (tab) => {
  tabStore.setConfigurationTab(tab)
  router.push({ name: 'configurations' })
}

onClickOutside(target, () => {
  dropdownOpen.value = false
})

const userProfileInfo = computed(() => userStore.getUserProfileInfo())

</script>

<template>
  <div ref="target" class="relative">
    <button
      class="flex items-center gap-1 md:gap-2.5"
      @click.prevent="dropdownOpen = !dropdownOpen"
    >
      <!-- profile img -->
      <span class="h-9 w-9 border-4 border-black rounded-full">
        <img alt="User" src="@/assets/images/user/user-0.png" />
      </span>
      <!-- name -->
      <span class="hidden text-right lg:block">
        <span
          class="block text-base text-white">{{ userProfileInfo?.firstName + ' ' + userProfileInfo?.lastName }}</span>
      </span>
      <!-- dropdown icon -->

      <span class="bg-coal-900 w-3.5 h-3.5 rounded-full relative">
        <!-- <img v-if="!dropdownOpen" src="/images/icon/icon-arrow-down-mini.svg" class="w-2/3 h-2/3 absolute-center object-contain"> -->
        <svg
          v-if="!dropdownOpen"
          class="fill-current sm:block absolute-center"
          height="6"
          viewBox="0 0 6 6"
          width="6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image height="6" width="6" xlink:href="@/assets/images/icon/icon-arrow-down-mini.svg" />
        </svg>
        <svg
          v-else
          class="fill-current sm:block absolute-center"
          height="6"
          viewBox="0 0 6 6"
          width="6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image height="6" width="6" xlink:href="@/assets/images/icon/icon-arrow-up-mini.svg" />
        </svg>
      </span>
    </button>

    <!-- Dropdown Start -->
    <div
      v-show="dropdownOpen"
      class="absolute right-0 mt-4 flex w-[213px] flex-col z-9999 rounded overflow-hidden shadow-1 bg-cardBg text-sm font-medium"
    >
      <ul class="flex flex-col">
        <li>
          <button class="list-item" @click="navigateToTab('profile')">My Profile</button>
        </li>
        <li>
          <button class="list-item" @click="navigateToTab('company')">My Company</button>
        </li>
        <li>
          <button class="list-item" @click="navigateToTab('team')">Team Management</button>
        </li>
        <li>
          <router-link class="list-item" to="#">Department Management</router-link>
        </li>
        <li>
          <router-link class="list-item" to="#">Admin Settings</router-link>
        </li>
        <li>
          <router-link class="list-item" to="#">Integration</router-link>
        </li>
        <li>
          <router-link class="list-item" to="#">Refer & Earn</router-link>
        </li>
        <li>
          <router-link class="list-item" to="#">Help Centre</router-link>
        </li>
      </ul>
      <button class="list-item" @click="logout">Log Out</button>
    </div>
    <!-- Dropdown End -->
  </div>
</template>
