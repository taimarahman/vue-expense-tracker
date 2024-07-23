import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoaderStore = defineStore('loader', {
  state: () => ({
    isLoading: false
  }),
  actions: {
    setIsLoading(value) {
      this.isLoading = value
    }
  }
})
