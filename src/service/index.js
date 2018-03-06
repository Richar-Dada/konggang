import Axios from 'axios'
import { Base64 } from 'js-base64'

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

export function getScheList (activeDate) {
  let url = process.env.BASE_URL + '/api/v1/schedul/' + Base64.encode(activeDate)
  return Axios.get(url)
}

export function booking (data) {
  let url = process.env.BASE_URL + '/api/v1/booking'
  return Axios.post(url, data)
}
