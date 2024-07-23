<script setup>
import authService from '@/services/auth.service'
import { onClickOutside } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'
import router from '@/router'
import { useNavigationStore } from '../../stores/navigationStore'
import { useUserInfoStore } from '../../stores/userStore'

const target = ref(null)
const menuOpen = ref(false)
const dropdownOpen = ref(false)

// router.push({ name: 'configurations' })

onClickOutside(target, () => {
  menuOpen.value = false
})
</script>

<template>
  <div ref="target" class="relative md:hidden">
    <button class="size-full flex-center" @click.prevent="menuOpen = !menuOpen">
      <svg class="w-6 h-6 fill-coal-900" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>

    <!-- Dropdown Start -->
    <div
      v-show="menuOpen"
      class="absolute left-0 mt-4 flex w-[200px] flex-col z-9999 rounded overflow-hidden shadow-1 bg-cardBg text-sm font-medium"
    >
      <ul class="flex flex-col">
        <li>
          <button class="list-item" @click="dropdownOpen = !dropdownOpen">My APTITUDO</button>
          <ul v-if="dropdownOpen" class="flex flex-col pl-3" >
            <li>
              <router-link class="list-item" to="/assessment/create">Create APTITUDO</router-link>
            </li>
            <li>
              <router-link class="list-item" to="/assessment/archived">Saved Applicants</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link class="list-item"  to="/applicants">My Applicants</router-link>
        </li>
        <li>
          <router-link class="list-item" to="#">Tests</router-link>
        </li>
      </ul>
    </div>
    <!-- Dropdown End -->
  </div>
</template>
