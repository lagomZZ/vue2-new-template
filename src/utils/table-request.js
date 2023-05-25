import axios from 'axios'

const generateUrl = (url) => {
  let baseUrl = window.location.origin
  let u = url.replace(/\./g, '/')
  return `${baseUrl}/${u}`
}

function request(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(generateUrl(url), params)
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
export default request
