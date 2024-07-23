import './assets/css/gordita.css'
import './assets/css/main.css'
import '.././node_modules/vue-multiselect/dist/vue-multiselect.css'
import 'vue3-toastify/dist/index.css'
import '.././node_modules/flowbite-vue/dist/index.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'flatpickr/dist/flatpickr.min.css'
import '.././node_modules/fontawesome-free/css/all.min.css'
// import VueApexCharts from 'vue3-apexcharts'
import axios from 'axios'
import authService from '@/services/auth.service'
import App from './App.vue'
import router from './router'

import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'

import Vue3Toastify, { toast } from 'vue3-toastify'
import { useLoaderStore } from './stores/loaderStore'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Toastify, { autoClose: 3000, hideProgressBar: true, transition: 'slide' })
// app.use(VueApexCharts)

app.mount('#app')

const loaderStore = useLoaderStore()
const axiosInstance = axios.create()
axiosInstance.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
let token = document.head.querySelector('meta[name="csrf-token"]')
app.config.globalProperties.$axios = axiosInstance

let userData = JSON.parse(localStorage.getItem('user'))

//----------------------------------------Request interceptor for API calls-------------------------

axios.interceptors.request.use(
 (config) => {
    if (!(config.params && config.params.dontLoad === true)) {
      //   loaderStore.setShowLoader(true)
      // loaderStore.setIsLoading(true)

    } else {
      config.params.dontLoad = null
    }
    if (!userData) {
      userData = JSON.parse(localStorage.getItem('user'))
    }
    if (userData) {
      config.headers.Authorization = `Bearer ${userData.token}`
    }
    return config
  },
  (error) => {
    toast.error('Something went wrong!', {
      autoClose: 2500,
      theme: 'dark'
    })
    
    loaderStore.setIsLoading(false)
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (config) => {
    // loaderStore.setShowLoader(false)
    
    loaderStore.setIsLoading(false)
    console.log("set false ",loaderStore.isLoading)
    if (config.data.status === false) {
      toast.error(config.data.message, {
        autoClose: 2500,
        theme: 'dark'
      })
    }
    // else {
    //   console.log('true', config.data)
    //   toast.success(config.data.message, {
    //     autoClose: 2500,
    //     theme: 'dark'
    //   })
    // }
    return config
  },
  (error) => {
    console.log(error)
    // loaderStore.setShowLoader(false)
    loaderStore.setIsLoading(false)
    console.log("set false ",loaderStore.isLoading)
    if (error.message) {
      toast.error(error.message, {
        autoClose: 2500,
        theme: 'dark'
      })
    } else {
      toast.error('Something went wrong!', {
        autoClose: 2500,
        theme: 'dark'
      })
    }
    if (error.response.status == 401) {
      console.log('401')
      authService.logout()
      router.push('/')
    }
    return Promise.reject(error)
  }
)

app.config.errorHandler = (err) => {
  toast.error(err.message, {
    autoClose: 2500,
    theme: 'dark'
  })
}
