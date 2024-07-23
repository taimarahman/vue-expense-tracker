import axios from 'axios'

class AssessmentService {
  constructor() {
    this.url = import.meta.env.VITE_API_URL
  }

  getDepartment() {
    return axios.get(this.url + '/department/department-list')
  }

  getDesignation(departmentId) {
    return axios.get(this.url + '/designation/designation-list/' + departmentId)
  }

  getAllDesignationList(companyId) {
    return axios.get(this.url + '/designation/designations/' + companyId)
  }

  saveAssessment(assessment) {
    return axios.post(this.url + '/assessment/save', assessment)
  }

  updateAssessment(assessment) {
    return axios.post(this.url + '/assessment/update-assessment', assessment)
  }

  saveQuestion(payload) {
    return axios.post(this.url + '/question/save-question', payload)
  }

  getTestTypes() {
    return axios.get(this.url + '/test/get-test-types')
  }

  getAllTests(page, testType) {
    var api = this.url + '/test/get-all-tests?pageNo=' + page
    if (testType) api += '&typeId=' + testType
    return axios.get(api)
  }

  saveTest(payload) {
    return axios.post(this.url + '/test/save-test', payload)
  }

  getDifficulties() {
    return axios.get(this.url + '/difficulty/difficulty-list')
  }

  getAllAssessmentByCompanyId(companyId, page, size, searchText) {
    const id = companyId
    const pageNo = page
    const perPageSize = size
    const searchKeyword = searchText

    var api = this.url + '/assessment/get-all-assessment/' + id + "?pageNo=" + pageNo + "&size=" + perPageSize
    if (searchKeyword) api += '&searchKeyword=' + searchKeyword
    return axios.get(api)
  }

  getAssessmentById(assessmentId) {
    return axios.get(this.url + '/assessment/get/' + assessmentId)
  }

  saveTestAi(payload) {
    return axios.post(this.url + '/test/save-ai-test', payload)
  }

  updateAiTestQUestions(payload) {
    return axios.post(this.url + '/question/update-ai-questions', payload)
  }

  getAiGeneratedTest(payload) {
    return axios.post(this.url + '/generate-ai-questions', payload)
  }

  saveCustomQuestions(payload) {
    return axios.post(this.url + '/question/save-custom-question', payload)
  }

  getAllTestsByAssessmentId(id) {
    return axios.get(this.url + '/test/get-all-tests/' + id)
  }

  saveAssessmentTest(payload) {
    return axios.post(this.url + '/assessment/save-assessment-test', payload)
  }

  getAssessmentDetails(id) {
    return axios.get(this.url + '/assessment/get-assessment-details/' + id)
  }

  getCustomQuestions(assessmentId) {
    return axios.get(this.url + '/assessment/get-custom-questions/' + assessmentId)
  }

  reorderAssessment(payload) {
    return axios.post(this.url + '/assessment/reorder-assessment', payload)
  }

  removeQuestionFromAssessment(payload) {
    return axios.post(this.url + '/assessment/remove-question-from-assessment', payload)
  }

  getPublishLink(assessmentId) {
    return axios.get(this.url + '/assessment/get-publish-link/' + assessmentId)
  }

  sendPublishLink(payload, assessmentId) {
    return axios.post(this.url + '/assessment/send-publish-link/' + assessmentId, payload)
  }

  getQuestion(questionId) {
    return axios.get(this.url + '/question/get-question/' + questionId)
  }

  saveAiCodeQuestion(payload) {
    return axios.post(this.url + '/question/save-ai-code-question', payload)
  }

  updateQuestion(payload) {
    return axios.post(this.url + '/question/update-question', payload)
  }

  getRoles(){
    return axios.get(this.url+'/user/role/role-list');
  }

  getAllQuestionByTestId(testId){
    return axios.get(this.url+'/test/get-all-questions-by-test-id/'+testId);
  }

  getProgrammingLanguages(){
    return axios.get(this.url+'/question/get-code-language');
  }
  
  getDivisionList(){
    return axios.get(this.url+'/division/division-list');
  }

  getSubdivisionListByDivisionId(divisionId){
    return axios.get(this.url+'/sub-division/sub-division-list/'+divisionId);
  }

  removeQualifyingQuestionFromAssessment(questionId) {
    return axios.post(this.url+'/question/uncheck-qualifying-question/'+questionId);
  }

  saveCustomCodeQuestions(payload) {
    return axios.post(this.url+'/question/save-custom-code-question', payload);
  }

  checkVerficationCode(code) {
    return axios.get(this.url + '/assessment/check-otp?otp='+ code)
  }
}

export default new AssessmentService()
