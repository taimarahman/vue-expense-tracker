<script setup>
import UserDropdown from './UserDropdown.vue'
import ThemeSwitch from './ThemeSwitch.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import LanguageDropdown from './LanguageDropdown.vue'
import MenuDropdown from './MenuDropdown.vue'

const route = useRoute()

const isActiveRoute = (path) => {
  return route.path === path
}
const isParentRouteActive = computed(() => {
  // console.log(route)
  return route.matched[0].name === 'assessment'
})
</script>

<template>
  <div
    class="sticky top-0 z-9 bg-primary h-[83px] md:h-[107px] w-full flex shrink-0 items-center justify-between py-4 px-4 md:px-6 2xl:px-9.5"
  >
    <div class="h-full hidden md:flex items-start-start">
      <ul class="nav-ul">
        <li class="h-full flex-center relative group cursor-pointer">
          <p :class="{ 'nav-link-active': isParentRouteActive }" class="nav-li nav-link">
            My APTITUDO
          </p>
          <!-- Dropdown menu -->
          <ul
            class="absolute left-0 top-full hidden min-w-48 bg-cardBg rounded-md overflow-hidden shadow-1 group-hover:block"
          >
            <li
              :class="{ 'list-item-active': isActiveRoute('/assessment/create') }"
              class="h-10 list-item text-lg"
            >
              <RouterLink class="block w-full" to="/assessment/create">Create APTITUDO</RouterLink>
            </li>
            <li
              :class="{ 'list-item-active': isActiveRoute('/assessment/archived') }"
              class="h-10 list-item text-lg"
            >
              <RouterLink class="block w-full" to="/assessment/archived">Saved APTITUDO</RouterLink>
            </li>
          </ul>
        </li>
        <li>
          <RouterLink activeClass="nav-link-active" class="nav-link" to="/applicants">
            My Applicants
          </RouterLink>
        </li>
        <li>
          <RouterLink activeClass="nav-link-active" class="nav-link" to="/tests"> Tests</RouterLink>
        </li>
      </ul>
    </div>
    <MenuDropdown/>
    <!--  -->
    <div class="flex items-center gap-4 md:gap-7">
      <!-- language dropdown -->
      <LanguageDropdown />

      <!-- theme switch -->
      <ThemeSwitch />

      <!-- user profile dropdown -->
      <UserDropdown />
    </div>
  </div>

  <!--  -->
</template>
