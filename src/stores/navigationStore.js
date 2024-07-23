import { defineStore } from 'pinia'
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

export const useNavigationStore = defineStore('nav', {
  state: () => ({
    hideNav: ref(false)
  }),
  actions: {
    showNavbar(){
      this.hideNav = fasle
    },
    hideNavbar(){
      this.hideNav = true
    }
  }
})
