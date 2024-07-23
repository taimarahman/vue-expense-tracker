import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { usePreferredDark } from '@vueuse/core'

export const useDarkModeStore = defineStore('darkMode', () => {
  const preferredDark = usePreferredDark()
  const darkMode = ref(preferredDark.value)

  const updateDocumentClass = (isDark) => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
  }

  // Initialize the class on load
  updateDocumentClass(darkMode.value)

  watch(preferredDark, (newVal) => {
    darkMode.value = newVal
    updateDocumentClass(newVal)
  })

  function toggleDarkMode() {
    darkMode.value = !darkMode.value
    updateDocumentClass(darkMode.value)
  }

  return { darkMode, toggleDarkMode }
})
