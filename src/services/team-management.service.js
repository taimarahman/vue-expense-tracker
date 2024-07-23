import axios from 'axios'

class TeamManagementService {
  constructor() {
    this.url = import.meta.env.VITE_API_URL
  }
  async createUser(user) {
    return await axios.post(this.url + '/user/create', user)
  }
  getTableData(tableDataPayload) {
    return axios.get(this.url + '/company/get-all-team-member', {
      params: {
        companyId: tableDataPayload.companyId,
        roleId: tableDataPayload.roleId,
        pageNo: tableDataPayload.pageNo,
        searchKeyword: tableDataPayload.keyword
      }
    })
  }
  
  deleteUser(profileId){
    return axios.delete(this.url + "/user/delete-user-profile/"+profileId)
  }
}
export default new TeamManagementService()
