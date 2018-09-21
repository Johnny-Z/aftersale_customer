import {
  wxRequest,
  wxUploadFile
} from '@/utils/wxRequest'

const apiMall = 'https://eservice-tech.cn'
// const apiMall = 'http://localhost:8080/'
// const apiMall = 'http://192.168.43.223:8080'
const wxJsCode2Session = (params) => wxRequest(params, apiMall + '/api/wechat/jscode2session')

const getUserDetail = (params) => wxRequest(params, apiMall + '/api/user/detail')
const getCustomerListByCompany = (params) => wxRequest(params, apiMall + '/api/user/getUsersByType')
const getMachineList = (params) => wxRequest(params, apiMall + '/api/machine/list')
const getMachineListByCustomer = (params) => wxRequest(params, apiMall + '/api/machine/selectByAccount')
const getInstallRecordList = (params) => wxRequest(params, apiMall + '/api/install/record/getInstallRecordInfoList')
const getMaintainRecordList = (params) => wxRequest(params, apiMall + '/api/maintain/record/getMaintainRecordInfoList')
const getRepairRecordList = (params) => wxRequest(params, apiMall + '/api/repair/record/getRepairRecordInfoList')
const getPartDeliverList = (params) => wxRequest(params, apiMall + '/api/parts/info/getPartsInfoTaskByUserName')
const uploadInstallFeedback = (params) => wxRequest(params, apiMall + '/api/install/customer/feedback/add')
const uploadMaintainFeedback = (params) => wxRequest(params, apiMall + '/api/maintain/customer/feedback/add')
const uploadRepairFeedback = (params) => wxRequest(params, apiMall + '/api/repair/customer/feedback/add')
const uploadRepairRequestInfo = (params) => wxRequest(params, apiMall + '/api/repair/request/info/add')
const getPartsSendBackInfo = (params) => wxRequest(params, apiMall + '/api/parts/info/getPartsInfoByRepairRecordId')
const searchMachineByNameplate = (params) => wxRequest(params, apiMall + '/api/machine/selectByNameplateAndUserAccount')

const uploadRepairRequestFiles = (params) => wxUploadFile(params, apiMall + '/api/repair/request/info/update')
const uploadPartsInfoFiles = (params) => wxUploadFile(params, apiMall + '/api/parts/info/update')

export default {
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
  uploadRepairRequestFiles,
  uploadPartsInfoFiles
}
