<script setup>
import { useDarkModeStore } from '@/stores/darkMode'
import { useUserInfoStore } from '../../stores/userStore'

const userStore = useUserInfoStore()
const darkModeStore = useDarkModeStore()

const candidateType = userStore.getUserType()
</script>

<template>
  <label
    :class="candidateType ? 'bg-accent50'  : 'bg-secondary'"
    class="relative m-0 block h-7 w-10 md:w-16 rounded-full"
    @click="darkModeStore.toggleDarkMode"
  >
    <input class="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0" type="checkbox" />
    <span
      :class="[
        { 'right-6 translate-x-full left-auto': darkModeStore.darkMode },
        candidateType ? 'bg-accent' : 'bg-primary'
      ]"
      class="absolute top-1/2 left-1 flex h-5 w-5 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full duration-75 ease-linear"
    >
      <span class="dark:hidden">
        <svg fill="none" height="9.56" viewBox="0 0 9.56 9.56" width="9.56">
          <image height="9.56" width="9.56" xlink:href="@/assets/images/icon/icon-sun.svg" />
        </svg>
      </span>
      <span class="hidden dark:inline-block">
        <svg fill="none" height="9.56" viewBox="0 0 9.56 9.56" width="9.56">
          <image height="9.56" width="9.56" xlink:href="@/assets/images/icon/icon-moon.svg" />
        </svg>
      </span>
    </span>
  </label>
</template>
