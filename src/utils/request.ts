import Axios from 'axios'

// const baseURL = 'https://api.github.com'

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
      // const code = error.response.status
      // const msg = error.response.data.message
      console.error(`[Axios Error]`, error.response)
    } else {
      console.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default service
