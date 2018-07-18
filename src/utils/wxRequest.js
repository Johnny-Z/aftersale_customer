import wepy from 'wepy'
import util from './util'
import md5 from './md5'
import tip from './tip'

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async(params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  data.sign = SIGN
  data.time = TIMESTAMP
  let res = await wepy.request({
    url: url,
    method: params.method || 'POST',
    data: data,
    header: { 'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJhY2NvdW50XCI6XCJhZG1pblwiLFwiYWNjb3VudE5vbkV4cGlyZWRcIjp0cnVlLFwiYWNjb3VudE5vbkxvY2tlZFwiOnRydWUsXCJhdXRob3JpdGllc1wiOltdLFwiY3JlYXRlVGltZVwiOjE1MzEyNzQ2MjMwMDAsXCJjcmVkZW50aWFsc05vbkV4cGlyZWRcIjp0cnVlLFwiZW5hYmxlZFwiOnRydWUsXCJpZFwiOjEsXCJuYW1lXCI6XCJhZG1pblwiLFwicGFzc3dvcmRcIjpcInNpbnNpbVwiLFwicGhvbmVcIjpcIjEzNTY2NjY3Nzc3XCIsXCJyb2xlSWRcIjoxLFwidXNlcm5hbWVcIjpcImFkbWluXCIsXCJ2YWxpZFwiOlwiMVwiLFwid2VjaGF0VW5pb25JZFwiOlwid2VjaGF0MjIyXCJ9IiwiZXhwIjoxNTM0NDc1MzY2fQ.tDY680tvyfgEbwjDEXSUGpmfAlec_IH-Qrw1HD_RB1ikLHbZYPp4UjqzE1gF7v2kYfM2Rf7pMc1-m3wcqdbjNQ' }
  })
  tip.loaded()
  return res
}

module.exports = {
  wxRequest
}
