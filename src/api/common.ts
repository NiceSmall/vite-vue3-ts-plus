import request from '@/utils/request'

export function fetchConfig() {
  return request({
    url: '/api/config/fetch',
    method: 'get'
  })
}

export function fetchConfigList() {
  return request({
    url: '/api/config/fetch',
    method: 'get'
  })
}
