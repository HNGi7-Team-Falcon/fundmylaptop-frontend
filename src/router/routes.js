import { loadHTML } from '~/libs/fundmylaptop'
const path = require('path')

const routes = {
  '': () => {
    loadHTML(path.resolve(__dirname, '../pages') + '/home.html')
  },
  '/login': () => {
    loadHTML(path.resolve(__dirname, '../pages') + '/login.html')
  },
  '/signup': () => {
    loadHTML(path.resolve(__dirname, '../pages') + '/signup.html')
  },
  '/about/': () => {
    loadHTML(path.resolve(__dirname, '../pages') + '/about.html')
  },
  '/contact/': () => {
    loadHTML(path.resolve(__dirname, '../pages') + '/contact.html')
  }
}

export default routes
