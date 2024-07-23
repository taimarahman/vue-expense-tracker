<script setup>
// import { useSidebarStore } from '@/stores/sidebar'
import ThemeSwitch from './ThemeSwitch.vue'
import LanguageDropdown from './LanguageDropdown.vue'
import { onBeforeMount, reactive, ref } from 'vue'
import CandidateDropdown from './CandidateDropdown.vue'

const logoSrc = ref(null)
const isShow = ref(false)

const companyInfo = reactive({})


const getCompanyView = () => {
  Object.assign(companyInfo, JSON.parse(localStorage.getItem('companyInfo')))


  if (companyInfo) {
    if (companyInfo.logo) {
      const fileExtension = companyInfo.company.logoPath.split('.').pop()
      logoSrc.value = 'data:image/' + fileExtension + '+xml;base64,' + companyInfo.logo
    }
    isShow.value = true
  }

}

onBeforeMount(() => {
  isShow.value = false
  getCompanyView()
})


// const { isSidebarOpen, toggleSidebar } = useSidebarStore()
</script>

<template>
  <header v-if="isShow"
          class="sticky top-0 z-999 flex w-full h-[80px] md:h-[107px] drop-shadow-1 dark:drop-shadow-none">
    <div class="flex flex-grow items-center justify-between">
      <div class="bg-logoBg max-w-[25vw] lg:max-w-98 w-full h-full p-3 flex shrink-0 items-center justify-center">
        <RouterLink class="" to="/candidate/dashboard">
          <img :src="logoSrc" alt="Logo" />
        </RouterLink>
      </div>
      <div class="ps-2 flex-grow h-[80px] md:h-[107px] items-center bg-accent">
        <div class="flex-end h-full gap-3 md:gap-7 pr-4">
          <!-- language dropdown -->
          <LanguageDropdown />
          <!-- theme switch -->
          <ThemeSwitch />
          <!-- user profile dropdown -->
          <CandidateDropdown />
        </div>
      </div>
      <!--  -->
    </div>
  </header>
</template>
