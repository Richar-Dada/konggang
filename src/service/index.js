import Axios from 'axios'

export function login (data) {
  let url = process.env.BASE_URL + '/login'
  return Axios.post(url, data)
}
