import request from '../utils/request'
export const fetchData = query => {
  return request({
    url: 'http://push2ex.eastmoney.com/getStockFenShi?pagesize=20&ut=7eea3edcaed734bea9cbfc24409ed989&dpt=wzfscj&cb=jQuery112303080123618327957_1596907769636&pageindex=3&id=0005242&sort=1&ft=1&code=000524&market=0&_=1596907769641',
    method: 'get',
    params: query
  })
}

export const getCodeList = query => {
  return request({
    url: '/api/getCodeList',
    method: 'get',
    params: query
  })
}

export const sideSearch = query => {
  return request({
    url: '/api/index',
    method: 'get',
    params: query
  })
}

export const addOpt = query => {
  return request({
    url: '/api/addOpt',
    method: 'get',
    params: query
  })
}
export const updateOpt = query => {
  return request({
    url: '/api/updateOpt',
    method: 'get',
    params: query
  })
}
export const deleteOpt = query => {
  return request({
    url: '/api/deleteOpt',
    method: 'get',
    params: query
  })
}
export const addBuys = query => {
  return request({
    url: '/api/addBuys',
    method: 'get',
    params: query
  })
}

export const searchList = query => {
  return request({
    url:'/api/getCodeList',
    method: 'get',
    params: query
  })
}
export const searchList1 = query => {
  return request({
    url:'/api/getCodeList1',
    method: 'get',
    params: query
  })
}
export const searchList2 = query => {
  return request({
    url:'/api/getCodeList2',
    method: 'get',
    params: query
  })
}
export const searchList3 = query => {
  return request({
    url:'/api/getCodeList3',
    method: 'get',
    params: query
  })
}
export const searchList4 = query => {
  return request({
    url:'/api/getCodeList4',
    method: 'get',
    params: query
  })
}
export const searchList5 = query => {
  return request({
    url:'/api/getCodeList5',
    method: 'get',
    params: query
  })
}
export const searchList6 = query => {
  return request({
    url:'/api/getCodeList6',
    method: 'get',
    params: query
  })
}
export const searchList7 = query => {
  return request({
    url:'/api/getCodeList7',
    method: 'get',
    params: query
  })
}
export const searchList8 = query => {
  return request({
    url:'/api/getCodeList8',
    method: 'get',
    params: query
  })
}
export const searchList9 = query => {
  return request({
    url:'/api/getCodeList9',
    method: 'get',
    params: query
  })
}
export const searchList10 = query => {
  return request({
    url:'/api/getCodeList10',
    method: 'get',
    params: query
  })
}
export const addLots = query => {
  return request({
    url: '/api/addLots',
    method: 'get',
    params: query
  })
}
export const list = query => {
  return request({
    url:'/api/getList',
    method: 'get',
    params: query
  })
}
export const timingRequest = query => {
  return request({
    url:'/proxy/service/zhubi_ajax.html?',
    method: 'get',
    params: query
  })
}

