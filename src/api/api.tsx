import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com/todos/1'

export const serviceUrl = {
  baseURL: baseURL,
  login: 'login/',
}

const axiosApi = axios.create({
  baseURL: serviceUrl.baseURL,
  withCredentials: true,
  headers: {},
  // auth: { Authorization: 'Bearer ' + { getToken } }
})

export async function apiCall(
  method: any,
  route: any,
  body: any,
  token = null
) {
  const onSuccess = function (response: any) {
    console.debug('Request Successful!', response)

    return response
  }

  const onError = function (error: any) {
    console.error('Request Failed:', error.config)

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx`
      console.error('Status:', error.response.status)
      console.error('Data:', error.response.data)
      console.error('Headers:', error.response.headers)
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message)
    }
    return error
  }

  return axiosApi({
    method: method,
    url: route,
    data: body,
  })
    .then(onSuccess)
    .catch(onError)
}
