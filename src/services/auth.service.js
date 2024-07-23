import router from '@/router'
import axios from 'axios'

class AuthService {
  constructor() {
    this.url = import.meta.env.VITE_API_URL
  }

  async login(reqData) {
    const response = await axios.post(this.url + '/user/login', reqData)
    if (response?.data.status) {
      const resData = response.data.data
      localStorage.setItem('user', JSON.stringify(resData))
      return response.data
    } else {
      return response.data
    }
  }

  async signup(data) {
    const response = await axios.post(this.url + '/user/register', data)
    if (response?.data.status) {
      return response.data
    } else {
      return response.data
    }
  }

  async logout() {
    localStorage.removeItem('menu')
    localStorage.removeItem('user')
    localStorage.clear()
    sessionStorage.clear()
    // router.push('/')
    // window.location.reload()
    window.location.href = '/';

  }
}

export default new AuthService()
