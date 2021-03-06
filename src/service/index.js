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

export function sendCode (data) {
  let url = process.env.BASE_URL + '/sendCode'
  return Axios.post(url, data)
}

export function getScheList (activeDate, type) {
  let url = process.env.BASE_URL + '/api/v1/schedul/' + Base64.encode(activeDate) + '&' + type
  return Axios.get(url)
}

export function booking (data) {
  let url = process.env.BASE_URL + '/api/v1/booking'
  return Axios.post(url, data)
}

export function getBooking (username) {
  let url = process.env.BASE_URL + '/api/v1/booking/' + Base64.encode(username)
  return Axios.get(url)
}

export function deleteBooking (id) {
  let url = process.env.BASE_URL + '/api/v1/booking/' + id
  return Axios.delete(url)
}

export function remark (data) {
  let url = process.env.BASE_URL + '/api/v1/remark'
  return Axios.post(url, data)
}

export function isHoliday (date) {
  let url = `http://api.goseek.cn/Tools/holiday?date=${date}`
  return Axios.get(url)
}

export function getHoliday (year) {
  let url = process.env.BASE_URL + '/getHoliday/' + year
  return Axios.get(url)
}
