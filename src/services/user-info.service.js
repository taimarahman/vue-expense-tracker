import axios from 'axios'

class UserInfoService {
  constructor() {
    this.url = import.meta.env.VITE_API_URL
  }

  getUserProfileInfo(token) {
    console.log(token)
    return axios.get(this.url + '/user/user-profile?tab='+ token)
  }

  saveCompanyInfo(reqData) {
    return axios.post(this.url + '/company/update-company', reqData)
  }

  getCompanyInfo(companyId) {
    return axios.get(this.url + '/company/get/' + companyId)
  }

  getCandidateInterface(token) {
    return axios.get(this.url + '/user/company-info?tab='+ token)
  }

  
}

export default new UserInfoService()
