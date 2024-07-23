<script setup>
import authService from '@/services/auth.service'
import { onClickOutside } from '@vueuse/core'
import { ref } from 'vue'

const target = ref(null)
const dropdownOpen = ref(false)

const logout = () => {
  authService.logout()
}

onClickOutside(target, () => {
  dropdownOpen.value = false
})
</script>

<template>
  <div ref="target" class="relative">
    <button
      class="flex items-center gap-1.5"
      @click.prevent="dropdownOpen = !dropdownOpen"
    >
      <!-- name -->
      <span class="text-right lg:block">
        <span class="block text-base text-white">EN</span>
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
          class=" fill-current sm:block absolute-center"
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
      class="absolute  mt-4 flex w-[100px] flex-col z-9999 rounded overflow-hidden shadow-1 bg-cardBg text-sm font-medium"
    >
      <ul class="flex flex-col">
        <li class="list-item">EN</li>
        <li class="list-item">BN</li>
      </ul>
    </div>
    <!-- Dropdown End -->
  </div>
</template>
