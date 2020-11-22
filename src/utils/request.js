import axios from 'axios'

const service = axios.create({
  timeout: 15000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(new Error('error'))
  }
)

service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    } else {
      return Promise.reject(new Error('error'))
    }
  },
  error => {
    console.log(error)
    return Promise.reject(new Error('error'))
  }
)
export default service
