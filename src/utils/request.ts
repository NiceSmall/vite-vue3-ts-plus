import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const service = Axios.create({
  baseURL: '',
  timeout: 20000
})

service.interceptors.request.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage.error(`Code: ${code}, Message: ${msg}`)
      console.error(`[Axios Error]`, error.response)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default service
