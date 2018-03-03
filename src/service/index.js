import Axios from 'axios'

export function login (data) {
  let url = process.env.BASE_URL + '/login'
  return Axios.post(url, data)
}

export function registe (data) {
  let url = process.env.BASE_URL + '/registe'
  return Axios.post(url, data)
}

export function confirmCertificate (data) {
  let url = process.env.BASE_URL + '/confirmCertification'
  return Axios.post(url, data)
}

export function resetPassword (data) {
  let url = process.env.BASE_URL + '/resetPassword'
  return Axios.post(url, data)
}
