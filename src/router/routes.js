import { loadHTML } from '~/libs/fundmylaptop'
const path = require('path')

const routes = {
  '/': () => {
    loadHTML(path.resolve(__dirname, '../src') + '/pages/index.html')
  },
  '/login': () => {
    loadHTML('../pages/login.html')
  },
  '/signup': () => {
    loadHTML('../pages/signup.html')
  },
  '/about': () => {
    loadHTML('../pages/about.html')
  },
  '/contact': () => {
    loadHTML('../pages/contact.html')
  }
}
export default routes
