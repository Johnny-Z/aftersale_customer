import {
  wxRequest,
  wxUploadFile
} from '@/utils/wxRequest'

let env = '-test' // -dev 或者 -test
// const apiMall = 'https://sujiefs.com/'
// const apiMall = 'http://localhost:8080/'
const apiMall = 'http://192.168.43.223:8080'

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

const uploadRepairRequestFiles = (params) => wxUploadFile(params, apiMall + '/repair/request/info/update')

export default {
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
  uploadRepairRequestFiles
}
