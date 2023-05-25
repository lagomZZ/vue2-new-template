import axios from 'axios'

const generateUrl = (url) => {
  let baseUrl = window.location.origin
  let u = url.replace(/\./g, '/')
  return `${baseUrl}/${u}`
}

function request(url) {
  return new Promise((resolve, reject) => {
    axios
      .post(generateUrl(url))
      .then((res) => {
        resolve(res.data.result.data)
      })
      .catch((e) => {
        reject(e)
      })
  })
}
export default request
