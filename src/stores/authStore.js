import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { usePreferredDark } from '@vueuse/core'
import router from '../router'

export const useAuthenticationStore = defineStore('auth', () => {

  const isAuthorized = ref(false)

  // watch(isAuthorized, (newVal) => {

  //   darkMode.value = newVal
  // })


  function authenticateUser() {
    const authData = localStorage.getItem('isAuthorized')
    console.log("authenticate", authData)
    if(!!authData) {
    console.log("authenticate in if", authData)

      isAuthorized.value = JSON.parse(authData)
    }
    console.log("authenticate out if", authData)

  }

  function unauthorizeUser(){
    isAuthorized.value = false
    localStorage.removeItem('isAuthorized')
  }

  return { isAuthorized, authenticateUser, unauthorizeUser }
})
