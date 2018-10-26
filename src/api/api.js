import {
  wxLogin,
  wxRequest,
  wxRequestRaw,
  wxUploadFile
} from '@/utils/wxRequest'

const apiMall = 'https://eservice-tech.cn/api'
// const apiMall = 'http://192.168.1.31:8080/'
// const apiMall = 'http://192.168.43.223:8080'
const login = (params) => wxRequest(params, apiMall + '/login')
const autoLogin = (params) => wxRequest(params, apiMall + '/wechat/user/info/getUsersByJsCode')
const wxJsCode2Session = (params) => wxLogin(params, apiMall + '/wechat/user/info/loginGetUnionIdAndSave')
const getUserDetail = (params) => wxRequest(params, apiMall + '/user/detail')
const getCustomerListByCompany = (params) => wxRequest(params, apiMall + '/user/getUsersByType')
const getMachineList = (params) => wxRequest(params, apiMall + '/machine/list')
const getMachineListByCustomer = (params) => wxRequest(params, apiMall + '/machine/selectByAccount')
const getInstallRecordList = (params) => wxRequest(params, apiMall + '/install/record/getInstallRecordInfoList')
const getMaintainRecordList = (params) => wxRequest(params, apiMall + '/maintain/record/getMaintainRecordInfoList')
const getRepairRecordList = (params) => wxRequest(params, apiMall + '/repair/record/getRepairRecordInfoList')
const getPartDeliverList = (params) => wxRequest(params, apiMall + '/parts/info/getPartsInfoTaskByUserName')
const uploadInstallFeedback = (params) => wxRequest(params, apiMall + '/install/customer/feedback/add')
const uploadMaintainFeedback = (params) => wxRequest(params, apiMall + '/maintain/customer/feedback/add')
const uploadRepairFeedback = (params) => wxRequest(params, apiMall + '/repair/customer/feedback/add')
const uploadRepairRequestInfo = (params) => wxRequest(params, apiMall + '/repair/request/info/add')
const getPartsSendBackInfo = (params) => wxRequest(params, apiMall + '/parts/info/getPartsInfoByRepairRecordId')
const searchMachineByNameplate = (params) => wxRequest(params, apiMall + '/machine/selectByNameplateAndUserAccount')
const getIssuePositionList = (params) => wxRequest(params, apiMall + '/issue/position/list/list')
const getPersonInfo = (params) => wxRequest(params, apiMall + '/wechat/user/info/getWechatUserInfoByAccount')
const updatePassword = (params) => wxRequest(params, apiMall + '/user/updatePassword')
const deleteContacts = (params) => wxRequestRaw(params, apiMall + '/user/update')
const addContacts = (params) => wxRequestRaw(params, apiMall + '/user/addStaff')

const uploadRepairRequestFiles = (params) => wxUploadFile(params, apiMall + '/repair/request/info/update')
const uploadPartsInfoFiles = (params) => wxUploadFile(params, apiMall + '/parts/info/update')

export default {
  login,
  autoLogin,
  wxJsCode2Session,
  getUserDetail,
  getCustomerListByCompany,
  getMachineList,
  getMachineListByCustomer,
  getInstallRecordList,
  getMaintainRecordList,
  getRepairRecordList,
  getPartDeliverList,
  uploadInstallFeedback,
  uploadMaintainFeedback,
  uploadRepairFeedback,
  uploadRepairRequestInfo,
  getPartsSendBackInfo,
  searchMachineByNameplate,
  getIssuePositionList,
  getPersonInfo,
  uploadRepairRequestFiles,
  updatePassword,
  deleteContacts,
  addContacts,
  uploadPartsInfoFiles
}
